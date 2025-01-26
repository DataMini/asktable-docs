import os
import openai
import concurrent.futures
from tqdm import tqdm

# 调用 OpenAI API 翻译内容
def translate_content(content, target_language="en", api_key=None, api_url=None, model="gpt-4"):
    """调用 OpenAI API 翻译内容"""
    try:
        openai.api_key = api_key
        if api_url:
            openai.api_base = api_url
        
        response = openai.ChatCompletion.create(
            model=model,
            messages=[
                {"role": "system", "content": f"You are a professional translator. Translate this content into {target_language}."},
                {"role": "user", "content": content}
            ]
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return None, str(e)

def process_file(file_path, output_dir, target_language, api_key, api_url, model):
    """处理单个文件的翻译"""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        translated_content = translate_content(content, target_language, api_key, api_url, model)
        if translated_content is None:
            return False, file_path

        output_path = os.path.join(output_dir, os.path.basename(file_path))
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(translated_content)

        return True, file_path
    except Exception as e:
        return False, file_path

def translate_markdown_files(input_dir, output_dir, target_language="en", max_workers=3, api_key=None, api_url=None, model="gpt-4"):
    """翻译目录下的所有 Markdown 文件"""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    files = [os.path.join(root, file) for root, _, files in os.walk(input_dir) for file in files if file.endswith(".md")]
    total_files = len(files)

    progress = tqdm(total=total_files, desc="Translating", unit="file")

    success_count = 0
    fail_count = 0
    failed_files = []

    def translate_worker(file_path):
        success, file = process_file(file_path, output_dir, target_language, api_key, api_url, model)
        return success, file

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(translate_worker, file): file for file in files}
        for future in concurrent.futures.as_completed(futures):
            success, file = future.result()
            if success:
                success_count += 1
            else:
                fail_count += 1
                failed_files.append(file)
            progress.update(1)

    progress.close()

    print(f"\n翻译完成！")
    print(f"总文件数: {total_files}")
    print(f"成功翻译: {success_count}")
    print(f"失败翻译: {fail_count}")
    if failed_files:
        print("以下文件翻译失败:")
        for file in failed_files:
            print(f"- {file}")

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="批量翻译 Markdown 文件")
    parser.add_argument("input_dir", help="源语言文件目录")
    parser.add_argument("output_dir", help="目标语言文件目录")
    parser.add_argument("target_language", help="目标语言代码，如 'en'、'zh' 等")
    parser.add_argument("--concurrency", type=int, default=3, help="并发翻译文件数，默认 3")
    parser.add_argument("--api_key", required=True, help="OpenAI API 密钥")
    parser.add_argument("--api_url", default=None, help="OpenAI API URL，自定义时使用")
    parser.add_argument("--model", default="gpt-4", help="使用的 OpenAI 模型名称，默认 'gpt-4'")

    args = parser.parse_args()

    translate_markdown_files(
        input_dir=args.input_dir,
        output_dir=args.output_dir,
        target_language=args.target_language,
        max_workers=args.concurrency,
        api_key=args.api_key,
        api_url=args.api_url,
        model=args.model
    )
