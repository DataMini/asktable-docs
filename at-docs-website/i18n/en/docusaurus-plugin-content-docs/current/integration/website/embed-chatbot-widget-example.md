# Example of Integrating a Chatbot in a Website

In this tutorial, we will demonstrate how to embed the chatbot component provided by AskTable into your webpage or application and implement basic conversation functions. Whether your frontend is based on HTML5, React, or other frameworks, you can follow these steps for integration.

## Prerequisites

- You have obtained an API key. For specific steps, refer to the [Chatbot Component Introduction](./chatbot-widget-introduction.md).

## Workflow Diagram

<div className="img-center xlarge">
  <img src="/img/asktable/at_embed_chatbot_flow.png" alt="at_embed_chatbot_flow" />
</div>

## Steps

### 1. Include the Script

In your HTML file, include the script for the chatbot component:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example Website</title>
    <!-- Embed the robot JS code into the target website BEGIN -->
    <script>
     window.chatbotConfig = {
       botId: 'YOUR_ASKTABLE_BOT_ID',
       // Either askTableAPIKey or reqTokenUrl must be provided
       askTableAPIKey:  'YOUR_ASKTABLE_API_KEY',
       // If askTableAPIKey is provided, ignore reqTokenUrl
       reqTokenUrl: '/api/asktable/temp_token',
       // Theme color, default is black, other options include white
       themeColor: 'black'
     }
    </script>
    <script src="https://cloud.asktable.com/chatbot.js"></script>
    <!-- Embed the robot JS code into the target website END -->
  </head>
  <body>
    <h1>Welcome to the example website, which has integrated the AskTable chatbot. Feel free to use it!</h1>
    <div id="chatbot"></div>
  </body>
</html>
```

### 2. Configure the Component

When configuring the chatbot component, pass in necessary parameters such as `botId`.

## Next Steps

Now, you have successfully embedded the chatbot component in your webpage. Users can interact with AskTable through this component for intelligent conversations, data queries, or task execution. Continue reading the following documentation for more details:

- [How AskTable Authenticates and Identifies Users](./server-get-temp-token-for-user.md)