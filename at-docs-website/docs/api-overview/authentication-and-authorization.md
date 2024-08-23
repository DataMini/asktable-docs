# 身份验证与授权

使用 AskTable API 需要进行身份验证和授权，以确保只有经过授权的用户和应用程序才能访问和操作数据。本文将介绍如何进行身份验证和授权。

## 身份验证

身份验证是确保请求来自合法用户的过程。在使用 AskTable API 时，您需要提供 API-Key 或 Temp-Token 进行身份验证。

API-Key 是一种提供给应用程序用于访问 AskTable API 的密钥。Temp-Token 是一种临时的身份验证令牌，用于在一段时间内访问 API。

本文将详细介绍 API-Key 和 Temp-Token 的用途、获取方式、适用场景以及如何使用它们进行身份验证和授权。

###  API-Key  

AskTable 提供两种不同类型的 API-Key ，用于不同的访问需求和权限控制。

| API-Key  类型    | 用途                      | 获取方式                                             | 可访问的 API 列表                   | 有效期      |
|---------------|-------------------------|--------------------------------------------------|-----------------------------------|-------------|
| `admin`    | 用于管理项目内的全部资源，具有最高权限。    | 通过 [AskTable 云服务](https://cloud.asktable.com) 创建 | 全部 API                          | 长期        |
| `asker`    | 用于查询公开数据，适用于公开访问场景。 | 通过 [AskTable 云服务](https://cloud.asktable.com) 创建   | 见下文                             | 长期        |



其中 `asker` API-Key 可访问的 API 列表：

| API 路径 | 方法 | 描述 |
|---------|------|------|
|`/bots/<bot_id>` | GET | 获取指定机器人的信息 |
| `/chats/<chat_id>` | GET | 获取指定聊天的详细信息 |
| `/chats/<chat_id>`/messages | GET | 获取指定聊天的消息列表 |
| /chats | POST | 创建新的聊天会话 |
| /account/token | GET | 获取账户的访问令牌 |
| /at-auth/me | GET | 获取当前认证用户的信息 |
| /at-auth/tokens | POST | 创建新的认证令牌 |

### Temp-Token

Temp-Token 是一种临时的身份验证令牌，用于在一段时间内访问 API。Temp-Token 是由 API-Key 生成的，用于在一段时间内访问 API。

生成 Temp-Token 的 API 如下：

```http
POST /at-auth/tokens
Content-Type: application/json
Authorization: Bearer <API_KEY>

{
  "ak_role": "admin",
  "chat_role": {
    "role_id": "1",
    "role_vars": {
      "id": "42"
    }
  },
  "user_profile": {
    "name": "张三"
  },
  "token_ttl": 900
}
```


## 配置请求头

在每次请求中，您需要在请求头中包含以下信息：

- `Authorization`: `Bearer <您的 API-Key 或 Temp-Token>`
- `Content-Type`: application/json


以下是一个使用 Python 的示例：

```python
import requests

url = "https://api.asktable.com/v1/at-auth/me"
headers = {
    "Authorization": "Bearer API_KEY_or_SESSION_TOKEN",
    "Content-Type": "application/json"
}
response = requests.get(url, headers=headers)
print(response.json())
```


## 错误处理

在身份验证和授权过程中，可能会遇到以下错误：

- **401 Unauthorized**：表示请求未通过身份验证。请检查您的 API-Key 是否正确。
- **403 Forbidden**：表示请求被拒绝访问资源。请检查您的角色和策略配置。

## 下一步

现在，您已经了解了如何进行身份验证和授权。接下来，请继续阅读 [常见请求与响应](./common-requests-and-responses.md) 文档，了解更多详细信息。
