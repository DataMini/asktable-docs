# Text Response

In AskTable, query results can be returned in text form and support the use of Markdown formatting for better organization and presentation of the text content.

## Example

The following is an example of returning a text response:

```json
{
  "status": "OK",
  "elapsed_time": 7,
  "text": "The latest employee to join is **Chen Min**, with employee ID `5`, and contact number `13800000001`.",
  "files": null,
  "charts": null,
  "query_insights": []
}
```

In this example, the returned text uses Markdown formatting to bold the name and enclose the employee ID and contact number in backticks.

## Supported Markdown Syntax

The following is the Markdown syntax supported by AskTable:

- **Headings**: Use `#` to indicate headings, e.g., `# Level 1 Heading`.
- **Bold**: Enclose bold text with `**`, e.g., `**bold**`.
- **Italic**: Enclose italic text with `*`, e.g., `*italic*`.
- **Code**: Enclose code snippets with backticks `` ` `` , e.g., ```code```.
- **Links**: Represent links using `[link text](link address)`, e.g., `[AskTable](https://www.asktable.com)`.
- **Lists**: Use `-` for unordered lists and numbers followed by periods for ordered lists, e.g.,
  - Unordered list item
  1. Ordered list item

By using these Markdown syntaxes, the returned text content can be clearer and more aesthetically pleasing.