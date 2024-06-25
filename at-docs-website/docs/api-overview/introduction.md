# API 概述

AskTable 提供了强大的 API 接口，方便开发者集成和使用数据查询、AI 对话等功能。通过这些 API，您可以轻松实现与 AskTable 的无缝对接，构建智能化的数据分析和处理应用。

## 主要功能

AskTable 的 API 接口主要包括以下几个方面：

- **数据源管理**：添加、删除、更新和查询数据源信息。
- **AI 对话**：创建和管理对话，与 AI 进行交互，获取智能化的数据分析结果。
- **权限管理**：定义和管理角色与策略，控制数据访问权限。
- **安全隧道**：创建和管理安全隧道，实现与内网数据库的安全通信。

## API 基本信息

- **API 基础 URL**：`https://api.asktable.com`
- **API 版本**：v1
- **请求格式**：所有请求均采用 JSON 格式
- **响应格式**：所有响应均为 JSON 格式

## 快速开始

### 1. 获取 API Token

要使用 AskTable API，您首先需要创建一个账户并获取 API Token。具体步骤请参考 [创建账户并获取 API Token](../quick-start/create-account-and-get-api-token.md)。

### 2. 配置请求头

在每次请求中，您需要在请求头中包含以下信息：

- `Authorization`: `Bearer <您的 API Token>`
- `Content-Type`: application/json

### 3. 发送请求

使用您的编程语言和 HTTP 客户端，您可以发送请求并处理响应。以下是一个使用 Python 的示例：

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

## 下一步

了解了 API 概述后，您可以继续阅读以下文档，详细了解如何进行身份验证与授权、常见请求与响应等：

- [身份验证与授权](./authentication-and-authorization.md)
- [常见请求与响应](./common-requests-and-responses.md)
