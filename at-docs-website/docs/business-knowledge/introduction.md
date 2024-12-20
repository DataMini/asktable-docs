# 什么是业务知识


AskTable 的业务知识库是用来帮助 AskTable AI 更好地理解企业或组织的业务，从而提高回答的准确性。

您可以有以下四种方式来丰富业务知识：

1. 术语库
2. 训练师
3. 专属偏好
4. 元数据

<div className="img-center xlarge">
  <img src="/img/asktable/business_knowledge_1.png" alt="业务知识" />
</div>



## 一、术语库
术语库用于帮助 AskTable AI 更好地理解企业或组织的内部术语。例如，“铁盒子”代表“发动机”，可以添加到术语库中，以便 AI 更准确地理解这些术语的含义。

当 AskTable 接收到包含业务术语的查询请求时，会根据术语库中的定义，将术语转换为相应的业务含义，然后进行数据分析。

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_2.png" alt="术语库" />
</div>


## 二、训练师

AskTable AI 能通过用户的点赞反馈，不断优化答案生成过程，提升回答质量。您也可以直接添加训练数据，帮助 AskTable AI 更快地学习。训练数据由用户问题和正确的 SQL 组成。

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_training_data.png" alt="训练数据集" />
</div>



<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_training_data_2.png" alt="训练数据集" />
</div>

## 三、专属偏好

专属偏好是用来帮助 AskTable AI 更好地理解用户提问的意图，从而提升回答质量。比如，数据库中有历年的数据，用户可能需要查询最近一年的数据，可以在这里告诉 AI 只查询最近一年的数据。

<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_preference.png" alt="专属偏好" />
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


