# Registering a Data Source Using ATST

After installing and configuring ATST, the next step is to register a data source through ATST. The following steps will guide you on how to register a data source.

## Step 1: Access the AskTable Management Console

Log in to the AskTable management console and navigate to the "Data Sources" page.

## Step 2: Create a Data Source

Click the "Add Data Source" button, fill in the data source information, including database type, connection address, username, and password.

## Step 3: Select the Secure Tunnel

On the data source configuration page, choose to use a secure tunnel for the connection. Select the previously configured secure tunnel ID.

## Step 4: Test the Connection

After filling out the data source information, click the "Test Connection" button to ensure that AskTable can successfully connect to the database via the secure tunnel.

### Example Configuration

Here is an example configuration for a MySQL data source:

- **Database Type**: MySQL
- **Connection Address**: localhost:3306
- **Username**: root
- **Password**: password
- **Secure Tunnel ID**: your_securetunnel_id

## Step 5: Save the Data Source

Once the connection test is successful, click the "Save" button to complete the registration of the data source.

With these steps, you have successfully registered a data source using ATST. Now, you can securely access and query the data in your internal network database using AskTable.