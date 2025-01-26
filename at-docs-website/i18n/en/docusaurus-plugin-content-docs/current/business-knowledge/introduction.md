# 什么是业务知识

AskTable AI 的挑战，相比生成准确的查询指令（SQL），更重要的是如何真正理解用户的意图。

在企业内部，为了提高效率，常常会形成许多约定俗成的简称和规则。这些信息在内部交流中无需多言，大家自然心知肚明。但对于一个外来的 AI 来说，这些“大家都知道”的信息却是陌生的。

要让 AI 真正“懂你”，就需要对它进行训练，让它也能学会并掌握这些“大家都知道”的信息。我们将这类信息归纳为“业务知识”，它是企业文化与经验的沉淀，是帮助 AI 提升理解力的关键所在。

在 AskTable ，您可以通过以下四种方式来添加您企业的业务知识：

1. 术语库
2. 训练师
3. 专属偏好
4. 元数据

<div className="img-center xlarge">
  <img src="/img/asktable/business_knowledge_1.png" alt="业务知识" />
</div>

## 一、术语库
术语库帮助 AskTable AI 理解企业内部特有的术语。例如，当“铁盒子”在企业中代表“发动机”时，可以将这一约定添加到术语库中，确保 AI 在处理相关查询时能准确理解。 

当 AskTable 接收到包含这些术语的查询请求时，会参考术语库中的定义，将术语转换为标准业务语言后进行分析，让查询结果更加贴合用户需求。

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_2.png" alt="术语库" />
</div>

## 二、训练师

AskTable AI 的能力会随着用户反馈不断优化。通过点赞或提供训练数据，您可以帮助 AI 更快地学习如何更好地生成答案。训练数据包括用户提出的问题及其对应的正确 SQL 查询。 

借助这些数据，AI 可以迅速掌握企业的具体需求，持续提高回答的精准度和实用性。

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_training_data.png" alt="训练数据集" />
</div>


<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_training_data_2.png" alt="训练数据集" />
</div>

## 三、专属偏好

专属偏好让 AskTable AI 更懂用户的提问意图。比如，当数据库中包含多年的数据，您可以预设偏好，仅让 AI 查询最近一年的数据，从而避免不必要的筛选。

通过设置专属偏好，您可以进一步细化 AI 的查询范围，让其更准确地匹配用户需求，为您节省时间并提高工作效率。

<div className="img-center medium">
  <img src="/img/asktable/business_knowledge_preference.png" alt="专属偏好" />
</div>


## 四、元数据

元数据是对数据的“数据”描述，提供了数据的背景信息，如结构、格式和含义。这些信息让 AI 能够更准确地解读和处理数据，从而提升查询的精准度和效率。

AskTable 会自动从数据库中提取元数据，包括数据库、表、字段的信息，以及字段备注。即使没有备注，系统也会自动生成相关信息。所有元数据将汇总并存储在 AskTable 的 Meta Brain 中，为后续查询和分析提供支持。

元数据在数据查询中的作用体现在多个方面，比如：

**示例 1：枚举值**

例如，一个字段记录性别，其中 sex=1 表示男性，sex=2 表示女性。当用户查询“性别为男”的数据时，AI 会基于元数据自动生成查询条件 sex=1，无需用户明确说明。

**示例 2：特定格式**

例如，一个字段记录基金的星级评价，使用从 ★ 到 ★★★★★ 的格式。如果用户查询“四星以上的基金有多少”，元数据会帮助 AI 理解星级格式，自动生成正确的查询条件：

- 错误：`select count(*) from fund where star >= 4;`
- 正确：`select count(*) from fund where star in ('★★★★','★★★★★')`

通过元数据的加持，AskTable 能更深入地理解数据的实际含义，为您生成更精准的查询结果，助力高效决策。

<div className="img-center large">
  <img src="/img/asktable/business_knowledge_meta_1.png" alt="元数据" />
</div>


