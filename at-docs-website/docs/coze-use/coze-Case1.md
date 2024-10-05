# 案例一:班主任助手

### 背景

班主任经常需要查询学生的成绩信息,但频繁查阅 Excel 表格较为繁琐。我们可以创建一个聊天机器人(bot),使班主任能够通过对话方式轻松获取学生成绩信息。

### 准备工作

1. 访问 [AskTable 官网](https://cloud.asktable.com/) 注册账号
2. 创建项目并获取 API Key(用于访问插件)
3. 上传 Excel 表格并获取 datasource_id(用于指定数据源)

### 开发步骤

#### 1. 初始化 Bot

创建新的 bot,设置两个变量:
- datasource_id:填入准备工作中获取的值
- api_key:填入准备工作中获取的值

<div className="img-center large">
  <img src="/img/asktable/coze_bot_variable1.png" alt="Bot 变量设置" />
</div>

#### 2. 编写工作流

1. 梳理工作流程:

<div className="img-center large">
  <img src="/img/asktable/coze_flow_ideas1.png" alt="工作流程图" />
</div>

2. 根据流程图创建工作流。详细步骤可参考 [班主任助手工作流](https://www.coze.cn/work_flow?space_id=7349455355564310554&workflow_id=7421814601324953654)。您也可以创建该工作流的副本进行修改。

3. 试运行工作流,选择刚创建的 bot 作为运行对象。运行成功后发布工作流。

#### 3. 将工作流添加到 Bot

将工作流添加到 bot 后,即可在对话界面进行测试,这有我们已经创建好的[班主任神器bot](https://www.coze.cn/space/7349455355564310554/bot/7421817356974309413)供您参考。

<div className="img-center medium">
  <img src="/img/asktable/coze_bot_result.png" alt="Bot 对话结果" />
</div>
