# Excel 文件下载

在 AskTable 中，查询结果可以导出为 Excel 文件，方便用户进行进一步的数据处理和分析。

## 导出 Excel 文件

使用返回的 `file_url`，用户可以下载包含查询结果的 Excel 文件。

## 示例

以下是一个返回包含 Excel 文件下载链接的示例响应：

```json
{
  "status": "OK",
  "elapsed_time": 7,
  "text": "查询结果已导出为 Excel 文件。",
  "files": [
    {
      "file_type": "excel",
      "file_url": "https://example.com/download/excel-file.xlsx"
    }
  ],
  "charts": null,
  "query_insights": []
}
```

## 下载链接的有效性

请注意，下载链接通常有时间限制。在指定时间内未下载的文件可能会失效，需要重新生成导出请求。

通过导出 Excel 文件，用户可以方便地获取查询结果，并在本地进行进一步的分析和处理。
