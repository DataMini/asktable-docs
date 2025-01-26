#!/bin/bash

cd `dirname $0`

source .env

NODE_OPTIONS=--no-deprecation node --trace-deprecation translate_docs.js \
--inputDir ./docs \
--outputDir ./i18n/en/docusaurus-plugin-content-docs/current \
--targetLanguage english \
--concurrency 1 \
--model qwen-turbo