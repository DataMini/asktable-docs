# 自定义聊天机器人样式

AskTable 的聊天机器人组件支持多种自定义选项，允许您根据需要调整其外观和行为，以匹配您的网站或应用的设计风格。在本教程中，我们将展示如何自定义聊天机器人的样式。

## 配置选项

在配置聊天机器人组件时，您可以传入自定义样式选项，例如颜色、名称和是否默认打开等。以下是一些常见的配置选项：

- **themeColor**：聊天机器人的主要颜色。可选值有：`blue`, `green`, `red`, `purple`, `orange`, `black`, `white`, `gray`, `yellow`。
- **chatWindowName**：聊天窗口的名称。
- **defaultOpen**：是否默认打开聊天机器人。


## 示例

以下是一个示例，展示如何自定义聊天机器人的样式：

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>自定义聊天机器人样式</title>
    <!-- 嵌入此脚本到目标网站 -->
    <script>
    // 聊天机器人组件的配置
    window.chatbotConfig = {
        BotId:'YOUR_BOTID',// 替换为实际的Botid
        themeColor: 'blue', // 选择主题颜色：'blue', 'green', 'red', 'purple', 'orange', 'black', 'white', 'gray', 'yellow'
        chatWindowName: 'AskTable 对话机器人',// 聊天窗口名称
        defaultOpen: false ,// Ensure chat window is open by default in this context
        reqTokenUrl:'YOUR_REQ_API_Token' //替换为您网站的请求Token的Api
    }
    </script>
    <!--加载外部聊天机器人脚本 -->
    <script src="https://static.asktable.com/chatbot.js"></script>
  </head>
  <body>
    <h1>自定义 AskTable 聊天机器人</h1>
    <div id="chatbot"></div>
  </body>
</html>
```
