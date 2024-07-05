
# API Calling 简介

## 1. 背景
API Calling 功能旨在为 AskTable 用户提供在 ChatBot 中执行外部任务的能力。通过此功能，用户可以轻松管理和调用外部 API，以便在 ChatBot 中集成和执行各种外部服务。无论是订会议室、企业流程审批，还是预订酒店房间，API Calling 功能都能使这些操作变得高效和便捷。

## 2. 功能介绍
API Calling 功能允许您通过定义管理外部 API，并提供给 ChatBot 使用。API Calling 功能支持 GET、POST、PUT、DELETE 等常见的 HTTP 请求方法，同时支持路径参数、查询参数和请求体参数。

**示例** 
假设您希望在 ChatBot 中能够直接预定会议室。您可以在 AskTable 中分别创建一个 API Endpoint 和 API Route。


**API Endpoint**
API Endpoint 表示一个外部 API 的基础 URL 和相关配置信息。例如，会议室预订服务的 API 端点可能如下所示：

* **名称**：Meeting Room Reservation API
* **基础 URL**：`https://api.meetingrooms.com/v1`
* **Headers**：```{"Authorization": "Bearer yourtoken"}```

**API Route**
API Route 表示某个 API Endpoint 下的具体 API 路径和方法。例如，预订会议室的 API 路径和方法可能如下所示：

* **路径**：`/rooms/{room_id}/reservations`
* **方法**：POST
* **路径参数**：`{'room_id': '会议室 ID'}`

* **查询参数**：无

* **请求体参数**：`{'user_id': '用户 ID', 'date': '预订日期', 'start_time': '开始时间', 'end_time': '结束时间'}`

