### Case Study Two: Excel/CSV Q&A Assistant

### Background

In daily use of Excel/CSV for data queries, it is necessary to memorize various complex functions (such as VLOOKUP, HLOOKUP, INDEX+MATCH, etc.). We can create an agent where users only need to upload Excel/CSV tables and converse with the agent to easily query the required data.

### Development Steps
1. Create the Agent
2. Add plugins to your agent's skills
3. Set variables
4. Start Q&A

#### 1. Create the Agent

#### 2. Add plugins to your agent's skills

- In the agent's plugin addition, search for: Excel query, and add the add_Excel_or_CSV and question_to_answer plugins.
  
---
 
<div className="img-center full-width">
  <img src="/img/asktable/coze_add_plugin_2.png" alt="Add Plugin" />
</div>

#### 3. Set Variables
- Variable name: datasource_id
- Default value: No need to fill in
- Description: The ID value returned after uploading Excel via add_data
---
<div className="img-center full-width">
  <img src="/img/asktable/coze_set_variable_2.png" alt="Set Variable" />
</div>

#### 4. Upload and Q&A

<div className="img-center medium">
  <img src="/img/asktable/coze_bot_result_2.png" alt="Q&A Result" />
</div>

Here is a [Excel/CSV Q&A Assistant Agent](https://www.coze.cn/s/iDJR6joR/) that we have already created for your reference.