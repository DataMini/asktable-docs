# Authentication and Authorization

Authentication and authorization are required when using the AskTable API to ensure that only authorized users and applications can access and manipulate data. This article will guide you through the process of authentication and authorization.

## Authentication

Authentication is the process of verifying that a request comes from a legitimate user. When using the AskTable API, you need to provide an API-Key or a Temp-Token for authentication.

An API-Key is a secret key issued to applications to access the AskTable API. A Temp-Token is a temporary authentication token used to access the API for a certain period.

This document will provide detailed information on the use cases, acquisition methods, scenarios, and how to use API-Keys and Temp-Tokens for authentication and authorization.

### API-Key

AskTable offers two different types of API-Keys for various access needs and permission control.

| API-Key Type   | Purpose                | Acquisition Method                                    | API List Available        | Validity Period |
|---------------|------------------------|------------------------------------------------------|--------------------------|-----------------|
| `admin`       | Used to manage all resources within a project, with the highest permissions. | Created through [AskTable SaaS](https://cloud.asktable.com) | All APIs         | Long-term       |
| `asker`       | Used for querying public data, suitable for public access scenarios.         | Created through [AskTable SaaS](https://cloud.asktable.com) | See below        | Long-term       |

The list of APIs available for the `asker` API-Key:

| API Path                                                | Method | Description                          |
|--------------------------------------------------------|--------|--------------------------------------|
| `/auth/me`                                              | GET    | Retrieve information of the current authenticated user |
| `/auth/tokens`                                          | POST   | Create new authentication tokens    |
| `/datasource`                                           | POST   | Create a data source                 |
| `/datasource/upload_file`                               | POST   | Upload a file                        |
| `/single-turn/q2a`                                      | POST   | Initiate a query request             |
| `/single-turn/q2s`                                      | POST   | Initiate a request to generate SQL  |
| `/bots/<bot_id>`                                        | GET    | Retrieve information of a specified bot |
| `/chats`                                                | POST   | Create a new chat session            |
| `/chats/<chat_id>`                                      | GET    | Retrieve a specified chat session   |
| `/chats/<chat_id>/messages`                             | GET    | Retrieve a list of messages for a specified chat |
| `/chats/<chat_id>/messages/<message_id>`                | GET    | Query a specific message            |
| `/chats/<chat_id>`                                      | DELETE | Delete a specific chat (including messages) |

### Temp-Token

A Temp-Token is a temporary authentication token used for API access for a certain period. The Temp-Token is generated from an API-Key.

The API for generating a Temp-Token is as follows:

```http
POST /auth/tokens
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
    "name": "Zhang San"
  },
  "token_ttl": 900
}
```

## Configuring Request Headers

In each request, you need to include the following information in the request headers:

- `Authorization`: `Bearer <Your API-Key or Temp-Token>`
- `Content-Type`: `application/json`

Here is an example using Python:

```python
import requests

url = "https://api.asktable.com/v1/auth/me"
headers = {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
}
response = requests.get(url, headers=headers)
print(response.json())
```

## Error Handling

During the authentication and authorization process, you may encounter the following errors:

- **401 Unauthorized**: Indicates that the request has not been authenticated. Please check if your API-Key is correct.
- **403 Forbidden**: Indicates that the request has been denied access to the resource. Please check your role and policy configuration.

## Next Steps

You now understand how to perform authentication and authorization. Proceed to read the [Common Requests and Responses](./common-requests-and-responses.md) document for more detailed information.