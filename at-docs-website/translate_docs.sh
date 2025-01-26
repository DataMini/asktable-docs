#!/bin/bash

cd `dirname $0`

node translate_docs.js \
--inputDir ./docs \
--outputDir ./i18n/en/docusaurus-plugin-content-docs/current2 \
--targetLanguage en \
--concurrency 1 \
--apiKey sk-Oi8887aAKvZxGpvJ424cF79eCb384d6a9bDaA797895cD631 \
--apiUrl https://aiproxy.dminfra.cn/v1 \
--model Qwen2.5-72B-Instruct-128K