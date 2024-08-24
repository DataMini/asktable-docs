# API：自然语言生成 SQL

## 概述

AskTable 提供了一个用于生成 SQL 的 API 接口。通过该 API，开发者可以利用 AskTable 的自然语言处理能力自动生成 SQL ，从而满足各种特定场景。

适应场景
1. 开发者不想针对不同的用户需求，实现不同的问答逻辑，想通过一个页面提供统一查询服务
2. 开发者不想使用 AskTable 的 UI 界面，想自己实现一个 UI 界面
3. 开发者想自己访问数据库，而不是通过 AskTable 访问数据库。


## API 端点
**POST** `/single-turn/q2s`

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

### 请求示例代码 (Python)
```python
import requests

url = "https://api.asktable.com/v1/single-turn/q2s"
headers = {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "datasource_id": "example_datasource_id",
    "role_id": 1,
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
- 更多字段请参考 [API 文档](https://api.asktable.com/)



## 总结
通过 AskTable 提供的 SQL 生成 API，用户可以方便地利用自然语言提出查询请求，并获取对应的 SQL 查询字符串。这种方式不仅简化了查询过程，还确保了数据的安全性和隐私性，避免数据出公司内网。

如对 SQL 生成过程有更多疑问，请访问 [AskTable 自然语言查询数据库](database-query-via-natural-language.md) 获取详细信息。