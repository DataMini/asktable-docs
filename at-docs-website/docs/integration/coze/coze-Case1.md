# 案例一:姓氏查询

### 背景

你想知道你的姓氏有多少人、排名第几，有什么代表人物吗？你可以直接输入你的姓氏，然后让机器人告诉你。

### 准备工作

1. 访问 [AskTable 官网](https://cloud.asktable.com/) 注册账号
2. 创建项目并获取 API_KEY(用于访问插件)
3. 上传一份 Excel 表格,表格的内容是关于姓氏的,并获取 datasource_id(用于指定数据源)

### 开发步骤
1. 创建智能体
2. 添加插件到你的智能体技能中
3. 给智能体设置变量
4. 开始问答

#### 1. 创建智能体

#### 2. 添加插件到你的智能体技能中

- 智能体添加插件中搜索：Excel查询，添加question_to_answer插件


<div className="img-center large">
  <img src="/img/asktable/coze_add_plugin.png" alt="添加插件" />
</div>


#### 3. 设置变量 

- 变量值已经在准备工作中获取

```
Authorization: Bearer API_KEY
datasource_id: datasource_id
```

<div className="img-center large">
  <img src="/img/asktable/coze_set_variable.png" alt="变量设置" />
</div> 

#### 4. 开始问答

<div className="img-center medium">
  <img src="/img/asktable/coze_bot_result.png" alt="Bot 对话结果" />
</div>


这有我们已经创建好的[姓氏查询智能体](https://www.coze.cn/space/7349455355564310554/bot/7436997739965612083)供您参考。