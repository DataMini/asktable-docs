# 案例二:Excel/CSV 问答助手

### 背景

在日常使用 Excel/CSV 进行数据查询时,需要记忆多种复杂函数(如 VLOOKUP、HLOOKUP、INDEX+MATCH 等)。我们可以创建一个智能体,用户只需上传 Excel/CSV 表格并与智能体对话,即可轻松查询所需数据。

### 开发步骤
1. 创建智能体
2. 添加插件到你的智能体技能中
3. 设置变量
4. 开始问答

#### 1. 创建智能体

#### 2. 添加插件到你的智能体技能中

- 智能体添加插件中搜索：Excel查询，添加add_Excel_or_CSV和question_to_answer插件
---

<div className="img-center full-width">
  <img src="/img/asktable/coze_add_plugin_2.png" alt="添加插件" />
</div>

#### 3. 设置变量
- 变量名称为：datasource_id
- 默认值：不需要填写
- 描述：add_data上传excel后返回的id值
---
<div className="img-center full-width">
  <img src="/img/asktable/coze_set_variable_2.png" alt="设置变量" />
</div>

#### 4. 上传并问答

<div className="img-center medium">
  <img src="/img/asktable/coze_bot_result_2.png" alt="问答结果" />
</div>

这有我们已经创建好的[Excel/CSV 问答助手智能体](https://www.coze.cn/s/iDJR6joR/)供您参考。