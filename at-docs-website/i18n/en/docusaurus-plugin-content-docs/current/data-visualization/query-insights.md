# 输出查询步骤

在 AskTable 中，每次查询都会记录详细的查询步骤信息，包括查询的问题、数据源、执行的 SQL 语句、查询时间和结果信息。这些步骤信息有助于用户了解查询的执行过程，便于排查和确认结果。

## 示例

```json
{
    "status": "OK",
    "elapsed_time": 6,
    "text": "共有206个国家。",
    "files": null,
    "charts": null,
    "query_insights": [
        {
            "datasource_id": "ds_32r3zkHMPKn21O6SMPlF0u",
            "question": "有多少国家？",
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
            "question": "有多少国家？",
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


## 查询步骤字段解释

其中，query_insights 即查询步骤字段。
query_insights 字段包含了查询执行过程中的详细步骤信息。每个步骤都包含以下属性：

1. **datasource_id**：数据源的唯一标识符。

2. **question**：用户提出的原始问题。

3. **step**：当前执行的步骤名称，如 "rewrite"（重写查询）或 "execute"（执行查询）。

4. **insight**：一个数组，包含了该步骤的详细信息。每个 insight 项目包括：

   a. **name**：具体操作的名称，如 "parse_cache"、"rewrite_cache"、"exec_query" 等。
   
   b. **duration**：该操作的执行时间（以秒为单位）。
   
   c. **detail**：操作的详细信息，可能包含以下内容：
      - **prepared_statement**：准备执行的 SQL 语句。
      - **params**：SQL 语句的参数（如果有）。
      - **cache_id**：缓存的唯一标识符（如果使用了缓存）。
      - **rewritten_query**：重写后的查询（如果进行了查询重写）。

通过这些详细的步骤信息，用户可以深入了解查询的执行过程，包括查询重写、缓存使用、实际执行等各个阶段的情况。


## 使用查询步骤

通过查询步骤，用户可以：

- 了解查询的执行过程和时间消耗。
- 验证查询结果的正确性。
- 诊断查询性能问题。

查询步骤信息是理解和优化查询的重要工具，帮助用户更好地利用 AskTable 进行数据分析。
