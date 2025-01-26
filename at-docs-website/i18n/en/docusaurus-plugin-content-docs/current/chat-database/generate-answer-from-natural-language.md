# API：自然语言查数

## 概述

AskTable 提供了一个用于从自然语言查询生成 SQL 并直接返回查询结果的 API 接口。通过该 API，开发者可以利用 AskTable 的自然语言处理能力，快速获取数据库中的信息。这对于需要简化查询过程和提高开发效率的场景尤为适用。

适应场景
1. 开发者希望用户能直接通过自然语言查询获取数据，而不需要自行处理 SQL 语句的生成和执行。
2. 开发者不想使用 AskTable 的 UI 界面，想自己实现一个 UI 界面，直接展示查询结果。
3. 开发者希望提供灵活的查询方式，适用于多种用户场景。

## API 端点
**POST** `/single-turn/q2a`

## 请求 Payload
请求的 payload 需要包含以下字段：

```json
{
  "datasource_id": "string",
  "role_id": "string",
  "role_variables": {},
  "question": "string",
  "max_rows": 0
}
```

### 字段说明
- `datasource_id` (必填): 数据源 ID，指定要查询的数据源。
- `role_id` (可选): 用户角色的 ID，用于权限控制。
- `role_variables` (可选): 角色相关的变量，通常用于细化权限控制。
- `question` (必填): 用户的自然语言查询问题。
- `max_rows` (可选): 限制返回结果的最大行数，设置为 0 则返回所有结果。

## 示例请求
以下是一个示例请求，用于生成 SQL 查询并获取查询结果：

### 请求示例代码 (Python)
```python
import requests

url = "https://api.asktable.com/v1/single-turn/q2a"
headers = {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "datasource_id": "example_datasource_id",
    "role_id": 1,
    "role_variables": {"user_id": 123},
    "question": "有多少国家？",
    "max_rows": 10
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

## 响应
成功的响应将返回查询的结果，包括查询生成的 SQL、执行时间、以及查询结果等信息。典型的响应示例如下：

```json
{
    "status": "OK",
    "elapsed_time": 6,
    "text": "共有206个国家。",
    "files": null,
    "charts": null,
    "query_insights": [
        {
            "datasource_id": "ds_32r3zkHMPKn21O6SMPlF0u",
            "question": "有多少国家？",
            "step": "generate",
            "insight": [
                {
                    "name": "get_cache",
                    "duration": 0.3,
                    "detail": {
                        "cached_query": {
                            "prepared_statement": "SELECT COUNT(*) FROM olympics2024.athletes",
                            "params": {}
                        },
                        "cache_id": "74550b5a-0538-516a-804d-7d8615bd358f"
                    }
                },
                {
                    "name": "rewrite_cache",
                    "duration": 1.8,
                    "detail": {
                        "rewritten_query": {
                            "prepared_statement": "SELECT COUNT(DISTINCT country) FROM olympics2024.athletes",
                            "params": {}
                        }
                    }
                }
            ]
        },
        {
            "datasource_id": "ds_32r3zkHMPKn21O6SMPlF0u",
            "question": "有多少国家？",
            "step": "execute",
            "insight": [
                {
                    "name": "exec_query",
                    "duration": 0.1,
                    "detail": {}
                },
                {
                    "name": "save_cache",
                    "duration": 0.1,
                    "detail": {
                        "cache_id": "7a620814-e4fd-5314-b30d-080aaf8f6416"
                    }
                }
            ]
        }
    ],
    "payload": {
        "recognized_addresses": null,
        "error_type": "",
        "error_msg": ""
    }
}
```

### 响应字段说明
- `status`: 请求的状态，一般为 "OK"。
- `elapsed_time`: 查询执行的总时间（以秒为单位）。
- `text`: 基于查询结果生成的自然语言答案。
- `files`: 生成的文件（如果有）。
- `charts`: 生成的图表（如果有）。
- `query_insights`: 查询执行的详细步骤和时间，包括生成 SQL、执行查询、缓存处理等信息。
- `payload`: 请求中的相关信息，包括错误类型和错误信息等。

## 总结
通过 AskTable 提供的自然语言查数 API，用户可以轻松地从数据库中获取所需信息，无需编写复杂的 SQL 查询。这种方式不仅简化了查询过程，还确保了数据的准确性和及时性，适用于各种需要快速获取数据的场景。

如对 API 使用有更多疑问，请访问 [AskTable 文档](https://api.asktable.com/) 获取详细信息。