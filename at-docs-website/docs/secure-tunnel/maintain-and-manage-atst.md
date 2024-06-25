# 维护和管理 ATST

为了确保 AskTable 安全隧道（ATST）的稳定运行，需要定期进行维护和管理。以下是一些维护和管理 ATST 的最佳实践。

## 检查容器状态

定期检查 ATST 容器的运行状态，确保其正常运行。使用以下命令查看容器状态：

```docker ps```

## 更新 ATST 镜像

为了获取最新的功能和修复，建议定期更新 ATST 镜像。使用以下命令拉取最新镜像：

### 国内用户

```docker pull registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel```

### 海外用户

```docker pull datamini/asktable-secure-tunnel```

## 更新 ATST 容器

为了应用最新版本的镜像，需要先停止并移除旧容器，然后启动一个新容器：

### 停止并移除旧容器

```docker stop <container_id>```

```docker rm <container_id>```

### 启动新容器

```docker run -d -P \
  -e ASKTABLE_TOKEN=your_asktable_token \
  -e SECURETUNNEL_ID=your_securetunnel_id \
  registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel
```

## 监控日志

监控 ATST 容器的日志，以便及时发现和解决问题。使用以下命令查看容器日志：

```docker logs <container_id>```

## 管理安全隧道

在 AskTable 管理控制台，定期检查和管理安全隧道的状态。删除不再使用的安全隧道，确保系统的整洁和安全。

### 删除安全隧道

如果某个安全隧道不再使用，可以在管理控制台删除：

1. 登录 AskTable 管理控制台。
2. 导航到“安全隧道”页面。
3. 选择需要删除的安全隧道，点击“删除”按钮。

## 安全性检查

定期检查 ATST 的安全配置，确保传输的数据安全。更新密码和令牌，避免安全漏洞。

## 更换 ATST 服务器

当您需要更换 ATST 所在的服务器时，可以按照以下步骤进行操作：

### 步骤 1：停止旧服务器上的 ATST 容器

使用以下命令停止并移除旧服务器上的 ATST 容器：

```docker stop <container_id>```

```docker rm <container_id>```

### 步骤 2：在新服务器上拉取 ATST 镜像

在新服务器上，使用以下命令拉取 ATST 镜像：

#### 国内用户

```docker pull registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel```

#### 海外用户

```docker pull datamini/asktable-secure-tunnel```

### 步骤 3：配置新服务器上的 ATST

在新服务器上，使用与旧服务器相同的配置启动 ATST 容器：

```docker run -d -P \
  -e ASKTABLE_TOKEN=your_asktable_token \
  -e SECURETUNNEL_ID=your_securetunnel_id \
  registry.cn-shanghai.aliyuncs.com/datamini/asktable-secure-tunnel
```

### 步骤 4：测试连接

在 AskTable 管理控制台中，测试数据源连接，确保新的 ATST 容器能够正常工作。

通过以上步骤，您可以顺利地将 ATST 从一台服务器迁移到另一台服务器，确保数据访问的持续性和安全性。

## 开源项目

我们已经将 ATST 开源，项目地址为：[AskTable Secure Tunnel](https://github.com/DataMini/asktable-secure-tunnel)。用户可以查看和修改源代码，以满足自己的需求。


通过以上维护和管理措施，您可以确保 ATST 的稳定运行和数据传输的安全。
