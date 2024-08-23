# 嵌入 ChatBot Widget

AskTable 提供了一个前端可嵌入的 ChatBot widget，方便企业将智能聊天机器人集成到自己的网站或应用中。

<div className="img-center xlarge">
  <img src="/img/asktable/at_chatbot_case_meeting.png" alt="meeting" />
</div>

以下是详细的嵌入步骤：

## 配置 ChatBot Widget

1. **获取 API-Key 和数据源 ID**：确保您已经获取了 API-Key，并添加了相应的数据源。记录下数据源的 ID。

2. **配置 ChatBot**：在您的 HTML 文件中添加以下脚本，并根据需要修改配置参数。

```html
<!-- Embed this script in the target website -->
    <script>
     window.chatbotConfig = {
       botId: 'YOUR_ASKTABLE_BOT_ID',
       askTableToken:  'YOUR_ASKTABLE_API_TOKEN',
     }
    </script>
    <script src="https://static.asktable.com/chatbot.js"></script>
```


## 嵌入步骤

1. **在网页中添加脚本**：将上述脚本代码嵌入到您的网页中，通常放置在 **`<body>`** 标签的底部，以确保页面加载完成后再加载 ChatBot widget。

2. **调整样式**：根据您的网站风格，调整 ChatBot 的样式。可以修改 **`themeColor`** 参数来更改 ChatBot 的主题颜色。

3. **测试 ChatBot**：保存修改并刷新网页，ChatBot widget 应该会出现在页面的指定位置。测试 ChatBot 是否能够正常工作，确保其可以正确响应用户的查询。

## 示例代码
以下是一个完整的 HTML 示例代码，展示了如何嵌入 ChatBot widget：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embed AskTable ChatBot</title>
</head>
<body>
  <h1>Welcome to Our Website</h1>
  <p>Here you can chat with our AskTable ChatBot to get more information.</p>

  <!-- Embed this script in the target website -->
    <script>
     window.chatbotConfig = {
       botId: 'YOUR_ASKTABLE_BOT_ID',
       askTableToken:  'YOUR_ASKTABLE_API_TOKEN',
     }
    </script>
    <script src="https://static.asktable.com/chatbot.js"></script>
</body>
</html>
```

通过以上步骤，您已经成功将 AskTable 的 ChatBot widget 嵌入到您的网站中，用户可以通过 ChatBot 进行查询和交互，提升用户体验和服务质量。