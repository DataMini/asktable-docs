# Python SDK 安装指南

## 介绍

AskTable 的 Python SDK 允许您通过简单的 Python 代码与 AskTable 的 API 进行交互。通过使用 Python SDK，您可以轻松地查询数据源、管理角色和策略、以及执行其他管理任务。

## 安装

### 环境要求

- Python 版本：3.9 或更高
- 依赖库：`requests`

### 安装步骤

1. 确保您已安装 `pip`（Python 的包管理工具）。如果未安装，请参考[官方文档](https://pip.pypa.io/en/stable/installation/)进行安装。

2. 使用以下命令安装 AskTable 的 Python SDK：

    ```bash
    pip install asktable
    ```

3. 验证安装是否成功：

    ```bash
    python -c "import asktable; print(asktable.AskTable.version)"
    ```

    如果正确安装，将会输出 SDK 的版本号。
