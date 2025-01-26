# 通过控制台管理 API

## 查看 API Endpoint


在 API 接口管理页面，您可以查看、创建、编辑和删除 API Endpoint。该页面采用表格形式展示了所有已定义的 API Endpoint。每个 API Endpoint 都包含以下信息：

* **ID:** 唯一标识符。
* **名称:** API Endpoint 的名称。
* **根 URL:** 外部 API 的基础 URL。
* **HTTP 头:** HTTP 请求头信息，以键值对形式展示。
* **创建时间:** API Endpoint 创建的时间。
* **修改时间:** API Endpoint 最近一次修改的时间。


**功能：**

* **创建 API Endpoint:** 点击“创建 API Endpoint”按钮，弹出一个对话框，允许用户输入名称、根 URL 和 Headers 信息。
* **编辑 API Endpoint:** 点击表格中某个 API Endpoint 的编辑按钮，弹出一个对话框，允许用户修改已有的 API Endpoint 。
* **删除 API Endpoint:** 点击表格中某个 API Endpoint 的删除按钮，删除对应的 API Endpoint。
* **查看 Routes:** 点击表格中某个 ExtAPI 行，右侧会滑出一个抽屉，显示该 ExtAPI 下的所有 API Route。


## 创建和编辑 API Endpoint

在创建或编辑 API Endpoint 的对话框中，用户需要输入以下信息：

* **名称:** API Endpoint 的名称。
* **根 URL:** 外部 API 的基础 URL。
* **HTTP 头:** HTTP 请求头信息，以键值对形式展示。

HTTP 头（Header）: HTTP 请求头信息，用户可以按键值对方式输入多个 Header。每个 Header 行后面都有一个删除按钮，用户可以删除不需要的 Header。



## 查看 API Route 

在 API Route 管理页面，您可以查看、创建、编辑和删除 API Route。该页面采用表格形式展示了所有已定义的 API Route。每个 API Route 都包含以下信息：

* **名称:** API Route 的名称。
* **方法:** HTTP 请求方法，如 GET、POST、PUT、DELETE。
* **路径:** API 路径。
* **操作:** 包含编辑和删除按钮。

页面功能：

* **创建 Route:** 点击“创建 Route”按钮，弹出一个对话框，允许用户输入名称、方法、路径以及路径参数、查询参数和请求体参数的描述信息。
* **编辑 Route:** 点击表格中某个 Route 的编辑按钮，弹出一个对话框，允许用户修改已有的 Route 信息。
* **删除 Route:** 点击表格中某个 Route 的删除按钮，删除对应的 API Route。


## 创建和编辑 API Route

在创建或编辑 API Route 的对话框中，用户需要输入以下信息：

* **名称:** API Route 的名称。
* **方法:** HTTP 请求方法，用户可以从下拉菜单中选择 GET、POST、PUT 或 DELETE。
* **路径:** API 路径，支持路径参数。
* **路径参数描述:** 路径参数的描述信息。
* **查询参数描述:** 查询参数的描述信息。
* **请求体参数描述:** 请求体参数的描述信息，支持 JSON 格式。

