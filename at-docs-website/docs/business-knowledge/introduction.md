# 什么是业务知识


AskTable 的业务知识库是用来帮助 AskTable AI 更好地理解企业或组织的业务，从而提高回答的准确性。

您可以有四种方式来丰富业务知识。

<div className="img-center xlarge">
  <img src="/img/asktable/business_knowledge_1.png" alt="业务知识" />
</div>


## 一、术语库
术语库用于帮助 AskTable AI 更好地理解企业或组织的内部术语。例如，“铁盒子”代表“发动机”，可以添加到术语库中，以便 AI 更准确地理解这些术语的含义。

当 AskTable 接收到包含业务术语的查询请求时，会根据术语库中的定义，将术语转换为相应的业务含义，然后进行数据分析。

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_glossary.png" alt="术语库" />
</div>


## 二、训练数据集
训练数据集是 AskTable AI 从经验中学习的数据集合，由一对对的问题（Question）和 SQL 查询（Q&S）组成。

在数据查询时，AskTable 会参考这些 Q&S 对来提高查询的准确性。当用户在对话页面对 AI 的回答进行点赞时，AskTable 会将该回答视为准确，并自动采集 Q&S 对，添加到训练数据集中。通过不断积累和学习，系统会变得越来越智能。




## 三、默认偏好

默认偏好是用来帮助 AskTable AI 更好地理解用户提问的意图，从而提升回答质量。比如，数据库中有历年的数据，用户可能需要查询最近一年的数据，可以通过偏好设置来告诉 AI 只查询最近一年的数据。

<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_preference.png" alt="默认偏好" />
</div>



## 四、元数据

元数据是描述数据的“数据”，它帮助我们理解数据的含义、结构和格式。简单来说，元数据提供了数据的背景信息，使 AI 能够更准确地解读和处理数据。

AskTable 会自动从数据库中提取元数据，包括数据库、表和字段的信息。同时，它还会提取字段备注，并在没有备注的情况下自动生成。所有提取的元数据都会被汇总并存储在 AskTable 的 Meta Brain 中，供后续查询和分析使用。

在进行数据查询时，AskTable 会参考元数据来生成精准的查询语句。元数据确保 AI 能够理解字段的实际意义，从而提高查询的准确性和效率。

**示例 1：枚举值**

假设数据库中有一个字段记录性别，sex=1 代表男性，sex=2 代表女性。当用户查询“性别为男”的数据时，AskTable 会基于元数据自动生成查询条件 sex=1。

**示例 2：特定格式**

另一个例子，假设字段“基金在过去5年的星级评价”记录了 ★ 到 ★★★★★（最多 5 颗星）。当用户查询“四星以上的基金有多少”时，AskTable 会通过元数据理解数据的格式，并生成正确的查询条件。

- 错误：`select count(*) from fund where star >= 4;`
- 正确：`select count(*) from fund where star in ('★★★★','★★★★★')`

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_meta_1.png" alt="元数据" />
</div>


