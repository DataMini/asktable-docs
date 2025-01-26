# Advanced Features: User Authentication

## Overview
AskTable is an intelligent robot capable of recognizing user identity, but the user information integrated into the website is not stored in AskTable. Therefore, AskTable needs to rely on the integrated website to identify and authenticate users. This document will detail how to integrate AskTable into a website and use the website's user authentication system to achieve user identity authentication.

## Authentication Process
The entire authentication process is divided into three main stages: website user authentication, AskTable authentication, and user interaction with AskTable. The detailed sequence diagram is shown below.

<div className="img-center xlarge">
  <img src="/img/asktable/at_auth_get_temp_token_for_user.png" alt="get_temp_token" />
</div>

### 1. Website User Authentication
1. The user inputs the website address in their browser.
2. The browser sends an authentication request to the customer's current backend server.
3. The backend server authenticates the user. Upon successful authentication, it returns a Session Token.

### 2. AskTable Authentication
After obtaining the Session Token, the browser invokes the AskTable Bot.
The AskTable Bot requests an AskTable Temp-Token from the customer's current backend server.
The backend server applies for a Temp-Token and returns it to the AskTable Bot, carrying user information.
The AskTable Bot sends the Temp-Token to the AskTable server.
The AskTable server records the Temp-Token and associates it with the current user, then returns the Temp-Token.

### 3. User Interaction with AskTable
The user asks a question in AskTable, such as "Who am I?"
The browser sends the question and the Temp-Token to the AskTable server.
The AskTable server identifies the user based on the Temp-Token and returns user information, such as "You are Zhang San."
The user can continue with similar interactions.

## Implementation Steps
### 1. Integrate AskTable Bot
First, you need to integrate the AskTable Bot into your website. This can be achieved by embedding the following script code:

```html
<script>
 window.chatbotConfig = {
   botId: 'YOUR_ASKTABLE_BOT_ID',
   reqTokenUrl: '/api/asktable/temp-token'  // Backend API address to get Temp-Token
 }
</script>
<script src="https://cloud.asktable.com/chatbot.js"></script>
```

For more details: - [Embedding Chatbot Component Example](./embed-chatbot-widget-example.md)

### 2. User Authentication
When a user visits your website and successfully logs in, your server should generate a Session Token and return it to the user’s browser.

### 3. Obtain Temp-Token
When the AskTable Bot is invoked, the browser uses the Session Token to request a Temp-Token from your backend server. The backend server returns a Temp-Token containing user information to the browser.

### 4. Send Temp-Token to AskTable Server
The browser sends the obtained Temp-Token to the AskTable server. The AskTable server records the Temp-Token and associates it with the current user.

### 5. User Interaction with AskTable
Users can ask questions through the AskTable Bot. The browser sends both the question and the Temp-Token to the AskTable server, which identifies the user based on the Temp-Token and returns the corresponding information.

## Summary
By following these steps, you can successfully integrate AskTable into your website and authenticate user identities using your user authentication system. In this way, AskTable robots can provide personalized intelligent interactive services to authenticated users, enhancing user experience and service quality.