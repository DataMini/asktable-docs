# 使用 API（SDK）管理 API

## API 说明

**1. 创建 API Endpoint**

在 AskTable API 中，使用 `extapi` 对象来管理 API Endpoint。要创建一个新的 API Endpoint，可以使用以下代码：


```python
from asktable import AskTable
from atserver import config

token = config.at_auth_by_default_token
at = AskTable(token=token, api_url="https://your-api-url")

# 创建新的 API Endpoint
extapi = at.extapis.create(
    name="Test API",
    base_url="https://api.example.com/v1",
    headers={"Authorization": "Bearer testtoken"}
)
print(extapi)
```

**2. 更新 API Endpoint**

您可以更新 API Endpoint 的名称、base_url 和 headers：

```python
# 更新 API Endpoint 的名称
extapi = extapi.update(name="Updated Test API")
print(extapi)

# 更新 API Endpoint 的 headers
extapi = extapi.update(headers={"Authorization": "Bearer newtoken"})
print(extapi)

# 更新 API Endpoint 的 base_url
extapi = extapi.update(base_url="https://api.example.com/v2")
print(extapi)
```

**3. 获取 API Endpoint**

可以通过名称或 ID 获取 API Endpoint：

```python
extapi = at.extapis.get(name="Updated Test API")
print(extapi)

extapi = at.extapis.get(id=extapi.id)
print(extapi)
```

**4.  删除 API Endpoint**

删除一个 API Endpoint：

```python
extapi.delete()
```


**5. 创建 API Route**

在某个 API Endpoint 下创建新的 Route：

```python
route = extapi.routes.create(
    name="Test Route",
    path="/test",
    method="GET",
    route_params="{'id': 'Test ID'}",
    query_params="{'filter': 'Filter condition'}",
    body_params="{'data': 'Data payload'}"
)
print(route)
```

**6. 更新 API Route**

可以更新 Route 的名称、路径和查询参数等：

```python
# 更新 Route 的名称
route = route.update(name="Updated Test Route")
print(route)

# 更新 Route 的路径
route = route.update(path="/test_updated")
print(route)

# 更新 Route 的查询参数
route = route.update(query_params="{'filter': 'Updated filter condition'}")
print(route)
```

**7. 获取 API Route**

可以通过名称或 ID 获取 Route：

```python
route = extapi.routes.get(id=route.id)
print(route)

route = extapi.routes.get(name="Updated Test Route")
print(route)
```

**8. 删除 API Route**

删除一个 Route：

```python
route.delete()
```

## 示例代码
完整示例代码：

```python
from asktable import AskTable
from atserver import config

token = config.at_auth_by_default_token
at = AskTable(token=token, api_url="https://your-api-url")

# 创建新的 API Endpoint
extapi = at.extapis.create(
    name="Test API",
    base_url="https://api.example.com/v1",
    headers={"Authorization": "Bearer testtoken"}
)

# 更新 API Endpoint 的名称
extapi = extapi.update(name="Updated Test API")

# 创建新的 API Route
route = extapi.routes.create(
    name="Test Route",
    path="/test",
    method="GET",
    route_params="{'id': 'Test ID'}",
    query_params="{'filter': 'Filter condition'}",
    body_params="{'data': 'Data payload'}"
)

# 更新 Route 的名称
route = route.update(name="Updated Test Route")

# 获取并打印 Route
route = extapi.routes.get(id=route.id)
print(route)

# 删除 Route 和 Endpoint
route.delete()
extapi.delete()
```