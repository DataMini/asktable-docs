# 身份验证与授权

使用 AskTable API 需要进行身份验证和授权，以确保只有经过授权的用户和应用程序才能访问和操作数据。本文将介绍如何进行身份验证和授权。

## 身份验证

身份验证是确保请求来自合法用户的过程。在使用 AskTable API 时，您需要提供 API Token 进行身份验证。

### 获取 API Token

要获取 API Token，请按照以下步骤操作：

1. **创建账户**：访问 [AskTable 官网](https://www.asktable.com) 并创建一个账户。
2. **获取 Token**：登录账户后，在个人设置页面生成一个 API Token。

### 配置请求头

在每次请求中，您需要在请求头中包含以下信息：

- `Authorization`: `Bearer <您的 API Token>`
- `Content-Type`: application/json

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

## 授权

授权是指控制用户对资源的访问权限。AskTable 通过角色和策略来管理授权。

### 角色

角色是一组权限的集合。通过创建角色并为其分配权限，可以控制用户对资源的访问。

- **创建角色**：使用 `POST /roles` 接口创建一个新角色。
- **查询角色**：使用 `GET /roles` 接口查询已有角色。

### 策略

策略定义了角色可以执行的具体操作。通过创建和管理策略，可以实现精细的权限控制。

- **创建策略**：使用 `POST /policies` 接口创建一个新策略。
- **查询策略**：使用 `GET /policies` 接口查询已有策略。

### 示例

以下是一个创建角色和策略的示例：

```python
import requests

# 创建角色
role_url = "https://api.asktable.com/v1/roles"
role_headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}
role_data = {
    "name": "data_viewer",
    "description": "Can view data"
}
role_response = requests.post(role_url, headers=role_headers, json=role_data)
role_id = role_response.json()["id"]

# 创建策略
policy_url = "https://api.asktable.com/v1/policies"
policy_headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}
policy_data = {
    "name": "view_policy",
    "description": "Allows viewing data",
    "effect": "allow",
    "actions": ["read"],
    "resources": ["data-sources/*"],
    "role_id": role_id
}
policy_response = requests.post(policy_url, headers=policy_headers, json=policy_data)
print(policy_response.json())
```

## 错误处理

在身份验证和授权过程中，可能会遇到以下错误：

- **401 Unauthorized**：表示请求未通过身份验证。请检查您的 API Token 是否正确。
- **403 Forbidden**：表示请求被拒绝访问资源。请检查您的角色和策略配置。

## 下一步

现在，您已经了解了如何进行身份验证和授权。接下来，请继续阅读 [常见请求与响应](./common-requests-and-responses.md) 文档，了解更多详细信息。
