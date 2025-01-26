# Supported Data Types

AskTable supports multiple types of databases and files, making it convenient for you to flexibly integrate different data for queries and analysis. Below is a list of the currently supported types:

## Supported Database or File Types

<div className="img-center xlarge">
  <img src="/img/asktable/at_datasource_supported_1.png" alt="Logo" />
</div>

| Type           | Supported Versions | Description                          |
|----------------|--------------------|--------------------------------------|
| MySQL          | 5.7/8.0            | Popular open-source database         |
| PostgreSQL     | 14/15/16           | Popular open-source database         |
| PolarDB MySQL  | 5.7/8.0            | Alibaba Cloud - Cloud-native Database (MySQL-compatible) |
| PolarDB PostgreSQL | 14/15/16 | Alibaba Cloud - Cloud-native Database (PostgreSQL-compatible) |
| Oracle         | 18c                | Mainstream commercial relational database |
| OceanBase      | 4.2 and above      | Distributed relational database (MySQL-compatible) |
| TiDB           | 8.1.0 and above    | Distributed relational database      |
| ClickHouse     | 22.12 and above    | Distributed columnar database        |
| StarRocks      | 3.x                | Distributed analytical database      |
| Hive           | 3.x                | Distributed analytical database      |
| Excel Files    | .xlsx/.xls         | -                                    |
| CSV Files      | .csv               | Supports common delimiters including comma, tab, etc |

If your database is not on the above list, please inform us via [Contact Us](https://datamini.feishu.cn/share/base/form/shrcnN0w5jjFDQ40GSuE8XHVRMf). We will add support as soon as possible.

## Basic Requirements for Data Sources

- For Databases: You need to provide connection information for the database, including host address, port number, database name, username, and password.
- For Files: You need to upload the file and ensure that the file format is correct.

## Next Steps

To learn how to create and manage these data sources, refer to the following documentation:

- [Create Data](./create-datasource.md)
- [Manage Data](./manage-datasources.md)