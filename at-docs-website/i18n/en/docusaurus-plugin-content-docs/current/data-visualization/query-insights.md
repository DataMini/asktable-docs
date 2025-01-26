# Output Query Steps

In AskTable, each query records detailed query step information, including the query question, data source, executed SQL statement, query time, and result information. This step information helps users understand the execution process of the query, making it easier to troubleshoot and verify results.

## Example

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
            "question": "How many countries?",
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
            "question": "How many countries?",
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

## Explanation of Query Step Fields

The `query_insights` field contains detailed step information during the query execution process.
Each step includes the following attributes:

1. **datasource_id**: Unique identifier for the data source.

2. **question**: The original question posed by the user.

3. **step**: Name of the current step being executed, such as "rewrite" (rewrite query) or "execute" (execute query).

4. **insight**: An array containing detailed information about the step. Each insight item includes:

   a. **name**: Specific operation name, such as "parse_cache", "rewrite_cache", "exec_query", etc.
   
   b. **duration**: Execution time of the operation in seconds.
   
   c. **detail**: Detailed information about the operation, which may include:
      - **prepared_statement**: Prepared SQL statement to be executed.
      - **params**: Parameters of the SQL statement (if any).
      - **cache_id**: Unique identifier for the cache (if caching is used).
      - **rewritten_query**: Rewritten query (if the query was rewritten).

Through these detailed step information, users can gain a deep understanding of the query execution process, including query rewriting, cache usage, actual execution, and other stages.

## Using Query Steps

With query steps, users can:

- Understand the query execution process and time consumption.
- Verify the correctness of the query results.
- Diagnose query performance issues.

Query step information is an important tool for understanding and optimizing queries, helping users better leverage AskTable for data analysis.