# 高级功能：用户身份认证


## 概述
AskTable 是一款能够识别用户身份的智能机器人，但被集成网站的用户信息并不存储在 AskTable 中。因此，AskTable 需要借助被集成网站来完成对用户的识别和认证。本文档将详细解释如何将 AskTable 集成到网站中，并通过该网站的用户认证系统实现用户身份认证。

## 认证流程
整个认证过程分为三个主要阶段：网站用户认证、AskTable 认证、用户使用 AskTable。下图展示了详细的时序流程。


<div className="img-center xlarge">
  <img src="/img/asktable/at_auth_get_temp_token_for_user.png" alt="get_temp_token" />
</div>

### 1. 网站用户认证
1. 用户在浏览器中输入网站地址。
2. 浏览器向**客户当前的后端服务器**发起认证请求。
3. 后端服务器对用户进行认证，认证成功后返回 Session Token。

### 2. AskTable 认证
浏览器在获得 Session Token 后，唤起 AskTable Bot。
AskTable Bot **向客户当前的后端服务器**请求获取 AskTable Temp-Token。
后端服务器申请 Temp-Token，并将携带用户信息的 Temp-Token 返回给 AskTable Bot。
AskTable Bot 将 Temp-Token 发送到**AskTable 服务器**。
AskTable 服务器记录 Temp-Token 并与当前用户绑定，然后返回 Temp-Token。

### 3. 用户使用 AskTable
用户在 AskTable 中提出问题，例如“我是谁？”。
浏览器将问题和 Temp-Token 发送给 AskTable 服务器。
AskTable 服务器根据 Temp-Token 识别用户身份，并返回用户信息，例如“你是张三”。
用户可以继续进行类似的交互。

## 实现步骤
### 1. 集成 AskTable Bot
首先，需要在您的网站中集成 AskTable Bot。这可以通过嵌入以下脚本代码实现：

```html
<script>
 window.chatbotConfig = {
   botId: 'YOUR_ASKTABLE_BOT_ID',
   reqTokenUrl: '/api/asktable/temp-token'  // 获取 Temp-Token 的后端 API 地址
 }
</script>
<script src="https://cloud.asktable.com/chatbot.js"></script>
```

了解更多详细信息：- [嵌入聊天机器人组件示例](./embed-chatbot-widget-example.md)


### 2. 用户认证
在用户访问您的网站并成功登录后，您的服务器应生成一个 Session Token 并返回给用户的浏览器。

### 3. 获取 Temp-Token
当 AskTable Bot 被唤起时，浏览器将使用 Session Token 向您的后端服务器请求一个 Temp-Token。后端服务器将包含用户信息的 Temp-Token 返回给浏览器。

### 4. 发送 Temp-Token 到 AskTable 服务器
浏览器将获取到的 Temp-Token 发送到 AskTable 服务器。AskTable 服务器将记录 Temp-Token 并将其与当前用户绑定。

### 5. 用户与 AskTable 交互
用户可以通过 AskTable Bot 提出问题。浏览器将问题和 Temp-Token 一并发送到 AskTable 服务器，后者根据 Temp-Token 识别用户身份并返回相应的信息。

## 总结
通过以上步骤，您可以成功将 AskTable 集成到您的网站，并通过您的用户认证系统完成对用户身份的识别和认证。这样，AskTable 机器人能够为经过认证的用户提供个性化的智能交互服务，提高用户体验和服务质量。
