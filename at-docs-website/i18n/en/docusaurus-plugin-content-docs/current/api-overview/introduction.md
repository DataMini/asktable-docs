# API Overview

AskTable offers powerful API interfaces for developers to integrate and use data query and AI conversation functionalities. With these APIs, you can easily achieve seamless integration with AskTable and build intelligent data analysis and processing applications.

## Main Features

All functionalities of AskTable can be utilized via the API interfaces.

## Basic API Information

- **Base API URL**: [`https://api.asktable.com`](https://api.asktable.com)
- **API Version**: v1
- **Request Format**: All requests use the `JSON` format
- **Response Format**: All responses are in `JSON` format

## Getting Started

### 1. Obtain API-Key

To use the AskTable API, you first need to create an account and obtain an API-Key. Please refer to the [Creating an Account and Obtaining an API-Key](../quick-start/create-account-and-get-api-token.md) guide for the detailed steps.

### 2. Configure Request Headers

In each request, you need to include the following information in the request headers:

- `Authorization`: `Bearer <Your API-Key>`
- `Content-Type`: application/json

### 3. Send a Request

Using your programming language and HTTP client, you can send requests and handle responses. Below is an example using Python:

```python
import requests

url = "https://api.asktable.com/v1/data-sources"
headers = {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
}
response = requests.get(url, headers=headers)
print(response.json())
```

## Next Steps

After understanding the API overview, you can continue reading the following documents to learn more about authentication and authorization, common requests and responses, etc.:

- [Authentication and Authorization](./authentication-and-authorization.md)
- [Common Requests and Responses](./common-requests-and-responses.md)