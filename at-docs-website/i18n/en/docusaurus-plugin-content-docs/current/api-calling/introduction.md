# Introduction to API Calling (API Tool)

## 1. Background
The API Calling feature aims to provide AskTable users with the ability to execute external tasks within ChatBots. Through this feature, users can easily manage and invoke external APIs, enabling the integration and execution of various external services within ChatBots. Whether it’s booking a meeting room, corporate process approval, or reserving a hotel room, the API Calling feature makes these operations efficient and convenient.

## 2. Feature Introduction
The API Calling feature allows you to define and manage external APIs, providing them for use by ChatBots. This feature supports common HTTP request methods such as GET, POST, PUT, and DELETE, and it also supports path parameters, query parameters, and request body parameters.

**Example**
Suppose you wish to directly reserve a meeting room through a ChatBot. You can create an API Endpoint and an API Route in AskTable.

**API Endpoint**
An API Endpoint represents the base URL and related configuration information for an external API. For example, the API endpoint for a meeting room reservation service might look like this:

* **Name**: Meeting Room Reservation API
* **Base URL**: `https://api.meetingrooms.com/v1`
* **Headers**: ```{"Authorization": "Bearer yourtoken"}```

**API Route**
An API Route represents a specific API path and method under an API Endpoint. For example, the API path and method for booking a meeting room might look like this:

* **Path**: `/rooms/{room_id}/reservations`
* **Method**: POST
* **Path Parameter**: `{'room_id': '会议室 ID'}`

* **Query Parameters**: None

* **Request Body Parameters**: `{'user_id': '用户 ID', 'date': '预订日期', 'start_time': '开始时间', 'end_time': '结束时间'}`