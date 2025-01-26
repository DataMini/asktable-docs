# Scenario One: Surname Inquiry Based on Excel Table

### Background

I have an Excel table containing information about Chinese surnames, such as population numbers, rankings, and representative figures. Using the Coze agent, I want to allow users to quickly obtain information about their surnames through simple dialogue. For example:

- By entering "What is the ranking of the Li surname," one can retrieve the ranking information for the Li surname.

This way, users do not need to look at complex Excel tables; they only need to engage in a conversation-like interaction to easily get the desired surname information.

In this scenario, AskTable helps convert the Excel table data into an intelligent dialogue system, enabling users to effortlessly obtain the required information through natural language.

### Preparation

1. Visit the [AskTable website](https://cloud.asktable.com/) to register an account.
2. Click the "Settings" button in the top-left corner to obtain the API_KEY (used to access the plugin).
3. Upload an Excel table with contents related to surnames and obtain the `datasource_id` (used to specify the data source).

### Development Steps
1. Create an intelligent agent.
2. Add the plugin to your agent's skills.
3. Set variables for the agent.
4. Start the Q&A process.

#### 1. Create an Intelligent Agent

#### 2. Add the Plugin to Your Agent's Skills

- In the agent’s plugin section, search for “Excel Query” and add the `ask_excel` plugin.

<div className="img-center large">
  <img src="/img/asktable/coze_add_plugin.png" alt="Add Plugin" />
</div>

#### 3. Set Variables

- The variable values have been obtained during the preparation phase.

```plaintext
Authorization: Bearer API_KEY
datasource_id: datasource_id
```

<div className="img-center large">
  <img src="/img/asktable/coze_set_variable.png" alt="Variable Settings" />
</div> 

#### 4. Start the Q&A Process

<div className="img-center medium">
  <img src="/img/asktable/coze_bot_result.png" alt="Bot Dialogue Result" />
</div>

Here is a [surname inquiry intelligent agent](https://www.coze.cn/s/iDJdudyN/) we have created for your reference.