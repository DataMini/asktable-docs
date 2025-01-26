# Common Requests and Responses

Understanding common request and response formats is crucial when developing with the AskTable API. This article provides several common request and response examples to help you better understand and utilize the AskTable API.

For the complete API documentation, please refer to [API Documentation](https://api.asktable.com/).

## Example Interfaces

### Retrieve List of Data Sources

Retrieve a list of all data sources.

- **Request**

  ```http
  GET /v1/datasources
  ```

  ```json
  {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
  }
  ```

- **Response**

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

### Add Data Source

Add a new data source.

- **Request**

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
    "name": "New Data Source",
    "engine": "mysql",
    "access_config": {
      "host": "localhost",
      "port": 3306,
      "user": "user",
    }
  }
  ```

### Create AI Chat

Create a new AI chat session.

- **Request**

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

- **Response**

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

### Send Message

Send a message in the chat session.

- **Request**

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
    "question": "Hello"
  }
  ```

- **Response**

  ```json
  {
    "id": "msg_13vbSjTk6ZV",
    "chat_id": "chat_123456",
    "created": 1719304839,
    "role": "ai",
    "content": {
      "status": "OK",
      "elapsed_time": 1,
      "text": "Hello! Is there anything I can help you with?",
      "files": null,
      "charts": null,
      "query_insights": null,
      "payload": null
    },
    "reply_to_msg_id": "msg_3rtfLVtR3q7"
  }
  ```

## Error Handling

When using the AskTable API, you may encounter the following errors:

- **400 Bad Request**: There is an error in the request parameters. Please check your request format and parameters.

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

- **401 Unauthorized**: The request authentication failed. Please check your API-Key for correctness.
- **403 Forbidden**: The request is forbidden access to the resource. Please check your role and policy configuration.
- **404 Not Found**: The requested resource does not exist. Please check your URL and resource ID.

Through these common request and response examples, you can better understand how to use the AskTable API for development. For more detailed information, please refer to the [API Documentation](https://api.asktable.com/).