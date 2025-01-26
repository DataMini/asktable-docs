# 使用角色访问数据

在 AskTable 中，角色和策略的结合为用户提供了精细化的访问控制。通过在创建对话（chat）时指定角色（role）和角色变量（role variables），您可以确保用户只能访问被允许的数据。

## 使用角色查询数据

<div className="img-center large">
  <img src="/img/asktable/at_auth_play_role.png" alt="Logo" />
</div>

以下是一个示例，说明普通用户如何通过角色查询属于自己的数据。

### 示例：普通用户查询自己的数据

1. **创建角色和策略**

   创建一个策略 `allow_myself`，仅允许用户访问属于自己的数据。

   `policies.create` 函数的调用如下：

   ```python
   policies.create(
       permission='allow',
       name='allow_myself',
       dataset_config={
           "datasource_ids": 'your_datasource_id',
           "rows_filters": {
               'your_datasource_id': [
                   '*.*.employee_id = {{employee_id}}',
               ]
           }
       }
   )
    ```
   
    创建一个角色 comm_user，并将 allow_myself 策略关联到该角色。

    ```python
    roles.create(
        name='comm_user',
        policy_ids=['allow_myself_policy_id']
    )
    ```
2. **创建对话并指定角色**

    在创建对话时，指定角色 comm_user 并填充 employee_id 变量。
    ```python
    chat = at.chats.create(
        datasource_ids=['your_datasource_id'],
        role_name='comm_user',
        role_variables={'employee_id': 2}  # 例如，李娜的 employee_id 为 2
    )
    ```

    现在，用户可以使用指定的角色和变量进行查询，确保他们只能访问属于自己的数据。

3. **查询对自己可见的数据**

    在对话中，用户可以提出查询请求，例如：

    ```python
    question = "李娜24年五月份是否有请过假"
    response = chat.ask(question)
    print(response['text'])  # 输出：是，请过假。
    ```
   
4. **查询对自己不可见的数据**

    如果用户尝试查询其他用户的数据，将会收到拒绝访问的错误提示。

    ```python
    question = "张三24年五月份是否有请过假"
    response = chat.ask(question)
    print(response['text'])  # 输出：对不起，没有相关信息。
    ```
   
通过这种方式，您可以确保用户在查询数据时，严格按照分配的角色和策略进行访问控制。

