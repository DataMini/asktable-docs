# 场景一：基于Excel表格的姓氏查询

### 背景

我有一份包含中国姓氏人口数量、排名、代表人物等信息的 Excel 表格。通过 Coze 智能体,我希望让用户能够通过简单的对话方式,快速了解自己姓氏的相关信息。比如:

- 输入"李姓排第几",就能获取李姓的排名信息

这样,用户无需查看复杂的 Excel 表格,只需要像跟人聊天一样,就能轻松获取想要的姓氏信息。

在这个场景中，AskTable 帮助我们将 Excel 表格数据转化为智能对话系统，让用户可以通过自然语言轻松获取所需信息。




### 准备工作

1. 访问 [AskTable 官网](https://cloud.asktable.com/) 注册账号
2. 点击左上角的“设置”按钮，获取 API_KEY(用于访问插件)
3. 上传一份 Excel 表格,表格的内容是关于姓氏的,并获取 datasource_id(用于指定数据源)

### 开发步骤
1. 创建智能体
2. 添加插件到你的智能体技能中
3. 给智能体设置变量
4. 开始问答

#### 1. 创建智能体

#### 2. 添加插件到你的智能体技能中

- 智能体添加插件中搜索：Excel查询，添加 ask_excel 插件


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


这有我们已经创建好的[姓氏查询智能体](https://www.coze.cn/s/iDJdudyN/)供您参考。