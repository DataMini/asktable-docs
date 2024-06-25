# 定义访问策略

访问策略是角色和权限管理的核心，通过定义访问策略，可以控制用户对特定资源的访问权限。在 AskTable 中，您可以根据业务需求灵活定义访问策略。

## 创建访问策略

1. **登录 AskTable 管理控制台**。
2. **导航到“权限管理”页面**。
3. **点击“创建策略”按钮**。

### 访问策略的基本要素

1. **策略名称**：为策略指定一个名称，以便识别和管理。
2. **描述**：为策略提供简要描述，说明其用途和适用范围。
3. **权限规则**：定义具体的权限规则，包括允许或拒绝的操作类型和资源。

### 权限规则示例

以下是通过 API 创建访问策略的示例代码：

#### 允许访问所有数据

```python
policies.create(
    permission='allow',
    name='allow_all',
    dataset_config={
      "datasource_ids": "your_datasource_id",
    }
)
```

#### 拒绝访问 salaries 表

```python
policies.create(
    permission='deny',
    name='deny_salaries',
    dataset_config={
        "datasource_ids": "your_datasource_id",
        "regex_patterns": {
            'tables_regex_pattern': '.salaries.',
        }
    },
)
```

#### 拒绝访问 employees 表的 phone_number 字段

```python
policies.create(
    permission='deny',
    name='deny_phone_number',
    dataset_config={
        "datasource_ids": "your_datasource_id",
        "regex_patterns": {
            "fields_regex_pattern": "phone_number",
            "tables_regex_pattern": ".employees.",
        }
    }
)
```

#### 允许用户访问自己的数据

```python
policies.create(
    permission='allow',
    name='allow_myself',
    dataset_config={
        "datasource_ids": "your_datasource_id",
        "rows_filters": {
            "your_datasource_id": [
                '..employee_id = {{employee_id}}',
            ]
        }
    }
)
```

### 创建策略的 UI 界面

在创建策略的 UI 界面中，您需要提供以下信息：

1. **名称**：策略的名称，例如 `allow_myself`。
2. **允许访问以下数据**：选择数据源。
3. **选择库表**：
    - 用于匹配数据库名的正则表达式：为空则匹配全部。
    - 用于匹配表名的正则表达式：为空则匹配全部。
    - 用于匹配字段名的正则表达式：为空则匹配全部。
4. **行过滤器**：定义行过滤条件，例如 `public.*.id = {{user_id}}`。



## 分配策略给角色

1. **创建策略后**，您需要将策略分配给相应的角色。
2. **导航到“角色管理”页面**。
3. **选择一个角色**，并编辑其权限配置。
4. **将策略分配给角色**，以控制该角色对特定资源的访问权限。

通过定义和分配访问策略，您可以确保不同角色的用户在系统中具有适当的权限，从而保护敏感数据并提高系统的安全性和合规性。
