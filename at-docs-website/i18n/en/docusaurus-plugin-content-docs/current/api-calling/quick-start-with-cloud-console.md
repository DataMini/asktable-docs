# Managing the API via Console

## View API Endpoint

On the API endpoint management page, you can view, create, edit, and delete API endpoints. This page lists all defined API endpoints in a table format. Each API endpoint includes the following information:

* **ID:** Unique identifier.
* **Name:** Name of the API endpoint.
* **Root URL:** Base URL of the external API.
* **HTTP Headers:** HTTP request headers displayed as key-value pairs.
* **Creation Time:** The time the API endpoint was created.
* **Modification Time:** The last time the API endpoint was modified.

**Functions:**

* **Create API Endpoint:** Clicking the "Create API Endpoint" button brings up a dialog that allows users to input the Name, Root URL, and Headers.
* **Edit API Endpoint:** Clicking the edit button for an API endpoint in the table brings up a dialog allowing users to modify the existing endpoint.
* **Delete API Endpoint:** Clicking the delete button for an API endpoint in the table deletes the corresponding API endpoint.
* **View Routes:** Clicking on a row for an ExtAPI opens a drawer to the right, displaying all API routes under that ExtAPI.

## Creating and Editing API Endpoints

In the dialog for creating or editing an API endpoint, users need to input the following information:

* **Name:** Name of the API endpoint.
* **Root URL:** Base URL of the external API.
* **HTTP Headers:** HTTP request headers displayed as key-value pairs.

HTTP Headers: HTTP request header information, where users can input multiple headers in key-value format. Each header row has a delete button that users can use to remove any unnecessary headers.

## View API Route 

On the API route management page, you can view, create, edit, and delete API routes. This page lists all defined API routes in a table format. Each API route includes the following information:

* **Name:** Name of the API route.
* **Method:** HTTP request method, such as GET, POST, PUT, DELETE.
* **Path:** API path.
* **Action:** Includes edit and delete buttons.

Page functions:

* **Create Route:** Clicking the "Create Route" button brings up a dialog, allowing users to input the Name, Method, Path, and descriptions for path parameters, query parameters, and request body parameters.
* **Edit Route:** Clicking the edit button for a route in the table brings up a dialog allowing users to modify the existing route information.
* **Delete Route:** Clicking the delete button for a route in the table deletes the corresponding API route.

## Creating and Editing API Routes

In the dialog for creating or editing an API route, users need to input the following information:

* **Name:** Name of the API route.
* **Method:** HTTP request method, users can select from the dropdown menu (GET, POST, PUT, DELETE).
* **Path:** API path, supporting path parameters.
* **Path Parameter Description:** Description of the path parameters.
* **Query Parameter Description:** Description of the query parameters.
* **Request Body Parameter Description:** Description of the request body parameters, supporting JSON format.