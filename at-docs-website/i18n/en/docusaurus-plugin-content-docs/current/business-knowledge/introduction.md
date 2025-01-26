# What is Business Knowledge

The challenge for AskTable AI, compared to generating accurate query instructions (SQL), is more about truly understanding the user's intent.

Within an enterprise, to improve efficiency, many informal abbreviations and rules often form. These pieces of information do not need to be explicitly stated in internal communication as everyone naturally understands them. However, for an external AI, these "commonly known" pieces of information can be unfamiliar.

To make the AI truly "understand you," it needs to be trained so that it can also learn and master these "commonly known" pieces of information. We categorize this type of information as "business knowledge." It is the沉淀 of corporate culture and experience, and is crucial for enhancing the AI's comprehension.

In AskTable, you can add your company's business knowledge through the following four methods:

1. Terminology Library
2. Trainer
3. Exclusive Preferences
4. Metadata

<div className="img-center xlarge">
  <img src="/img/asktable/business_knowledge_1.png" alt="Business Knowledge" />
</div>

## I. Terminology Library
The terminology library helps AskTable AI understand unique terms within the enterprise. For example, if "iron box" represents "engine" within the company, this convention can be added to the terminology library to ensure the AI accurately understands it when processing related queries.

When AskTable receives queries containing these terms, it will refer to the definitions in the terminology library, converting the terms into standard business language before analysis, making the query results more aligned with user needs.

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_2.png" alt="Terminology Library" />
</div>

## II. Trainer

The capabilities of AskTable AI continuously improve based on user feedback. By liking or providing training data, you can help the AI learn how to generate better answers faster. Training data includes user questions and their corresponding correct SQL queries.

With this data, the AI can quickly grasp specific company requirements, continually improving the accuracy and practicality of its responses.

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_training_data.png" alt="Training Data Set" />
</div>

<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_training_data_2.png" alt="Training Data Set" />
</div>

## III. Exclusive Preferences

Exclusive preferences allow AskTable AI to better understand the user's query intent. For example, if the database contains years of data, you can set a preference to have the AI only query the most recent year's data, thus avoiding unnecessary filtering.

By setting exclusive preferences, you can further refine the AI's query scope, making it more accurately match user needs, saving time and improving work efficiency.

<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_preference.png" alt="Exclusive Preferences" />
</div>

## IV. Metadata

Metadata is a description of "data" that provides background information such as structure, format, and meaning. This information allows the AI to interpret and process data more accurately, thereby enhancing the precision and efficiency of queries.

AskTable automatically extracts metadata from the database, including information about databases, tables, fields, and field notes. Even without notes, the system generates relevant information. All metadata is consolidated and stored in AskTable's Meta Brain, supporting subsequent queries and analyses.

The role of metadata in data queries is evident in several aspects, such as:

**Example 1: Enumerated Values**

For instance, a field records gender, where sex=1 indicates male and sex=2 indicates female. When a user queries for "male gender" data, the AI generates the query condition sex=1 based on metadata, without the need for explicit user instruction.

**Example 2: Specific Formats**

For example, a field records a fund's star rating using a format from ★ to ★★★★★. If a user queries "how many funds have four stars or above," metadata helps the AI understand the star rating format, generating the correct query condition:

- Incorrect: `select count(*) from fund where star >= 4;`
- Correct: `select count(*) from fund where star in ('★★★★', '★★★★★')`

With the support of metadata, AskTable can more deeply understand the actual meaning of the data, generating more precise query results, and assisting in efficient decision-making.

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_meta_1.png" alt="Metadata" />
</div>