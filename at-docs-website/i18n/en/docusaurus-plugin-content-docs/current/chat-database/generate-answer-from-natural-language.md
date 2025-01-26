# API: Natural Language Query Count

## Overview

AskTable provides an API endpoint for generating SQL from natural language queries and directly returning the query results. Through this API, developers can leverage AskTable's natural language processing capabilities to quickly retrieve information from databases. This is particularly useful for scenarios where simplifying the query process and improving development efficiency are required.

Applicable Scenarios:
1. Developers want users to be able to directly obtain data through natural language queries without having to handle the generation and execution of SQL statements themselves.
2. Developers do not want to use AskTable’s UI interface and prefer to implement their own UI to directly display query results.
3. Developers wish to offer flexible query methods suitable for various user scenarios.

## API Endpoint
**POST** `/single-turn/q2a`

## Request Payload
The request payload must include the following fields:

```json
{
  "datasource_id": "string",
  "role_id": "string",
  "role_variables": {},
  "question": "string",
  "max_rows": 0
}
```

### Field Descriptions
- `datasource_id` (required): Data source ID, specifying the data source to be queried.
- `role_id` (optional): User role ID, used for permission control.
- `role_variables` (optional): Role-related variables, typically used to refine permission control.
- `question` (required): The user's natural language query.
- `max_rows` (optional): Limits the maximum number of rows returned; setting it to 0 returns all results.

## Example Request
Below is an example request to generate an SQL query and retrieve the query results:

### Request Example Code (Python)
```python
import requests

url = "https://api.asktable.com/v1/single-turn/q2a"
headers = {
    "Authorization": "Bearer API_KEY_or_TEMP_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "datasource_id": "example_datasource_id",
    "role_id": 1,
    "role_variables": {"user_id": 123},
    "question": "How many countries are there?",
    "max_rows": 10
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

## Response
A successful response will return the query results, including the generated SQL, execution time, and query results. A typical response example is as follows:

```json
{
    "status": "OK",
    "elapsed_time": 6,
    "text": "There are 206 countries.",
    "files": null,
    "charts": null,
    "query_insights": [
        {
            "datasource_id": "ds_32r3zkHMPKn21O6SMPlF0u",
            "question": "How many countries are there?",
            "step": "generate",
            "insight": [
                {
                    "name": "get_cache",
                    "duration": 0.3,
                    "detail": {
                        "cached_query": {
                            "prepared_statement": "SELECT COUNT(*) FROM olympics2024.athletes",
                            "params": {}
                        },
                        "cache_id": "74550b5a-0538-516a-804d-7d8615bd358f"
                    }
                },
                {
                    "name": "rewrite_cache",
                    "duration": 1.8,
                    "detail": {
                        "rewritten_query": {
                            "prepared_statement": "SELECT COUNT(DISTINCT country) FROM olympics2024.athletes",
                            "params": {}
                        }
                    }
                }
            ]
        },
        {
            "datasource_id": "ds_32r3zkHMPKn21O6SMPlF0u",
            "question": "How many countries are there?",
            "step": "execute",
            "insight": [
                {
                    "name": "exec_query",
                    "duration": 0.1,
                    "detail": {}
                },
                {
                    "name": "save_cache",
                    "duration": 0.1,
                    "detail": {
                        "cache_id": "7a620814-e4fd-5314-b30d-080aaf8f6416"
                    }
                }
            ]
        }
    ],
    "payload": {
        "recognized_addresses": null,
        "error_type": "",
        "error_msg": ""
    }
}
```

### Response Field Descriptions
- `status`: Request status, usually "OK".
- `elapsed_time`: Total query execution time in seconds.
- `text`: Natural language answer based on the query result.
- `files`: Generated files (if any).
- `charts`: Generated charts (if any).
- `query_insights`: Detailed steps and times of query execution, including SQL generation, query execution, and cache handling.
- `payload`: Relevant information from the request, including error type and error message.

## Summary
Using the natural language query count API provided by AskTable, users can easily retrieve the desired information from the database without writing complex SQL queries. This approach not only simplifies the query process but also ensures the accuracy and timeliness of the data, making it suitable for various scenarios requiring quick data retrieval.

For more questions about API usage, please visit the [AskTable documentation](https://api.asktable.com/) for detailed information.