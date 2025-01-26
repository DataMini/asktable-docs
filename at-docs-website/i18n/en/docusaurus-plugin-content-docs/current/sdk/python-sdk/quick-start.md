# Quick Start Guide for Python SDK

## Introduction

With the Python SDK from AskTable, you can quickly start interacting with AskTable. This guide will walk you through some basic operations.

Other references:
- [AskTable Python SDK Detailed Documentation](https://github.com/DataMini/asktable-python)
- [AskTable Python SDK PyPI Repository](https://pypi.org/project/asktable/)

## Prerequisites

- The AskTable Python SDK is installed. Please refer to the [Installation Guide](./installation.md).

## Quick Start Example

1. **Initialize the SDK**

    ```python
    from asktable import Asktable

    # Replace with your API-Key
    api_key = 'API_KEY_or_TEMP_TOKEN'
    api_url = 'https://api.asktable.com/v1'

    at = Asktable(api_key=api_key, base_url=api_url)
    ```

2. **List Data Sources**

    ```python
    datasources = at.datasources.list()
    for ds in datasources.items:
        print(f"ID: {ds.id}, Name: {ds.name}")
    ```

3. **Create a Data Source**

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

4. **Quick Query**
   ```python
   answer = at.single_turn.q2a.create(
        question="your-question",
        datasource_id="your-datasource-id"
    )
   print(answer.text)
   ```

5. **Create a Bot**

    ```python
    datasource_ids = ['ds_1']
    bot = at.bots.create(
        datasource_ids=datasource_ids,
        name="testt",
    )
    print(bot.id)
    ```

6. **Create a Chat**

    ```python
    chat = at.chats.create(
        bot_id=bot.id,
        name="test",
    )
    print(chat.id)
    ```

7. **Conversation Query**

    ```python
    msg = at.chats.messages.create(
        chat_id=chat.id,
        question="What is the score of the top student?",
    )
    print(msg.content['text'])
    ```

By following these steps, you can quickly get started and perform basic operations using the AskTable Python SDK.