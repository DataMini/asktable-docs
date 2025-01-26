# Managing APIs with API (SDK)

## API Documentation

**1. Create API Endpoint**

In the AskTable API, use the `extapi` object to manage API Endpoints. To create a new API Endpoint, you can use the following code:

```python
from asktable import AskTable
from atserver import config

token = config.at_auth_by_default_token
at = AskTable(token=token, api_url="https://your-api-url")

# Create a new API Endpoint
extapi = at.extapis.create(
    name="Test API",
    base_url="https://api.example.com/v1",
    headers={"Authorization": "Bearer testtoken"}
)
print(extapi)
```

**2. Update API Endpoint**

You can update the name, base_url, and headers of the API Endpoint:

```python
# Update the API Endpoint name
extapi = extapi.update(name="Updated Test API")
print(extapi)

# Update the API Endpoint headers
extapi = extapi.update(headers={"Authorization": "Bearer newtoken"})
print(extapi)

# Update the API Endpoint base_url
extapi = extapi.update(base_url="https://api.example.com/v2")
print(extapi)
```

**3. Retrieve API Endpoint**

You can get an API Endpoint by name or ID:

```python
extapi = at.extapis.get(name="Updated Test API")
print(extapi)

extapi = at.extapis.get(id=extapi.id)
print(extapi)
```

**4. Delete API Endpoint**

To delete an API Endpoint:

```python
extapi.delete()
```

**5. Create API Route**

Create a new Route under a certain API Endpoint:

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

**6. Update API Route**

You can update the name, path, and query parameters of the Route:

```python
# Update the Route name
route = route.update(name="Updated Test Route")
print(route)

# Update the Route path
route = route.update(path="/test_updated")
print(route)

# Update the Route query parameters
route = route.update(query_params="{'filter': 'Updated filter condition'}")
print(route)
```

**7. Retrieve API Route**

You can get a Route by name or ID:

```python
route = extapi.routes.get(id=route.id)
print(route)

route = extapi.routes.get(name="Updated Test Route")
print(route)
```

**8. Delete API Route**

To delete a Route:

```python
route.delete()
```

## Sample Code
Complete sample code:

```python
from asktable import AskTable
from atserver import config

token = config.at_auth_by_default_token
at = AskTable(token=token, api_url="https://your-api-url")

# Create a new API Endpoint
extapi = at.extapis.create(
    name="Test API",
    base_url="https://api.example.com/v1",
    headers={"Authorization": "Bearer testtoken"}
)

# Update the API Endpoint name
extapi = extapi.update(name="Updated Test API")

# Create a new API Route
route = extapi.routes.create(
    name="Test Route",
    path="/test",
    method="GET",
    route_params="{'id': 'Test ID'}",
    query_params="{'filter': 'Filter condition'}",
    body_params="{'data': 'Data payload'}"
)

# Update the Route name
route = route.update(name="Updated Test Route")

# Retrieve and print the Route
route = extapi.routes.get(id=route.id)
print(route)

# Delete the Route and Endpoint
route.delete()
extapi.delete()
```