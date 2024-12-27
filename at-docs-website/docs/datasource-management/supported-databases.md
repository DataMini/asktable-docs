# 支持的数据库类型

AskTable 支持多种类型的数据库和数据源，方便您灵活地集成不同的数据源进行查询和分析。以下是目前支持的数据源类型：

## 支持的数据源类型

<div className="img-center xlarge">
  <img src="/img/asktable/at_datasource_supported_1.png" alt="Logo" />
</div>

| 数据源类型 | 支持版本 | 说明 |
|------------|----------|------|
| MySQL | 8.0 及以上 | 流行的开源数据库 |
| PostgreSQL | 15 及以上 | 流行的开源数据库 |
| TiDB | 8.1.0 及以上 | 分布式关系型数据库 |
| OceanBase | 4.2 及以上 | 分布式关系型数据库（MySQL 兼容） |
| ClickHouse | 22.12 及以上 | 分布式列式数据库 |
| StarRocks | 3.x | 分布式分析型数据库 |
| Hive | 3.x | 分布式分析型数据库 |
| Excel 文件 | .xlsx/.xls | - |
| CSV 文件 | .csv | 支持常见分割符包括逗号、制表符等 |




如果您的数据库不在上述列表中，请通过 [联系我们](https://datamini.feishu.cn/share/base/form/shrcnN0w5jjFDQ40GSuE8XHVRMf) 告知我们，我们将尽快添加支持。

## 数据源的基本要求

- 对于数据库：需要提供数据库的连接信息，包括主机地址、端口号、数据库名称、用户名和密码。
- 对于文件：需要上传文件，并保证文件格式正确。

## 后续步骤

了解如何创建和管理这些数据，请参阅以下文档：

- [创建数据](./create-datasource.md)
- [管理数据](./manage-datasources.md)
