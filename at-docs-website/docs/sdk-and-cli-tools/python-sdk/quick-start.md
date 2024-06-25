# Python SDK 快速入门

## 介绍

通过 AskTable 的 Python SDK，您可以快速开始与 AskTable 进行交互。本指南将引导您完成一些基本操作。

## 前提条件

- 已安装 AskTable 的 Python SDK。请参考[安装指南](./installation.md)。

## 快速入门示例

1. **初始化 SDK**

    ```python
    from asktable import AskTable

    # 替换为您的 API Token
    token = 'YOUR_API_TOKEN'
    api_url = 'https://api.asktable.com'

    at = AskTable(token=token, api_url=api_url)
    ```

2. **列出数据源**

    ```python
    datasources = at.datasources.list()
    for ds in datasources:
        print(f"ID: {ds.id}, Name: {ds.name}")
    ```

3. **创建数据源**

    ```python
    new_datasource = at.datasources.create(
        name='New DataSource',
        engine='mysql',
        access_config={
            'host': 'your-database-host',
            'port': 3306,
            'user': 'your-database-user',
            'password': 'your-database-password',
            'db': 'your-database-name',
        }
    )
    print(f"Created DataSource ID: {new_datasource.id}")
    ```

4. **创建角色和策略**

    ```python
    policy = at.policies.create(
        permission='allow',
        name='allow_myself',
        dataset_config={
            "datasource_ids": new_datasource.id,
            "rows_filters": {
                new_datasource.id: [
                    '*.*.employee_id = {{employee_id}}',
                ]
            }
        }
    )

    role = at.roles.create(
        name='comm_user',
        policy_ids=[policy.id]
    )
    ```

5. **创建对话并查询**

    ```python
    chat = at.chats.create(
        datasource_ids=[new_datasource.id],
        role_name='comm_user',
        role_variables={'employee_id': 2}
    )

    question = "李娜24年五月份是否有请过假"
    response = chat.ask(question)
    print(response['text'])  # 输出：是，请过假。
    ```

通过上述步骤，您可以快速入门并使用 AskTable 的 Python SDK 进行基本操作。
