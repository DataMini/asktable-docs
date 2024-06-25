# 创建和管理角色

角色是权限管理的关键部分，通过为不同的用户分配不同的角色，可以控制用户对系统中资源的访问权限。在 AskTable 中，您可以灵活创建和管理角色，以满足各种业务需求。

## 创建角色

1. **登录 AskTable 管理控制台**。
2. **导航到“角色管理”页面**。
3. **点击“创建角色”按钮**。

### 角色的基本要素

1. **角色名称**：为角色指定一个名称，以便识别和管理。
2. **描述**：为角色提供简要描述，说明其用途和适用范围。
3. **分配策略**：将一个或多个访问策略分配给角色，以定义角色的权限。

### 创建角色的 API 示例

以下是通过 API 创建角色的示例代码：

#### 创建管理员角色，允许访问所有数据
```python
role_admin = asktable.roles.create(
    name='role_admin',
    policy_ids=[policy_oa_allow_all.id],
)
```

#### 创建经理角色，不允许访问薪水表和手机号字段
```python
role_manager = asktable.roles.create(
    name='role_manager',
    policy_ids=[
        policy_oa_allow_all.id,
        policy_oa_deny_salaries.id,
        policy_oa_deny_phone_num.id,
    ]
)
```


#### 创建普通用户角色，只能访问自己的数据，且不能访问薪水表和手机号字段

```python
role_comm = asktable.roles.create(
    name='role_comm',
    policy_ids=[
        policy_oa_allow_myself.id,
        policy_oa_deny_salaries.id,
        policy_oa_deny_phone_num.id,
    ]
)


```

## 管理角色

1. **编辑角色**：
    - 在“角色管理”页面，选择一个角色并点击“编辑”按钮。
    - 修改角色的名称、描述或分配的策略。
    - 点击“保存”按钮，保存更改。

2. **删除角色**：
    - 在“角色管理”页面，选择一个角色并点击“删除”按钮。
    - 确认删除操作。

3. **查看角色详情**：
    - 在“角色管理”页面，选择一个角色并点击“详情”按钮。
    - 查看角色的名称、描述和分配的策略。

通过创建和管理角色，您可以灵活控制系统中不同用户的访问权限，从而确保数据的安全性和合规性。
