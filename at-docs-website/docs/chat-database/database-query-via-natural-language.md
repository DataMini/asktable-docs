# 自然语言查询数据库

## 概述
AskTable 是一款智能化的对话机器人，能够处理复杂的数据查询并提供个性化回答。本文档详细介绍了 AskTable 在处理用户单次对话时的完整流程，包括各个模块的功能和交互方式。

## 流程概览
以下是 AskTable 单次对话流程的概览图：


<div className="img-center xlarge">
  <img src="/img/asktable/at_database_query_via_natural_language.png" alt="at_database_query_via_natural_language" />
</div>


该流程涉及多个模块，包括用户问题输入、预处理、查询缓存、数据库查询、权限控制、SQL 生成和回答生成等。

## 详细流程

### 1. 用户输入
用户通过前端界面输入的问题会被传送到后端进行处理。

### 2. 查询缓存
系统首先检查输入的问题是否存在于缓存中。如果问题存在于缓存中，则直接从缓存中读取之前生成的 SQL，进入数据检索模块。如果问题不在缓存中，进入预处理步骤。

### 3. 预处理
系统对用户输入的问题进行预处理，提取关键字（如地名等），并使用 Embedding 模型（如 Qwen/GPT 等）生成 Query Embeddings。这些 embeddings 用于后续的数据库查询和匹配。

### 4. AskTable Meta Brain（构建元数据大脑）
AskTable Meta Brain 是核心的数据处理模块，负责 embeddings 的存储、查询和管理。它包含一个 Vector/Graph/SQL/Search 数据库，用于存储和管理这些 embeddings 以及相关的权限和元数据信息。其具体功能包括：
- **数据库类型支持**：支持 MySQL、Oracle、TiDB、OceanBase、PostgreSQL 和 ClickHouse 等。
- **库、表、字段名称和备注**：使用 Embedding 模型生成 embeddings，用于后续的查询。
- **Embedding 模型**：处理预处理后的问题，并生成 embeddings。

### 5. 实体检索和权限过滤
- **AskTable Meta Retrieval**：根据 embeddings 查询数据库，进行权限过滤。
- **Meta Brain**：根据权限和用户问题，改写后的实体名称，返回相关的库、表、字段名称。

### 6. SQL 生成
在权限过滤后，系统生成行过滤后的 SQL 查询。例如，添加权限过滤条件如 `and book.user_id=123 and user.status=1`。生成的 SQL 查询将被发送到数据库，获取查询结果。

### 7. 大语言模型处理
- **查询结果处理**：查询结果被传送给大语言模型（如 Qwen/GPT 等）进行处理。
- **生成回答**：大语言模型根据查询结果生成最终的回答。

### 8. 回答输出
最终的回答将通过前端界面返回给用户，完成单次对话流程。

## 关键模块说明
- **Query Cache**：缓存历史查询结果，提高查询效率，减少 LLM 调用，提高性能，降低成本。
- **Embedding 模型**：使用先进的自然语言处理模型生成 embeddings，提升查询和匹配精度。
- **权限控制**：严格控制数据访问权限，确保数据安全。
- **Meta Brain**：核心数据处理模块，负责 embeddings 的存储、查询和管理。

## 总结
AskTable 通过结合先进的自然语言处理技术、严格的权限控制机制和高效的缓存机制，为用户提供快速、准确、安全的查询和回答服务。通过本文档，您可以初步了解 AskTable 的工作原理和具体实现方式，帮助您更好地集成和使用 AskTable。

如有更多疑问，请访问官网 [AskTable 网站](https://asktable.com) 联系我们获取详细信息。
