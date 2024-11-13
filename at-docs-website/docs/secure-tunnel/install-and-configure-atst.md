# 安装和配置 ATST

在使用 AskTable 安全隧道（ATST）之前，需要进行安装和配置。以下步骤将指导您如何安装和配置 ATST。

## 步骤 1：获取 ATST

ATST 是一个 Docker 镜像，您可以从 Docker Hub 或者阿里云镜像仓库获取。

### 国内用户

使用以下命令从阿里云镜像仓库拉取 ATST 镜像：

```docker pull registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel```

### 海外用户

使用以下命令从 Docker Hub 拉取 ATST 镜像：

```docker pull datamini/asktable-secure-tunnel```

## 步骤 2：配置 ATST

在启动 ATST 容器之前，需要配置一些环境变量：

- `API_KEY`：您的 AskTable API 密钥。
- `ATST_ID`：安全隧道 ID，可以在 AskTable 管理控制台创建。

### 配置示例

以下是一个示例配置：

```docker
docker run -d -P \
  -e API_KEY=your_asktable_api_key \
  -e ATST_ID=your_atst_id \
  registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel
```

## 步骤 3：启动 ATST

使用上面的配置命令启动 ATST 容器。启动后，ATST 会自动建立一个加密的隧道，允许 AskTable 访问内网数据库。

```
➜  $ docker run -d -P -e API_KEY=asktable_api_key -e ATST_ID=atst_1e9PisC2 registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel
Unable to find image 'registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel:latest' locally
latest: Pulling from datamini/asktable-secure-tunnel
91e301773f03: Already exists 
15856ca26414: Already exists 
30ed4c127913: Already exists 
feb30c5ba2d1: Already exists 
228270bb5dc5: Already exists 
1270f6c33d66: Already exists 
01f4847499fb: Already exists 
b493cb19e676: Already exists 
de4db47de1c7: Pull complete 
06329ecaa692: Pull complete 
8335aa3dfbc7: Pull complete 
5a8ea1ca4e0c: Pull complete 
f343dd1eff78: Pull complete 
a9c07ae60c47: Pull complete 
bb662d942789: Pull complete 
Digest: sha256:d7b1a7003b9114e8c5cddb7750a88aeca874fc6d15bb17ede5b58e7624730489
Status: Downloaded newer image for registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel:latest
f2765dcf8eb9ff8deffead0a911d54b6048990bed563574768990033829f2ab0
➜  $ docker ps
CONTAINER ID   IMAGE                                                               COMMAND            CREATED         STATUS         PORTS                     NAMES
f2765dcf8eb9   registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel   "python main.py"   5 seconds ago   Up 4 seconds   0.0.0.0:55000->1260/tcp   inspiring_kapitsa

```


### 检查容器状态

使用以下命令查看容器状态：

```docker ps```

确保 ATST 容器正在运行，并且状态正常。


在启动 ATST 之后，您可以在 AskTable 管理控制台中看到 ATST 的状态。

<div className="img-center medium">
  <img src="/img/asktable/at_atst_card.png" alt="Logo" />
</div>


通过以上步骤，您已经成功安装并配置了 ATST。接下来，您可以注册数据源并通过安全隧道进行访问。
