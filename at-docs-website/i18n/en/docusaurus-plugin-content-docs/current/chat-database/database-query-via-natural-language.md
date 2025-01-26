# Architecture Overview: Single-Turn Question and Answering

## Overview
AskTable is an intelligent conversational robot capable of handling complex data queries and providing personalized responses. This document provides a detailed description of the complete process that AskTable follows when processing a user's single conversation, including the functions and interaction methods of each module.

## Architecture Overview
The following is a technical architecture diagram for AskTable's single-turn conversation:

<div className="img-center xlarge">
  <img src="/img/asktable/at_database_query_via_natural_language.png" alt="at_database_query_via_natural_language" />
</div>

AskTable combines traditional databases with modern AI large language models (LLMs) to achieve intelligent, precise, and personalized data retrieval and analysis.

The entire system can be divided into three core modules: Meta Brain, Meta Retrieval, and Data Retrieval.

1. **AskTable Meta Brain: Constructing Metadata Graph**

   Meta Brain is the core module of AskTable, serving as the knowledge base for the entire data system. Meta Brain stores all metadata and necessary keyword data from the database, including database names, table names, field names, and their annotations. It is fully automated by AI to build a comprehensive metadata graph of the database. This enables AskTable to understand the data structures in different database systems (such as MySQL, Oracle, TiDB, etc.) and generate corresponding SQL query statements efficiently and accurately when needed.

   Meta Brain also serves as the storage and computation center for various related/similarity search methods such as embeddings. All queries are searched and computed here to find the data tables, fields, and data values that best match the user's query intent. The combination of vector search and graph database technology allows Meta Brain to quickly locate target data in large-scale datasets, improving query efficiency.
   
2. **AskTable Meta Retrieval: Entity Recognition and Metadata Retrieval**
   
   When a user initiates a query, the system first enters the Meta Retrieval module. Here, the question undergoes natural language processing to extract key entities or relationships, such as place names, users, etc. This step uses entity recognition technology to enable the system to identify and understand the core content of the user's query.

   Next, the system calls the embedding model to convert the extracted entities into vector representations. These vector representations are queried in Meta Brain to find the most relevant database fields and tables. Semantic vector retrieval allows the system to efficiently match in complex data structures, ensuring the accuracy of the query and recognizing colloquial expressions.

   Additionally, the system uses built-in search algorithms optimized for Meta Data and Short Value structures to match real entity names from Meta Brain, thereby avoiding missing values during SQL generation.

   Furthermore, Meta Retrieval is responsible for managing query permissions. Based on the user's role and permissions, the system filters out data that does not meet the access requirements. This process is achieved through permission filtering techniques using embedding models.

3. **AskTable Data Retrieval: Intelligent Learning and Dynamic Error Correction**
   
   The Data Retrieval module is responsible for executing the generated SQL queries and retrieving data. Unlike traditional database queries, AskTable incorporates intelligent learning and error correction mechanisms during this process. When the query results do not match expectations, the system utilizes AI models to dynamically adjust or rewrite the SQL statements to optimize the query results. This dynamic error correction mechanism significantly improves response accuracy in complex query scenarios. Additionally, AskTable continuously optimizes SQL generation across different database dialects and table structures by analyzing Good/Bad Cases and leveraging reinforcement learning and training based on user feedback, further enhancing query accuracy.

   Before performing data queries, the system also conducts further permission verification. Each row of data is filtered again according to permission rules before being returned to the user, ensuring compliance and security of the data. Through this rigorous multi-layer filtering, AskTable not only ensures data security but also greatly reduces data redundancy.

## Technical Complexity and Advantages
AskTable's technical architecture demonstrates the possibility of deep integration between modern database management and AI technologies. By employing vector search, RAG, Agent, dynamic permission management, and dynamic SQL rewriting, the system achieves intelligence and flexibility that traditional applications find hard to match.

### Efficient Metadata Management
Metadata management in Meta Brain allows the system to easily adapt to various different database structures, intelligently matching relevant data based on user intent during queries.

### Intelligent Query Optimization
Through the embedded representations and dynamic learning of LLMs, the system can intelligently optimize and locate user queries, providing accurate and relevant query results.

### Complex Permission Control
By combining multiple layers of permission filtering and embedding models, the system ensures data security and compliance in large-scale data access scenarios.

This architecture enables AskTable to demonstrate high efficiency and accuracy when handling complex queries and providing personalized responses.

For more questions, please visit our website at [AskTable](https://asktable.com) to contact us for detailed information.