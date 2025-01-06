# 单机版部署


🚀 AskTable 单机版现已支持免费下载、安装和使用。

💪 这篇指南将帮助您在本地环境快速部署 AskTable，并结合自己的内部数据来使用～ 

>继续下载、安装和使用 AskTable 即表示您已阅读并同意 [《软件下载安装及使用协议》](../appendix/software-end-user-license-agreement.md)。

## **前提条件**

### **硬件**

最低配置要求：2核CPU、4G内存、10G硬盘。支持 x86 和 ARM 两种架构。


### **操作系统**

1. **Linux 系统**
需要安装以下软件：
   1. **Docker**：[Docker 安装文档](https://docs.docker.com/engine/install/)。
   2. **Docker Compose**：用来打包部署 AskTable 和 MySQL 数据库。[Docker Compose 安装文档](https://docs.docker.com/compose/install/)。

1. **macOS 系统**
需要安装以下软件：
   1. **Docker Desktop**：是 macOS 桌面电脑上的应用程序，包含 Docker 和 Docker Compose。[安装文档](https://docs.docker.com/desktop/setup/install/mac-install/)。

## **快速部署**

将以下内容保存为 `docker-compose.yml` 文件：

   ```yaml
   services:
     asktable:
       # AskTable
       image: registry.cn-shanghai.aliyuncs.com/datamini/asktable-all-in-one:latest  # 中国大陆地区
       # image: datamini/asktable-all-in-one:latest   # 其他地区
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
         LLM_API_KEY: your_api_key_here      #LLM API KEY，用于访问大模型。
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


在运行 AskTable 之前，您需要了解一些配置项，以下是 `docker-compose.yml` 中主要配置项的说明：


1. **BASE_URL**：指定 AskTable 服务对外暴露的地址（即从外部比如浏览器访问的地址）。

2. **MySQL 配置**：
   - **MYSQL_HOST**：指定 MySQL 数据库的地址。
   - **MySQL_PORT**：指定 MySQL 数据库的端口，默认 3306。
   - **MYSQL_USER**：设置 MySQL 用户名。
   - **MYSQL_PASSWORD**：设置 MySQL 用户的密码。
   - **MYSQL_DB**：指定 MySQL 数据库名称。
  
   > 通过 `Docker-compose` 拉起的 MySQL 会自动初始化用户和数据库，如果使用已有的 MySQL，请自行创建数据库，并设置好用户名和密码。

3. **LLM API 配置**：
   
   推荐在 [AskTable 官网](https://cloud.asktable.com) 登录后，右上角点击【免费下载 AskTable】申请。

   - **LLM_BASE_URL**: LLM API 地址。比如：`https://api.openai.com/v1` 若使用 AskTable 提供的 AI 模型服务，则不用配置。
   - **LLM_API_KEY**： LLM API 密钥。


## **运行 AskTable**

配置完成后，就可以通过 Docker Compose 来启动 AskTable 了：

1. **构建并启动容器**

在 `docker-compose.yml` 文件所在目录下，运行以下命令：

```bash
docker compose up -d
# 或者 docker-compose up -d
```

这条命令会在后台启动 AskTable 应用和 MySQL 数据库容器。

2. **访问 AskTable**

现在，AskTable 已经启动，您可以在浏览器中访问：

```
http://127.0.0.1:8000
```

在这里，您可以使用默认管理员（账号为 `admin@asktable.com`，密码为 `admin`）登录，并开始探索应用。


## **探索 AskTable**

登录后，您可以开始使用 AskTable 进行各种任务，例如：

- 数据管理：创建、管理和查询数据源。
- 与 AskTable AI 互动：利用语言模型对您的数据进行查询和分析。
- 自定义业务知识：根据需要配置术语库、训练数据集和默认偏好，以适应您的业务场景。


## **高级配置（可选）**
1. **设置管理员账号**：
   如果您希望设置管理员账号，您可以配置以下参数：

   ```yaml
   AUTH_EMAIL_INIT_ADMIN_EMAIL: admin@asktable.com
   AUTH_EMAIL_INIT_ADMIN_PASSWORD: admin
   ```

2. **Qdrant 向量数据库**：
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
3. **使用 OpenAI API**：
   如果需要使用 OpenAI，您可以配置以下参数：

   ```yaml
   LLM_BASE_URL: https://api.openai.com/v1
   LLM_API_KEY: your_openai_api_key_here
   LLM_HTTP_PROXY: http://127.0.0.1:7890  # 如果需要使用代理，则配置代理地址
   ```

4. **使用其他 LLM 模型**：
   AskTable 提供的 LLM 服务，会使用 GPT、Qwen等模型，如果您想在本地使用其他模型，则可以配置以下参数：

   ```yaml
   LLM_BASE_URL: https://api.siliconflow.cn/v1  # 您自己的 LLM 服务地址（这里是硅流科技的 API 地址）
   LLM_API_KEY: your_dashscope_api_key_here  # 您自己的 LLM 服务 API 密钥
   AT_FORCE_LLM_MODEL: Qwen2.5-72B-Instruct-128K  # 强制使用的模型名字
   ```
   注意：请使用 LLM 供应商支持的模型名称。


5. **关闭诊断日志**：
   AskTable 会收集诊断日志，用于定位问题和改进产品。AskTable 不会收集您的敏感信息，并承诺不会用于任何商业用途。
   如果您希望关闭诊断日志，您可以配置以下参数：
   ```yaml
   AT_TRACE_ENABLE: false
   ```


## **注意事项**

该部署模式适用于快速体验 AskTable，但不适用于生产环境，性能和稳定性无法保证。若有更高需求，请与我们联系。




再次感谢您的使用，祝您好运！🚀
