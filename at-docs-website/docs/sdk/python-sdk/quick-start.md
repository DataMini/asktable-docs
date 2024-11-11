# Python SDK 快速入门

## 介绍

通过 AskTable 的 Python SDK，您可以快速开始与 AskTable 进行交互。本指南将引导您完成一些基本操作，完整文档请参考 [SDK 代码仓库](https://github.com/DataMini/asktable-python)。

## 前提条件

- 已安装 AskTable 的 Python SDK。请参考[安装指南](./installation.md)。


## 快速入门示例

1. **初始化 SDK**

    ```python
    from asktable import Asktable

    # 替换为您的 API-Key
    api_key = 'API_KEY_or_TEMP_TOKEN'
    api_url = 'https://api.asktable.com/v1'

    at = Asktable(api_key=api_key, base_url=api_url)
    ```

2. **列出数据源**

    ```python
    datasources = at.datasources.list()
    for ds in datasources.items:
        print(f"ID: {ds.id}, Name: {ds.name}")
    ```

3. **创建数据源**

    ```python
    new_datasource = at.datasources.create(
        name='NewDataSource',
        engine='excel',
        access_config={
            "location_url": "your-excel-file-url",
            "location_type": "http"
        }
    )
    print(f"Created DataSource ID: {new_datasource.id}")
    ```
    
4. **快速查询**
   ```python
   answer = client.single_turn.q2a.create(
        question="your-question",
        datasource_id="your-datasource-id"
    )
   print(answer.text)
   ```
   
5. **创建bot**

    ```python
    datasource_ids = ['ds_1']
    bot=at.bots.create(
        datasource_ids=datasource_ids,
        name="testt",
    )
    print(bot.id)
    ```

6. **创建chat**

    ```python
    chat=at.chats.create(
        bot_id=bot.id,
        name="test",
    )
    print(chat.id)
    ```
    
7. **对话查询**

    ```python
    msg=at.chats.messages.create(
        chat_id=chat.id,
        question="第一名的成绩是多少",
    )
    print(msg.content['text'])
    ```

通过上述步骤，您可以快速入门并使用 AskTable 的 Python SDK 进行基本操作。
