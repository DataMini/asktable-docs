const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
const async = require('async');
const cliProgress = require('cli-progress');


// 从环境变量中读取 API 密钥和 URL
const API_KEY = process.env.OPENAI_API_KEY;
const API_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';


if (!API_KEY) {
    console.error("Error: OPENAI_API_KEY is not set.");
    process.exit(1);
}

// 初始化配置
const openai = new OpenAI({
    apiKey: API_KEY,
    baseURL: API_BASE_URL, // 如果没有自定义 URL，可以省略这个字段
});

async function translateContent(content, targetLanguage, model) {
    try {
        const response = await openai.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: `You are a professional translator. Translate this content into ${targetLanguage}.` },
                { role: 'user', content: content },
            ],
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error(`Error translating: ${error.message}`);
        return { error: error.message };
    }
}


async function processFile(filePath, inputDir, outputDir, targetLanguage, model) {
    try {
        // 计算相对路径
        const relativePath = path.relative(inputDir, filePath);
        // 构建目标文件的完整路径
        const outputFilePath = path.join(outputDir, relativePath);
        
        // 检查目标文件是否已存在
        if (fs.existsSync(outputFilePath)) {
            return { success: true, file: filePath, skipped: true };
        }

        const content = fs.readFileSync(filePath, 'utf-8');
        const translatedContent = await translateContent(content, targetLanguage, model);

        if (translatedContent.error) {
            return { success: false, file: filePath, error: translatedContent.error };
        }

        // 确保目标目录存在
        const outputFileDir = path.dirname(outputFilePath);
        if (!fs.existsSync(outputFileDir)) {
            fs.mkdirSync(outputFileDir, { recursive: true });
        }
        
        fs.writeFileSync(outputFilePath, translatedContent, 'utf-8');

        return { success: true, file: filePath };
    } catch (error) {
        return { success: false, file: filePath, error: error.message };
    }
}

async function translateMarkdownFiles(inputDir, outputDir, targetLanguage, concurrency, model) {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = [];
    function getFilesRecursive(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                getFilesRecursive(fullPath);
            } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
                files.push(fullPath);
            }
        }
    }

    getFilesRecursive(inputDir);

    const totalFiles = files.length;
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(totalFiles, 0);

    console.log(`开始翻译,共 ${totalFiles} 个文件...`);

    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;
    const failedFiles = [];

    await async.eachLimit(files, concurrency, async (filePath) => {
        const result = await processFile(filePath, inputDir, outputDir, targetLanguage, model);
        if (result.success) {
            if (result.skipped) {
                skippedCount++;
                console.log(`⏭️ 跳过已存在: ${path.basename(filePath)} (${successCount + skippedCount}/${totalFiles})`);
            } else {
                successCount++;
                console.log(`✅ 成功翻译: ${path.basename(filePath)} (${successCount + skippedCount}/${totalFiles})`);
            }
        } else {
            failCount++;
            failedFiles.push(result.file);
            console.log(`❌ 翻译失败: ${path.basename(filePath)} - ${result.error}`);
        }
        bar.update(successCount + failCount + skippedCount);
    });

    bar.stop();

    console.log(`\n翻译完成!`);
    console.log(`总文件数: ${totalFiles}`);
    console.log(`成功翻译: ${successCount}`);
    console.log(`已跳过: ${skippedCount}`);
    console.log(`翻译失败: ${failCount}`);

    if (failedFiles.length > 0) {
        console.log('失败的文件:');
        failedFiles.forEach(file => console.log(file));
    }
}

// 使用示例
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('inputDir', { type: 'string', demandOption: true, describe: '源语言文件目录' })
    .option('outputDir', { type: 'string', demandOption: true, describe: '目标语言文件目录' })
    .option('targetLanguage', { type: 'string', demandOption: true, describe: '目标语言代码，如 "en" 或 "zh"' })
    .option('concurrency', { type: 'number', default: 3, describe: '并发翻译文件数，默认 3' })
    .option('model', { type: 'string', default: 'gpt-3.5-turbo', describe: '使用的 OpenAI 模型名称，默认 "gpt-3.5-turbo"' })
    .help()
    .argv;

translateMarkdownFiles(
    argv.inputDir,
    argv.outputDir,
    argv.targetLanguage,
    argv.concurrency,
    argv.model
);
