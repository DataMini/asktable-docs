# Creating Data

Creating data in AskTable is the first step in performing data queries and analysis. This document will guide you on how to create and configure data in AskTable.

## Steps

### 1. Open the Data Management Page

After logging into AskTable, click on the "Data" option in the left-hand menu to access the data management page.

### 2. Add New Data

Click the "Add Data" button at the top right of the page to start configuring new data.

### 3. Select Data Type

In the pop-up dialog, choose the type of data you want to add, including MySQL, PostgreSQL, TiDB, OceanBase, Excel files, and CSV files.

### 4. Configure Data Connection Information

Based on the selected data type, fill in the corresponding connection information:
- **Database Type**: Enter the host address, port number, database name, username, and password for the database. For PostgreSQL, the database name is required.
- **File Type**: Upload an Excel or CSV file.

### 5. Save Data

After successfully testing the connection, click the "Save" button to complete the creation of the data. Once created, AskTable will automatically retrieve metadata about the data, making it easier for subsequent data queries and analysis.

## Next Steps

To learn more about managing and using this data, refer to the following documentation:

- [Managing Data Sources](./manage-datasources.md)