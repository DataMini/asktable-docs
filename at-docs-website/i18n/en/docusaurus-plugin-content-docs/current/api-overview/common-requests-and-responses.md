# 常见请求与响应

在使用 AskTable API 进行开发时，了解常见的请求和响应格式非常重要。本文将介绍若干常见的请求和响应示例，帮助您更好地理解和使用 AskTable API。

查看完整的 API 文档，请参考 [API 文档](https://api.asktable.com/)。


## 部分接口的示例

###  查询数据源列表

获取所有数据源的列表。

- **请求**

  ```http
  GET /v1/datasources
  ```

  ```json
  {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
  }
  ```

- **响应**

  ```json
  {
    "data": [
      {
        "tenant_id": "t_1vY0oS1yLmWs1",
        "id": "ds_2AbPlBI3RXWG",
        "created_at": "2024-06-21T17:01:12",
        "name": "at_test_tidb_ds_name",
        "engine": "tidb",
        "access_config": {
          "db": "test",
          "host": "192.168.3.25",
          "port": 4000,
          "user": "root",
        },
        "sample_questions": null,
        "meta_status": "success",
        "meta_error": ""
      },
      {
        "tenant_id": "t_1vY0jUSsoS1yLmWs1",
        "id": "ds_72RPwThDP7SXIO",
        "created_at": "2024-06-21T16:57:58",
        "name": "at_test_oceanbase_ds_name",
        "engine": "oceanbase",
        "access_config": {
          "db": "test",
          "host": "obmj30-mi.cn-hangzhou.oceanbase.aliyuncs.com",
          "port": 3306,
          "user": "admin",
        },
        "sample_questions": null,
        "meta_status": "failed",
        "meta_error": "Failed to retrieve metadata from MySQL: obmtj30-mi.cn-hangzhou.oceanbase.aliyuncs.com:3306 (pymysql.err.OperationalError) (2003, \"Can't connect to MySQL server on 'obmq0-mi.cn-hangzhou.oceanbase.aliyuncs.com' ([Errno 8] nodename nor servname provided, or not known)\")\n(Background on this error at: https://sqlalche.me/e/20/e3q8) type RetrieveMetaError"
      }
    ],
    "total": 239,
    "page_size": 2,
    "page_number": 1,
    "total_page": 120
  }
  ```

### 添加数据源

添加一个新的数据源。

- **请求**

  ```http
  POST /v1/datasources
  ```

  ```json
  {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
  }
  ```

  ```json
  {
    "name": "新的数据源",
    "engine": "mysql",
    "access_config": {
      "host": "localhost",
      "port": 3306,
      "user": "user",
    }
  }
  ```



### 创建 AI 对话

创建一个新的 AI 对话。

- **请求**

  ```http
  POST /v1/chats
  ```

  ```json
  {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
  }
  ```

  ```json
  {
    "datasource_ids": ["ds_123456"],
    "role_id": "role_123456"
  }
  ```

- **响应**

  ```json
  {
    "tenant_id": "t_1vLmWs1",
    "id": "chat_7GuvhfzD4P",
    "name": null,
    "datasource_ids": [
      "ds_123456"
    ],
    "human_msgs": null,
    "ai_msgs": null,
    "created": 1719304782,
    "latest_msg": null,
    "role_id": null,
    "role_variables": null
  }
  ```

### 发送消息

在对话中发送消息。

- **请求**

  ```http
  POST /v1/chats/{chat_id}/messages
  ```

  ```json
  {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
  }
  ```

  ```json
  {
    "question": "你好"
  }
  ```

- **响应**

  ```json
  {
    "id": "msg_13vbSjTk6ZV",
    "chat_id": "chat_123456",
    "created": 1719304839,
    "role": "ai",
    "content": {
      "status": "OK",
      "elapsed_time": 1,
      "text": "你好！有什么我可以帮助你的吗？",
      "files": null,
      "charts": null,
      "query_insights": null,
      "payload": null
    },
    "reply_to_msg_id": "msg_3rtfLVtR3q7"
  }
  ```


## 错误处理

在使用 AskTable API 时，可能会遇到以下错误：

- **400 Bad Request**：请求参数有误，请检查您的请求格式和参数。

  ```json
  {
    "code": 1004,
    "error": "RequestValidationError",
    "error_detail": {
    "question": "'question' is a required property"
  },
    "message": "400 Bad Request: The browser (or proxy) sent a request that this server could not understand."
  }
  ```

- **401 Unauthorized**：请求未通过身份验证，请检查您的 API-Key 是否正确。
- **403 Forbidden**：请求被拒绝访问资源，请检查您的角色和策略配置。
- **404 Not Found**：请求的资源不存在，请检查您的 URL 和资源 ID。

通过这些常见的请求和响应示例，您可以更好地理解如何使用 AskTable API 进行开发。如需更多详细信息，请参考 [API 文档](https://api.asktable.com/)。
