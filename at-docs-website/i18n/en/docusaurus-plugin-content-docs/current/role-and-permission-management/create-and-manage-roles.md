# Creating and Managing Roles

Roles are a critical component of permission management, allowing you to control user access to resources within the system by assigning different roles to different users. In AskTable, you can flexibly create and manage roles to meet various business needs.

## Creating a Role

1. **Log in to the AskTable Management Console**.
2. **Navigate to the "Role Management" page**.
3. **Click the "Create Role" button**.

### Basic Elements of a Role

1. **Role Name**: Assign a name to the role for identification and management purposes.
2. **Description**: Provide a brief description of the role to explain its purpose and scope.
3. **Assignment Policy**: Assign one or more access policies to the role to define its permissions.

### API Example for Creating a Role

Here is an example code snippet for creating a role via API:

#### Create an Admin Role with Access to All Data
```python
role_admin = asktable.roles.create(
    name='role_admin',
    policy_ids=[policy_oa_allow_all.id],
)
```

#### Create a Manager Role with No Access to Salary Tables and Phone Number Fields
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

#### Create a Regular User Role with Access Only to Their Own Data, and No Access to Salary Tables and Phone Number Fields
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

## Managing Roles

1. **Edit a Role**:
    - On the "Role Management" page, select a role and click the "Edit" button.
    - Modify the role's name, description, or assigned policies.
    - Click the "Save" button to save the changes.

2. **Delete a Role**:
    - On the "Role Management" page, select a role and click the "Delete" button.
    - Confirm the deletion operation.

3. **View Role Details**:
    - On the "Role Management" page, select a role and click the "Details" button.
    - View the role's name, description, and assigned policies.

By creating and managing roles, you can flexibly control access permissions for different users within the system, ensuring data security and compliance.