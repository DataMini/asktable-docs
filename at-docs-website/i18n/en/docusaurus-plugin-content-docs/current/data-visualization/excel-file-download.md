# Excel File Download

In AskTable, the query results can be exported as an Excel file, making it convenient for users to perform further data processing and analysis.

## Exporting an Excel File

Using the returned `file_url`, users can download the Excel file containing the query results.

## Example

The following is an example response that returns a link to download the Excel file:

```json
{
  "status": "OK",
  "elapsed_time": 7,
  "text": "Query results have been exported as an Excel file.",
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

## Validity of the Download Link

Please note that download links usually have a time limit. Files not downloaded within the specified time may expire and require re-generating the export request.

By exporting the Excel file, users can conveniently obtain the query results and perform further analysis and processing locally.