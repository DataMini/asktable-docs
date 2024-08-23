# API：自然语言生成 SQL

## 概述

为了让用户可以直接使用 AskTable 的技术生成 SQL 查询，并自行执行查询以避免数据出公司内网，AskTable 提供了一个开放的 API 接口。通过该 API，用户可以利用 AskTable 的自然语言处理能力生成 SQL 查询，从而满足各种复杂的查询需求。

## API 端点
**POST** `/sqls`

## 请求 Payload
请求的 payload 需要包含以下字段：

```json
{
  "datasource_ids": [
    "string"
  ],
  "role_id": 0,
  "role_name": "string",
  "role_variables": {},
  "question": "string"
}
```



### 字段说明
- `datasource_ids` (必填): 一个包含数据源 ID 的数组，指定要查询的数据源。
- `role_id` (可选): 用户角色的 ID，用于权限控制。
- `role_name` (可选): 用户角色的名称，用于权限控制。
- `role_variables` (可选): 角色相关的变量，通常用于细化权限控制。
- `question` (必填): 用户的自然语言查询问题。

## 示例请求
以下是一个示例请求，用于生成 SQL 查询：

```json
{
  "datasource_ids": [
    "example_datasource_id"
  ],
  "role_id": 1,
  "role_variables": {
    "user_id": 123
  },
  "question": "获取所有在2021年销售超过1000件的产品"
}

```

### 请求示例代码 (Python)
```python
import requests

url = "https://api.asktable.com/v1/sqls"
headers = {
    "Authorization": "Bearer API_KEY_or_SESSION_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "datasource_ids": ["example_datasource_id"],
    "role_id": 1,
    "role_name": "data_analyst",
    "role_variables": {"user_id": 123},
    "question": "获取所有在2021年销售超过1000件的产品"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())

```



## 响应
成功的响应将返回生成的 SQL 查询，如下所示：
```python
{
    "question": "获取所有在2021年销售超过1000件的产品",
    "prepared_statement": "SELECT name, sales FROM products WHERE year=2021 AND sales>1000",
    "parameters": {},
    "header": {
        "name": "姓名",
        "sales": "销售额"
    }
}
```

### 响应字段说明
- `question`: 用户输入的自然语言查询问题。
- `prepared_statement`: 生成的 SQL 查询字符串。
- `parameters`: SQL 查询中使用的参数。
- `header`: 查询结果的描述信息，例如字段的解释。



## 总结
通过 AskTable 提供的 SQL 生成 API，用户可以方便地利用自然语言提出查询请求，并获取对应的 SQL 查询字符串。这种方式不仅简化了查询过程，还确保了数据的安全性和隐私性，避免数据出公司内网。

如对 SQL 生成过程有更多疑问，请访问 [AskTable 自然语言查询数据库](database-query-via-natural-language.md) 获取详细信息。
