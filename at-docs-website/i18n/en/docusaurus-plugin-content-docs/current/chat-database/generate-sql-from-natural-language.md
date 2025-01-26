# API: Natural Language to SQL Generation

## Overview

AskTable provides an API interface for generating SQL queries. Through this API, developers can utilize AskTable’s natural language processing capabilities to automatically generate SQL queries, catering to various specific scenarios.

### Suitable Scenarios
1. Developers do not want to implement different Q&A logic for different user needs but prefer to provide a unified query service through a single page.
2. Developers do not want to use AskTable's UI interface and wish to create their own UI.
3. Developers want to access the database directly rather than through AskTable.

## API Endpoint
**POST** `/single-turn/q2s`

## Request Payload
The request payload must include the following fields:

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

### Field Descriptions
- `datasource_ids` (required): An array containing data source IDs, specifying the data sources to be queried.
- `role_id` (optional): The ID of the user role for permission control.
- `role_name` (optional): The name of the user role for permission control.
- `role_variables` (optional): Variables related to the role, typically used for refined permission control.
- `question` (required): The user's natural language query question.

## Example Request
Below is an example request to generate an SQL query:

### Example Request Code (Python)
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
    "question": "Retrieve all products sold more than 1000 units in 2021"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

## Response
A successful response will return the generated SQL query as follows:
```json
{
    "question": "Retrieve all products sold more than 1000 units in 2021",
    "prepared_statement": "SELECT name, sales FROM products WHERE year=2021 AND sales>1000",
    "parameters": {},
    "header": {
        "name": "Name",
        "sales": "Sales"
    }
}
```

### Response Field Descriptions
- `question`: The natural language query question input by the user.
- `prepared_statement`: The generated SQL query string.
- `parameters`: Parameters used in the SQL query.
- `header`: Description information of the query result, such as explanations of the fields.
- For more fields, refer to the [API Documentation](https://api.asktable.com/)

## Summary
Through the SQL generation API provided by AskTable, users can conveniently submit query requests using natural language and receive the corresponding SQL query string. This approach simplifies the query process while ensuring data security and privacy, preventing data from leaving the company network.

For further inquiries about the SQL generation process, please visit [AskTable Natural Language Database Query](database-query-via-natural-language.md) for detailed information.