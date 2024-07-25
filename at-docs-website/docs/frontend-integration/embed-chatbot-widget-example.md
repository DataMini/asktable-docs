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
    <title>示例网站</title>
    <!-- 嵌入机器人 JS 代码到目标网站  BEGIN -->
    <script>
     window.chatbotConfig = {
       botId: 'bot_xxxxxxxxxxxx',
       //  askTableToken 和 reqTokenUrl 至少有一个必选
       askTableToken:  'ADMIN_XXXXXXXXXXXXX'
       //  如果有 askTableToken，则忽略 reqTokenUrl
       reqTokenUrl: '/api/asktable/temp_token'
     }
    </script>
    <script src="https://static.asktable.com/chatbot.js"></script>
    <!-- 嵌入机器人 JS 代码到目标网站  END -->
  </head>
  <body>
    <h1>欢迎进入示例网站，该网站嵌入了 AskTable 聊天机器人，欢迎使用！</h1>
    <div id="chatbot"></div>
  </body>
</html>
```

### 2. 配置组件

在配置聊天机器人组件时，传入必要的参数，如 `token` 和 `datasourceId`。



现在，您已经成功地在网页中嵌入了聊天机器人组件。用户可以通过该组件与 AskTable 进行智能对话，查询和分析数据。

## 下一步

要进一步自定义聊天机器人的样式，请继续阅读 [自定义聊天机器人样式](./customize-chatbot-style.md) 文档。
