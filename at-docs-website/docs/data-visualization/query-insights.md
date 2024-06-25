# 输出查询步骤

在 AskTable 中，每次查询都会记录详细的查询步骤信息，包括查询的问题、数据源、执行的 SQL 语句、查询时间和结果信息。这些步骤信息有助于用户了解查询的执行过程，便于排查和确认结果。

## 示例

以下是一个返回包含查询步骤的示例响应：

```json
{
  "status": "OK",
  "elapsed_time": 7,
  "text": "最晚入职的员工是陈敏，员工编号为5，联系电话为13800000001。",
  "files": null,
  "charts": null,
  "query_insights": [
    {
      "question": "查询数据库中最晚入职的员工信息。\r\n\r",
      "datasource": "ds_1pv7aHX64ECI",
      "results": [
        {
          "query": "SELECT employee_id, name, phone_number FROM test.employees ORDER BY employee_id DESC LIMIT 1",
          "result_info": {
            "row_count": 1,
            "column_count": 3,
            "columns": ["employee_id", "name", "phone_number"]
          },
          "query_time_ms": 38
        }
      ],
      "query_time": 3
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

- **question**: 用户提出的查询问题。
- **datasource**: 使用的数据源 ID。
- **results**: 查询的详细结果，包括执行的 SQL 语句、结果信息和查询时间。
  - **query**: 执行的 SQL 语句。
  - **result_info**: 结果信息，包括行数、列数和列名。
  - **query_time_ms**: 查询时间，单位为毫秒。
- **query_time**: 总查询时间，单位为秒。

## 使用查询步骤

通过查询步骤，用户可以：

- 了解查询的执行过程和时间消耗。
- 验证查询结果的正确性。
- 诊断查询性能问题。

查询步骤信息是理解和优化查询的重要工具，帮助用户更好地利用 AskTable 进行数据分析。
