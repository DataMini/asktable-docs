# Embedding the ChatBot Widget

AskTable provides a frontend ChatBot widget that makes it easy for businesses to integrate an intelligent chatbot into their own websites or applications.

<div class="img-center xlarge">
  <img src="/img/asktable/at_chatbot_case_meeting.png" alt="meeting" />
</div>

Here are the detailed embedding steps:

## Configuring the ChatBot Widget

1. **Obtain the API Key and Data Source ID**: Ensure you have obtained the API Key and added the corresponding data source. Note down the data source ID.

2. **Configure the ChatBot**: Add the following script to your HTML file and modify the configuration parameters as needed.

```html
<!-- Embed this script in the target website -->
<script>
 window.chatbotConfig = {
   botId: 'YOUR_ASKTABLE_BOT_ID',
   askTableAPIKey:  'YOUR_ASKTABLE_API_KEY',
 }
</script>
<script src="https://cloud.asktable.com/chatbot.js"></script>
```

## Embedding Steps

1. **Add the Script to the Webpage**: Embed the above script code into your webpage, typically placing it just before the closing `</body>` tag to ensure the ChatBot widget loads after the page has finished loading.

2. **Adjust the Styles**: Customize the ChatBot's appearance according to your website’s style. You can modify the `themeColor` parameter to change the ChatBot’s theme color.

3. **Test the ChatBot**: Save your changes and refresh the webpage. The ChatBot widget should appear in the designated location on the page. Test the ChatBot to ensure it functions correctly and responds properly to user queries.

## Example Code
Below is a complete HTML example code demonstrating how to embed the ChatBot widget:

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
     askTableAPIKey:  'YOUR_ASKTABLE_API_KEY',
   }
  </script>
  <script src="https://cloud.asktable.com/chatbot.js"></script>
</body>
</html>
```

By following these steps, you have successfully embedded AskTable's ChatBot widget into your website. Users can now interact with the ChatBot to query and engage, enhancing user experience and service quality.