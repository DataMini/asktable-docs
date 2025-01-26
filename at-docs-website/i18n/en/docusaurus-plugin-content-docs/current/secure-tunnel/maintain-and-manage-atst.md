# Maintenance and Management of ATST

To ensure the stable operation of AskTable Secure Tunnel (ATST), regular maintenance and management are necessary. Below are some best practices for maintaining and managing ATST.

## Check Container Status

Regularly check the running status of the ATST container to ensure it is functioning properly. Use the following command to view the container status:

```docker ps```

## Update ATST Image

To get the latest features and fixes, it is recommended to regularly update the ATST image. Use the following command to pull the latest image:

### For Domestic Users

```docker pull registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel```

### For Overseas Users

```docker pull datamini/asktable-secure-tunnel```

## Update ATST Container

To apply the latest version of the image, first stop and remove the old container, then start a new one:

### Stop and Remove Old Container

```docker stop <container_id>```

```docker rm <container_id>```

### Start New Container

```docker run -d -P \
  -e API_KEY=your_asktable_api_key \
  -e ATST_ID=your_atst_id \
  registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel
```

## Monitor Logs

Monitor the logs of the ATST container to promptly detect and resolve issues. Use the following command to view the container logs:

```docker logs <container_id>```

## Manage Secure Tunnels

In the AskTable management console, regularly check and manage the status of secure tunnels. Delete unused secure tunnels to ensure system tidiness and security.

### Delete Secure Tunnel

If a secure tunnel is no longer in use, you can delete it from the management console:

1. Log in to the AskTable management console.
2. Navigate to the "Secure Tunnels" page.
3. Select the secure tunnel to be deleted and click the "Delete" button.

## Security Checks

Regularly check the security configuration of ATST to ensure data transmission security. Update passwords and tokens to avoid security vulnerabilities.

## Replace ATST Server

When you need to replace the server where ATST is located, follow these steps:

### Step 1: Stop ATST Container on Old Server

Use the following commands to stop and remove the ATST container on the old server:

```docker stop <container_id>```

```docker rm <container_id>```

### Step 2: Pull ATST Image on New Server

On the new server, use the following command to pull the ATST image:

#### For Domestic Users

```docker pull registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel```

#### For Overseas Users

```docker pull datamini/asktable-secure-tunnel```

### Step 3: Configure ATST on New Server

On the new server, start the ATST container with the same configuration as the old server:

```docker run -d -P \
  -e API_KEY=your_asktable_api_key \
  -e ATST_ID=your_atst_id \
  registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel
```

### Step 4: Test Connection

In the AskTable management console, test the data source connection to ensure that the new ATST container is working properly.

By following these steps, you can smoothly migrate ATST from one server to another, ensuring the continuity and security of data access.

## Open Source Project

We have made ATST open-source. The project address is: [AskTable Secure Tunnel](https://github.com/DataMini/asktable-secure-tunnel). Users can view and modify the source code to meet their own needs.

Through the above maintenance and management measures, you can ensure the stable operation and secure data transmission of ATST.