# AI Search

## Function Overview:

This feature is designed to help the AskTable AI better understand user queries and accurately extract relevant information from the database.

Its core purpose is to generate 'AI Search Indexes' for specific fields in the database, allowing the AskTable AI to more intelligently identify and match user queries, thereby providing more precise answers.

For example, if a user asks, "Where are the service outlets of the Industrial and Commercial Bank of China?" The database has a field that records "bank name", which might store **Industrial and Commercial Bank of China**, but the user's query uses **ICBC**. If this feature is enabled, the AI will be able to understand that **ICBC** refers to **Industrial and Commercial Bank of China**, not just the exact match for **Industrial and Commercial Bank of China**, thus improving the accuracy and flexibility of the search.

## What is AI Search Index?
In the database, data in some fields might have different forms of expression. For instance, "ICBC" and "Industrial and Commercial Bank of China" may look similar but are written differently. To enable the AI to better understand such differences, we create "AI Search Indexes" for specific fields.

The role of indexing: It allows the AskTable AI to use "fuzzy matching" to find the most relevant data, rather than only strict matches. This is like adding an intelligent "understanding" layer to the database.

## How to Use This Feature:
- **Default Settings:** The system automatically enables AI Search Index for some fields by default. These are fields of string type with an average data length of no more than 30 characters. These fields help the AI match user queries more accurately.
- **Manual Configuration:** If you wish to turn on or off fuzziness for other fields, you can do so using the toggle button. Simply click the switch next to the field you want to adjust, and select either enable or disable.

```html
<div className="img-center xlarge">
  <img src="/img/asktable/ai_search_1.png" alt="AI Search Index" />
</div>
```

## Why is There a Toggle Switch?

Enabling too many indexes can impact system performance as each index consumes computational resources. We provide a toggle switch, letting you turn on or off indexing for certain fields based on your needs.
- **Enable AI Search:** The AI can understand and match your queries more intelligently, improving query accuracy.
- **Disable AI Search:** This can improve system performance but may reduce query accuracy.

## How to Determine If Fuzzy Search Needs to Be Activated?

If you want to ensure the AskTable AI can handle queries in various forms and provide more precise answers, you might consider enabling fuzzy search. This is particularly useful when data in a field can be expressed in multiple ways, as it enhances the user experience.

For example, if a field records names of different banks, a user might ask about "ICBC service outlets" or "Industrial and Commercial Bank of China service outlets." If fuzzy search is enabled for this field, AskTable AI can understand both queries and provide accurate answers based on the actual data, without having to configure a large set of synonyms.

## What's the Difference Between AI Search and Terms (Synonyms)?

Both can improve the accuracy of AI queries, but they are used in different scenarios:
- **AI Search (Fuzziness):** AI Search identifies similar queries through fuzzy matching, useful for common abbreviations or synonyms like "ICBC" and "Industrial and Commercial Bank of China." It is recommended to use AI Search for regular, common words, which do not require manual synonym configuration.
- **Adding Terms (Synonyms):** For handling specific, custom terms or jargon (such as proprietary names within an enterprise). For example, setting "iron box" as a synonym for "engine." It is recommended to use the term feature for personalized or organization-specific vocabulary.

## Summary:
- **Default Activation:** Suitable for most scenarios, the system automatically enables fuzziness for certain fields.
- **User Configuration:** You can manually enable or disable fuzzy search for fields, adjusting as needed.
- **Optimizing Performance:** Too many indexes can affect system performance; it is recommended to configure as needed.

By configuring fuzzy search, you can enhance the AI query's flexibility and accuracy, optimizing system performance according to actual requirements.

## User Notices:
- Enabling fuzzy search can increase the computational load on the system, so it is suggested to enable it only when necessary.
- The default-enabled fields have been optimized for most user scenarios.

This feature aims to make your conversational AI more intelligent, allowing it to accurately understand and respond to a variety of user queries.