# Single-Node Deployment

🚀 The single-node version of AskTable is now available for free download, installation, and use.

💪 This guide will help you quickly deploy AskTable in your local environment and use it with your own internal data.

> By continuing to download, install, and use AskTable, you acknowledge that you have read and agree to the [Software Download, Installation, and Usage Agreement](../appendix/software-end-user-license-agreement.md).

## **Prerequisites**

### **Hardware**

Minimum requirements: 2-core CPU, 4GB RAM, 10GB hard drive space. Supports both x86 and ARM architectures.

### **Operating System**

1. **Linux System**
   You need to install the following software:
   1. **Docker**: [Docker Installation Documentation](https://docs.docker.com/engine/install/).
   2. **Docker Compose**: Used to package and deploy AskTable along with the MySQL database. [Docker Compose Installation Documentation](https://docs.docker.com/compose/install/).

2. **macOS System**
   You need to install the following software:
   1. **Docker Desktop**: An application on macOS desktop computers that includes Docker and Docker Compose. [Installation Documentation](https://docs.docker.com/desktop/setup/install/mac-install/).

## **Quick Deployment**

Save the following content as a `docker-compose.yml` file:

   ```yaml
   services:
     asktable:
       # AskTable
       image: registry.cn-shanghai.aliyuncs.com/datamini/asktable-all-in-one:latest  # For users in mainland China
       # image: datamini/asktable-all-in-one:latest   # For other regions
       container_name: asktable
       depends_on:
         - asktable_mysql
       ports:
         - 8000:80
       environment:
         BASE_URL: http://127.0.0.1:8000          # Container's external address (i.e., the address from which it can be accessed externally, such as via a browser)
         MYSQL_HOST: asktable_mysql               # MySQL database address
         MYSQL_USER: asktable                     # MySQL database username
         MYSQL_PASSWORD: asktable                 # MySQL database password
         MYSQL_DB: asktable                       # MySQL database name
         LLM_API_KEY: your_api_key_here      # AI model token; apply for one after logging into AskTable at https://cloud.asktable.com.
       volumes:
         - ./asktable_data:/asktable
     
     asktable_mysql:
       image: cr2.fit2cloud.com/library/mysql:8.0
       container_name: asktable_mysql
       ports:
         - "3306:3306"
       environment:
         TZ: Asia/Shanghai
         MYSQL_ROOT_PASSWORD: asktable
         MYSQL_DATABASE: asktable
         MYSQL_USER: asktable
         MYSQL_PASSWORD: asktable
       volumes:
         - ./mysql_data:/var/lib/mysql
   ```

   > The above configuration will deploy both AskTable and the MySQL database simultaneously. Alternatively, you can deploy only AskTable and use an existing MySQL database service.

Among the configurations listed above, you should modify the following according to your actual situation:

- `BASE_URL`: Container's external address (i.e., the address from which it can be accessed externally, such as via a browser)
- `LLM_API_KEY`: AI model token; apply for one after logging into AskTable at https://cloud.asktable.com.

<div className="img-center medium">
  <img src="/img/asktable/deploy_all_in_one_1.png" alt="intro" />
</div>

## **Running AskTable**

After configuring, you can start AskTable using Docker Compose:

1. **Build and Start Containers**

In the directory where the `docker-compose.yml` file is located, run the following command:

```bash
docker compose up -d
# or docker-compose up -d
```

This command starts the AskTable application and MySQL database containers in the background.

2. **Access AskTable**

Now, AskTable is running. You can access it in your browser at:

```
http://127.0.0.1:8000
```

Here, you can log in using the default administrator account (username: `admin@asktable.com`, password: `admin`) and begin exploring the application.

## **Exploring AskTable**

Once logged in, you can start using AskTable for various tasks, such as:

- Data Management: Create, manage, and query data sources.
- Interacting with AskTable AI: Use language models to query and analyze your data.
- Customizing Business Knowledge: Configure term libraries, training datasets, and default preferences as needed to fit your business scenarios.

## **Advanced Configuration (Optional)**
1. **Setting Admin Account**:
   If you want to set an admin account, you can configure the following parameters:

   ```yaml
   AUTH_EMAIL_INIT_ADMIN_EMAIL: admin@asktable.com
   AUTH_EMAIL_INIT_ADMIN_PASSWORD: admin
   ```

2. **Qdrant Vector Database**:
   If you want to use an independent vector database, you can configure it as follows:

   ```yaml
   QDRANT_ADDRESS: http://your-qdrant-host:6333
   QDRANT_API_KEY: your-api-key-here
   ```

3. **Redis Database**:
   If caching is needed, you can configure Redis:

   ```yaml
   REDIS_HOST: your-redis-host
   REDIS_PORT: 6379
   REDIS_PASSWORD: your-redis-password
   ```

4. **Using Local LLM Model**:
   If you want to use a local model, assuming you have already deployed the model inference service, you can configure the following parameters:
   :::warning Warning
   Using models not provided by AskTable may not guarantee effectiveness. It is recommended to apply for one at [https://cloud.asktable.com](https://cloud.asktable.com).
   :::
   ```yaml
   LLM_BASE_URL: http://10.10.0.3:11434/v1  # Address of the local LLM service
   LLM_API_KEY: your_api_key_here  # API Key for the local LLM service (if no key authentication is required, this parameter does not need to be configured)
   AT_FORCE_LLM_MODEL: Qwen2.5-72B-Instruct-128K  # Name of the forced model to be used
   ```

## **Updating Version**

To update to the latest version, execute the following commands in the directory where the `docker-compose.yml` file is located:

```bash
docker compose pull
docker compose down
docker compose up -d
```

## **Notes**

This deployment mode is suitable for quickly experiencing AskTable, but it is not recommended for production environments, as performance, accuracy, and stability cannot be guaranteed. If higher requirements are needed, please contact us.

Thank you for using AskTable. Good luck! 🚀