# CLI 安装指南

## 介绍

AskTable 提供了一个命令行工具 (CLI)，使您可以通过命令行与 AskTable API 进行交互。使用 CLI 工具，您可以方便地管理数据源、角色、策略等。

## 安装

安装了 Python SDK 之后，自动安装了 AskTable 的命令行工具 `asktable`。您可以通过以下命令验证是否安装成功：

```bash
asktable -h
```

如果正确安装，将会输出 CLI 的帮助信息。
```
usage: asktable [-h] [-a API_URL] [-k API_KEY_or_SESSION_TOKEN]

Interactive CLI for AskTable client.

options:
  -h, --help            show this help message and exit
  -a API_URL, --api_url API_URL
                        The AskTable API URL
  -k API_KEY, --api_key API_KEY_or_SESSION_TOKEN
                        The key for authentication.

```


## 登录

运行命令 `asktable -k <API_KEY_or_SESSION_TOKEN>`，输入正确的 `API-Key` 后，将会登录到 AskTable 服务。


## 使用

登录成功后，进入一个交互式命令行界面。

```python
➜  $ asktable -k <API_KEY_or_SESSION_TOKEN>

-- AskTable 客户端(0.17.8)初始化...
-- 连接服务器(-a)： https://api.asktable.com
-- 使用Token (-t)： ******
-- 您可以使用 'at' 来访问 AskTable，比如：通过 'at.datasources' 来查询数据源列表
   完整的使用方法，请参考帮助文档：https://docs.asktable.com/

Python 3.11.9 (main, Apr  2 2024, 08:25:04) [Clang 15.0.0 (clang-1500.1.0.2.5)]
Type 'copyright', 'credits' or 'license' for more information
IPython 8.18.1 -- An enhanced Interactive Python. Type '?' for help.

In [1]: at.datasources

```

接下来，您可以通过输入命令来管理数据源、角色、策略等。例如：

#### 基本
- **at.me**: 查看当前用户信息
- **at.version**: 查看当前版本
- **at.get_token**: 获取一个新的 SESSION_TOKEN

#### 数据源命令
- **at.datasources**: 列出所有数据源
- **at.datasources.create**: 创建一个新的数据源
- **ds = at.datasources.get**: 获取一个数据源
- **ds.delete**: 删除一个数据源
- **ds.meta**: 查看数据源的元数据
- **ds.meta.update()**: 更新数据源的元数据

#### 权限相关
- **at.roles**: 列出所有角色
- **at.roles.create**: 创建一个新的角色
- **at.policies**: 列出所有策略
- **at.policies.create**: 创建一个新的策略

#### 对话聊天
- **at.bots**: 列出所有机器人
- **at.bots.create**: 创建一个新的机器人
- **bot = at.bots.get**: 获取一个机器人
- **bot.delete**: 删除一个机器人
- **bot.update**: 更新一个机器人
- **at.chats**: 列出所有对话
- **at.chats.create**: 创建一个新的对话
- **chat = at.chats.get**: 获取一个对话
- **chat.ask**: 向对话提问
- **chat.messages**: 列出对话的消息
- **chat.delete**: 删除一个对话


#### 安全隧道
- **at.securetunnel**: 列出所有安全隧道
- **at.securetunnel.create**: 创建一个新的安全隧道
- **st = at.securetunnel.get**: 获取一个安全隧道
- **st.delete**: 删除一个安全隧道
- **st.links**: 列出安全隧道的链接


#### 速查
- **at.q2a.create**: 进行快速查询
- **at.q2s.create**: 进行快速生成 SQL
- **at.q2a**: 查看速查结果
- **at.q2s**: 查看 SQL 结果


#### 缓存
- **at.delete_cache**: 删除缓存


通过上述命令，您可以使用 AskTable CLI 工具进行数据源、策略、角色和对话的管理。

