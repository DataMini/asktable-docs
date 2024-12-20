# 单机版部署指南

🚀 这篇指南将帮助您在本地环境快速部署 AskTable，并让您可以结合自己的内部数据来使用我们的产品 💪

## **前提条件**

### **硬件**

最低配置要求：4核CPU、16G内存、50G硬盘。支持 x86 和 ARM 两种架构。


### **操作系统**

1. **Linux 系统**
需要安装以下软件：
   1. **Docker**：[Docker 安装文档](https://docs.docker.com/engine/install/)。
   2. **Docker Compose**：用来打包部署 AskTable 和 MySQL 数据库。[Docker Compose 安装文档](https://docs.docker.com/compose/install/)。

1. **macOS 系统**
需要安装以下软件：
   1. **Docker Desktop**：是 macOS 桌面电脑上的应用程序，包含 Docker 和 Docker Compose。[安装文档](https://docs.docker.com/desktop/setup/install/mac-install/)。

## **软件配置**

将以下内容保存为 `docker-compose.yml` 文件：

   ```yaml
   services:
     asktable:
       # AskTable
       image: registry.cn-shanghai.aliyuncs.com/datamini/asktable-all-in-one:latest
       container_name: asktable
       depends_on:
         - asktable_mysql
       ports:
         - 8000:80
       environment:
         BASE_URL: http://127.0.0.1:8000          # 容器对外暴露的地址（即从外部比如浏览器访问的地址）
         MYSQL_HOST: asktable_mysql               # MySQL 数据库地址
         MYSQL_USER: asktable                     # MySQL 数据库用户名
         MYSQL_PASSWORD: asktable                 # MySQL 数据库密码
         MYSQL_DB: asktable                       # MySQL 数据库名称
         LLM_BASE_URL: https://api.openai.com/v1  # OPENAI LLM API 地址
         LLM_API_KEY: your_api_key_here      # OPENAI LLM API 密钥
         AUTH_EMAIL_INIT_ADMIN_EMAIL: admin@asktable.com    # AskTable 初始管理员邮箱
         AUTH_EMAIL_INIT_ADMIN_PASSWORD: admin              # AskTable 初始管理员密码
     
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


在运行 AskTable 之前，您需要了解一些配置项，以下是 `docker-compose.yml` 中主要配置项的说明：


1. **BASE_URL**：指定 AskTable 服务对外暴露的地址（即从外部比如浏览器访问的地址）。

2. **MySQL 配置**：
   - **MYSQL_HOST**：指定 MySQL 数据库的地址。
   - **MySQL_PORT**：指定 MySQL 数据库的端口，默认 3306。
   - **MYSQL_USER**：设置 MySQL 用户名。
   - **MYSQL_PASSWORD**：设置 MySQL 用户的密码。
   - **MYSQL_DB**：指定 MySQL 数据库名称。

3. **管理员账号配置**：
   - **AUTH_EMAIL_INIT_ADMIN_EMAIL**：设置初始管理员的邮箱地址，默认 `admin@asktable.com`。
   - **AUTH_EMAIL_INIT_ADMIN_PASSWORD**：设置初始管理员的密码，默认 `admin`。

4. **LLM API 配置**：
   - **LLM_BASE_URL**：设置大语言模型（LLM）API 地址，默认`https://api.openai.com/v1`。
   - **LLM_API_KEY**：输入 LLM API 密钥。可以通过 AskTable 或其他 API 服务提供。


## **运行 AskTable**

配置完成后，就可以通过 Docker Compose 来启动 AskTable 了：

1. **构建并启动容器**

```bash
docker-compose up -d
```

这条命令会在后台启动 AskTable 应用和 MySQL 数据库容器。

2. **访问 AskTable**

现在，AskTable 已经启动，您可以在浏览器中访问：

```
http://localhost:8000
```

在这里，您可以使用刚才设置的管理员账号（默认管理员账号为 `admin@asktable.com`，密码为 `admin`）登录，并开始探索应用。


## **探索 AskTable**

登录后，您可以开始使用 AskTable 进行各种任务，例如：

- 数据管理：创建、管理和查询数据源。
- 与 AskTable AI 互动：利用语言模型对您的数据进行查询和分析。
- 自定义业务知识：根据需要配置术语库、训练数据集和默认偏好，以适应您的业务场景。


## **高级配置**

1. **Qdrant 向量数据库**：
   如果您希望使用独立的向量数据库，您可以通过以下配置进行设置：

   ```yaml
   QDRANT_ADDRESS: http://your-qdrant-host:6333
   QDRANT_API_KEY: your-api-key-here
   ```

2. **Redis 数据库**：
   如果需要缓存，您可以配置 Redis：

   ```yaml
   REDIS_HOST: your-redis-host
   REDIS_PORT: 6379
   REDIS_PASSWORD: your-redis-password
   ```
3. **LLM（OpenAI） Proxy 代理**：
   如果需要使用 OpenAI，则可能需要 Proxy 代理，您可以配置以下参数：

   ```yaml
   LLM_BASE_URL: https://api.openai.com/v1
   LLM_HTTP_PROXY: http://127.0.0.1:7890
   ```

4. **使用非 GPT 模型**：
   AskTable 默认使用 GTP-4o 模型，如果您没有 GPT 模型，您可以配置以下参数强制使用其他模型：

   ```yaml
   AT_FORCE_LLM_MODEL: Qwen2.5-72B-Instruct-128K
   ```
   注意：请使用 LLM 供应商支持的模型名称。


5. **关闭诊断日志**：
   AskTable 会收集诊断日志，用于定位问题和改进产品。AskTable 不会收集您的敏感信息，并承诺不会用于任何商业用途。
   如果您希望关闭诊断日志，您可以配置以下参数：
   ```yaml
   AT_TRACE_ENABLE: false
   ```


## **停止 AskTable**

如果您想停止正在运行的容器，可以运行以下命令：

```bash
docker-compose down
```

这条命令会停止并删除容器，但数据会保留在本地。

## **注意事项**

- 该一键部署模式适用于快速体验 AskTable，但不适用于生产环境，性能和稳定性无法保证。若有更高需求，请与我们联系。

## **遇到问题？**

我们设计 AskTable 时尽量让它简单易用，但如果您有任何疑问或者遇到问题，欢迎随时联系我们或者查阅我们的 [文档](https://docs.asktable.com/)。我们将尽最大努力帮助您解决问题。

## **总结**

通过这份指南，您应该能够顺利地将 AskTable 部署到您的本地环境中。它非常适合用于个人、团队以及企业数据分析。希望您能在使用 AskTable 的过程中获得丰厚的收获！

再次感谢您的使用，祝您好运！🚀