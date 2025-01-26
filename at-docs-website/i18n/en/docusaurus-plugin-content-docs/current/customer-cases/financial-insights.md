# FinTech & AskTable

Release Date: December 2024

## Client Background

A leading domestic financial technology company, whose flagship products feature unique functions such as financial report analysis, individual stock diagnosis, and multi-dimensional strategy analysis. As user demand for real-time data queries increases, the company aims to introduce an AI dialogue function to enable users to access complex financial data more efficiently through natural language.

## Client Value

In the financial report Q&A scenario, the system needs to query within a database of tens of tables and over 3,000 indicators.

### 1. Efficiency Improvement
Traditional query methods require users to be proficient in SQL or manually filter fields. AskTable generates data query commands through natural language, allowing users to ask questions directly like they would in a conversation. For example:
- "What was Kweichow Moutai's profit over the last 10 years?"
  
<div class="img-center large">
  <img src="/img/asktable/use_case_financial_1.png" alt="financial_1" />
</div>

- "What were ICBC's net profits over the past three years, and what was the year-over-year growth?"
<div class="img-center large">
  <img src="/img/asktable/use_case_financial_3.png" alt="financial_3" />
</div>

AskTable automatically parses user questions, quickly locates the data, generates precise answers, and presents them in intuitive formats such as tables and charts, significantly improving query efficiency.

### 2. Lowering Technical Barriers
Users do not need to know SQL or understand data table structures; they only need to provide business questions, and AskTable will return accurate results. This allows the financial company to serve a broader range of business users, including investment consultants and analysts without technical backgrounds.

<div class="img-center large">
  <img src="/img/asktable/use_case_financial_2.png" alt="financial_2" />
</div>

### 3. Business Intelligence
AskTable’s automatic reinforcement learning capabilities support the financial company’s business rules (preference settings), such as:
- Default selection of "**consolidated end-of-period**" financial reports.
- Prioritizing the latest financial reports.
- Smartly identifying investor focus points, prioritizing the display of **net income attributable to shareholders of the parent company** when querying "net profit."
- Providing **currency units** and **report periods** in responses to ensure complete and clear information.
- ……

These customized features help clients accurately obtain the required business information, further enhancing user experience and intelligence.

## Usage Cost

### 1. Quick Onboarding, No Data Preparation Required
When initially using AskTable, the financial company can directly use the SaaS online test, without needing to prepare datasets or adjust models. Simply configuring the database address is enough to start asking questions and quickly validate the product's effectiveness.

### 2. Low Human Resource Investment
AskTable’s natural language parsing functionality eliminates the need for complex configuration work, eliminating the need for a data science team.
- SaaS Model: Only the database address needs to be configured to start using it.
- Private Deployment: The single-machine version supports local deployment within one hour, achieving fully offline efficient operation to meet data security requirements.

<div class="img-center large">
  <img src="/img/asktable/use_case_financial_4.png" alt="financial_4" />
</div>

### 3. Extremely Low Learning Curve
Users do not need to learn additional skills. AskTable’s intuitive Q&A interface and data download features allow analysts to get started quickly, saving time on technical training.

## Product Highlights

### 1. Precise Natural Language Parsing
AskTable uses enhanced learning to quickly lock onto core data from thousands of indicators and provide highly relevant answers based on business preferences.
- Based on code and SQL generation AI, it ensures query accuracy at the fundamental level.
- Flexibly handles complex questions (such as year-over-year, quarter-over-quarter, rankings, etc.).

### 2. Zero Threshold Reinforcement Learning
No pre-trained dataset is needed. Through gradual learning of user questions and data preferences, AskTable’s responses become increasingly accurate, providing continuous optimization of intelligent services for the financial company.

### 3. Private Deployment Capability
In the financial industry, data security is critical. AskTable can adapt to native databases (such as Dameng), data warehouses, and native large models (such as Tongyi Qwen). This helps the financial company achieve fully offline operation in a closed environment, enhancing user trust while significantly improving data security.

## Conclusion

Through AskTable, the financial company can rapidly transition from traditional data queries to intelligent Q&A, significantly enhancing user experience. AskTable’s low usage threshold and high accuracy are key reasons for the company’s choice.