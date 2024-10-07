# 案例二:Excel 问答助手

### 背景

在日常使用 Excel 进行数据查询时,需要记忆多种复杂函数(如 VLOOKUP、HLOOKUP、INDEX+MATCH 等)。我们可以创建一个 bot,用户只需上传 Excel 表格并与 bot 对话,即可轻松查询所需数据。

### 准备工作

1. 访问 [AskTable 官网](https://cloud.asktable.com/) 注册账号
2. 创建项目并获取 API Key(用于访问插件)

### 开发步骤

#### 1. 初始化 Bot

创建新的 bot,设置三个变量:
- api_key:填入准备工作中获取的值
- datasource_id:暂不填写
- answer:暂不填写

<div className="img-center large">
  <img src="/img/asktable/coze_bot_variable2.png" alt="Bot 变量设置" />
</div>

#### 2. 编写工作流

1. 梳理工作流程:

<div className="img-center full-width">
  <img src="/img/asktable/coze_flow_ideas2.png" alt="工作流程图" />
</div>

2. 根据流程图创建工作流。详细步骤可参考 [Excel 问答助手工作流](https://www.coze.cn/work_flow?space_id=7349455355564310554&workflow_id=7421814601324953654)。您也可以创建该工作流的副本进行修改。

3. 试运行工作流,选择刚创建的 bot 作为运行对象。运行成功后发布工作流。

#### 3. 将工作流添加到 Bot

将工作流添加到 bot 后,即可在对话界面进行测试,这有我们已经创建好的[excel问答助手bot](https://www.coze.cn/space/7349455355564310554/bot/7422165486533672960)供您参考。

<div className="img-center medium">
  <img src="/img/asktable/coze-bot-result2.png" alt="Bot 对话结果" />
</div>
