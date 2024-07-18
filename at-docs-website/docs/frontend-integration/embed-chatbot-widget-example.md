# 嵌入聊天机器人组件示例

在本教程中，我们将展示如何在您的网页或应用中嵌入 AskTable 提供的聊天机器人组件，并实现基本的对话功能。无论您的前端是基于 HTML5、React 还是其他框架，都可以按照以下步骤进行集成。

## 前提条件

- 已经获取了 API Token。具体步骤请参考 [聊天机器人组件简介](./chatbot-widget-introduction.md)。

## 步骤

### 1. 引入脚本

在您的 HTML 文件中，引入聊天机器人组件的脚本：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>嵌入聊天机器人</title>
    <!-- 嵌入此脚本到目标网站 -->
    <script>
    // 聊天机器人组件的配置
    window.chatbotConfig = {
        BotId:'YOUR_BOTID',// 替换为实际的Botid  （必填项）
        token:'YOUR_TOKEN' // 替换为实际的token  （必填项与reqTokenUrl二选一）
        reqTokenUrl:'YOUR_REQ_API_Token' //替换为您网站的请求Token的Api （必填项与token二选一）
        themeColor: 'blue', // 选择主题颜色：'blue', 'green', 'red', 'purple', 'orange', 'black', 'white', 'gray', 'yellow' （非必填项）
        chatWindowName: 'AskTable 对话机器人',// 聊天窗口名称     （非必填项）
        defaultOpen: false ,// Ensure chat window is open by default in this context  （非必填项）
    }
    </script>
    <!--加载外部聊天机器人脚本 -->
    <script src="https://static.asktable.com/chatbot.js"></script>
  </head>
  <body>
    <h1>欢迎使用 AskTable 聊天机器人</h1>
    <div id="chatbot"></div>
  </body>
</html>
```

### 2. 配置组件

在配置聊天机器人组件时，传入必要的参数，如 `BotI` 和 `reqTokenUrl`。



现在，您已经成功地在网页中嵌入了聊天机器人组件。用户可以通过该组件与 AskTable 进行智能对话，查询和分析数据。

## 下一步

要进一步自定义聊天机器人的样式，请继续阅读 [自定义聊天机器人样式](./customize-chatbot-style.md) 文档。
