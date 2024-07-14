# 身份验证与授权

使用 AskTable API 需要进行身份验证和授权，以确保只有经过授权的用户和应用程序才能访问和操作数据。本文将介绍如何进行身份验证和授权。

## 身份验证

身份验证是确保请求来自合法用户的过程。在使用 AskTable API 时，您需要提供 API Token 进行身份验证。

AskTable API 提供三种不同类型的 Token，用于不同的访问需求和权限控制。本文将详细介绍这些 Token 的用途、获取方式、适用场景以及如何使用它们进行身份验证和授权。

## Token 类型概述

AskTable 提供以下三种 Token 类型：

--|--|--|--|--
Token 类型|用途|获取方式|可访问的 API 列表｜有效期
`admin` Token|用于管理租户内的全部资源，具有最高权限。|访问 [AskTable 官网](https://www.asktable.com) 申请。｜全部 API|长期
`asker` Token|用于无差别地查询公开数据，适用于公开访问场景。|访问 [AskTable 官网](https://www.asktable.com) 申请。｜见下文 | 长期
`temp_asker` Token|用于有差别地查询非公开数据，适用于需要细粒度权限控制的场景。| 见下文｜同 `asker` |默认 2 小时


1. `asker` 和 `temp_asker` Token 可访问的 API 列表：

```http
GET /bots/<bot_id>
GET /chats/<chat_id>
GET /chats/<chat_id>/messages
POST /chats
GET /account/token
```



2. 如何获取 `temp_asker` Token：使用 `admin` Token，通过调用以下 API 申请：
```http
POST /account/temp_asker_token
Content-Type: application/json
Authorization: Bearer <admin_token>

{
  "user_profile": {
    "user_id": "123",
    "user_name": "test_user"
  },
  "role_id": "role_123",
  "role_variables": {
    "city_id": 345
  }
}
```


### 配置请求头

在每次请求中，您需要在请求头中包含以下信息：

- `Authorization`: `Bearer <您的 API Token>`
- `Content-Type`: application/json

其中，`<您的 API Token>` 可以是以上三种 Token 的任意一种。 
以下是一个使用 Python 的示例：


```python
import requests

url = "https://api.asktable.com/v1/data-sources"
headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}
response = requests.get(url, headers=headers)
print(response.json())
```


## 错误处理

在身份验证和授权过程中，可能会遇到以下错误：

- **401 Unauthorized**：表示请求未通过身份验证。请检查您的 API Token 是否正确。
- **403 Forbidden**：表示请求被拒绝访问资源。请检查您的角色和策略配置。

## 下一步

现在，您已经了解了如何进行身份验证和授权。接下来，请继续阅读 [常见请求与响应](./common-requests-and-responses.md) 文档，了解更多详细信息。
