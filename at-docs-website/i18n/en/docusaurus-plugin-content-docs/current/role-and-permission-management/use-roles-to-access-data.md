# Using Roles to Access Data

In AskTable, the combination of roles and policies provides fine-grained access control for users. By specifying roles and role variables when creating a chat, you can ensure that users can only access the data they are permitted to see.

## Using Roles to Query Data

<div className="img-center large">
  <img src="/img/asktable/at_auth_play_role.png" alt="Logo" />
</div>

The following example illustrates how an ordinary user can query their own data through a role.

### Example: Ordinary User Queries Their Own Data

1. **Create Role and Policy**

   Create a policy named `allow_myself`, which allows users to access only their own data.

   The call to the `policies.create` function is as follows:

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

   Create a role called `comm_user` and associate the `allow_myself` policy with this role.

   ```python
   roles.create(
       name='comm_user',
       policy_ids=['allow_myself_policy_id']
   )
   ```
   
2. **Create Chat and Specify Role**

   When creating a chat, specify the `comm_user` role and fill in the `employee_id` variable.
   ```python
   chat = at.chats.create(
       datasource_ids=['your_datasource_id'],
       role_name='comm_user',
       role_variables={'employee_id': 2}  # For instance, Li Na's employee_id is 2
   )
   ```

   Now, users can use the specified role and variables to query data, ensuring they can only access their own data.

3. **Query Data Visible to Themselves**

   In the chat, users can ask questions such as:

   ```python
   question = "Did Li Na take any leave in May 2024?"
   response = chat.ask(question)
   print(response['text'])  # Output: Yes, she took leave.
   ```
   
4. **Query Data Not Visible to Themselves**

   If a user tries to query another user’s data, they will receive an error message indicating access is denied.

   ```python
   question = "Did Zhang San take any leave in May 2024?"
   response = chat.ask(question)
   print(response['text'])  # Output: Sorry, there is no relevant information.
   ```
   
Through this method, you can ensure that users access data strictly according to the assigned roles and policies.