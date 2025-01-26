const fs = require('fs');
const path = require('path');
const { Configuration, OpenAIApi } = require('openai');
const async = require('async');
const cliProgress = require('cli-progress');

async function translateContent(content, targetLanguage, apiKey, apiUrl, model) {
    try {
        const configuration = new Configuration({
            apiKey: apiKey,
            basePath: apiUrl || 'https://api.openai.com/v1',
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createChatCompletion({
            model: model,
            messages: [
                { role: 'system', content: `You are a professional translator. Translate this content into ${targetLanguage}.` },
                { role: 'user', content: content },
            ],
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        return { error: error.message };
    }
}

async function processFile(filePath, outputDir, targetLanguage, apiKey, apiUrl, model) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const translatedContent = await translateContent(content, targetLanguage, apiKey, apiUrl, model);

        if (translatedContent.error) {
            return { success: false, file: filePath, error: translatedContent.error };
        }

        const outputFilePath = path.join(outputDir, path.basename(filePath));
        fs.writeFileSync(outputFilePath, translatedContent, 'utf-8');

        return { success: true, file: filePath };
    } catch (error) {
        return { success: false, file: filePath, error: error.message };
    }
}

async function translateMarkdownFiles(inputDir, outputDir, targetLanguage, concurrency, apiKey, apiUrl, model) {
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

    let successCount = 0;
    let failCount = 0;
    const failedFiles = [];

    await async.eachLimit(files, concurrency, async (filePath) => {
        const result = await processFile(filePath, outputDir, targetLanguage, apiKey, apiUrl, model);
        if (result.success) {
            successCount++;
        } else {
            failCount++;
            failedFiles.push({ file: result.file, error: result.error });
        }
        bar.increment();
    });

    bar.stop();

    console.log(`\n翻译完成！`);
    console.log(`总文件数: ${totalFiles}`);
    console.log(`成功翻译: ${successCount}`);
    console.log(`失败翻译: ${failCount}`);

    if (failedFiles.length > 0) {
        console.log('以下文件翻译失败:');
        failedFiles.forEach(({ file, error }) => {
            console.log(`- ${file}: ${error}`);
        });
    }
}

// 命令行解析
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('inputDir', { type: 'string', demandOption: true, describe: '源语言文件目录' })
    .option('outputDir', { type: 'string', demandOption: true, describe: '目标语言文件目录' })
    .option('targetLanguage', { type: 'string', demandOption: true, describe: '目标语言代码，如 "en" 或 "zh"' })
    .option('concurrency', { type: 'number', default: 3, describe: '并发翻译文件数，默认 3' })
    .option('apiKey', { type: 'string', demandOption: true, describe: 'OpenAI API 密钥' })
    .option('apiUrl', { type: 'string', describe: 'OpenAI API URL，自定义时使用' })
    .option('model', { type: 'string', default: 'gpt-4', describe: '使用的 OpenAI 模型名称，默认 "gpt-4"' })
    .help()
    .argv;

// 执行翻译
translateMarkdownFiles(
    argv.inputDir,
    argv.outputDir,
    argv.targetLanguage,
    argv.concurrency,
    argv.apiKey,
    argv.apiUrl,
    argv.model
);
