# Coze 搭建指南

## 介绍

[Coze](https://www.coze.cn/) 是一款基于 AI 的智能工作流构建平台，可帮助用户快速构建和部署智能工作流。我们开发了 AskTable 并在 Coze 中提供服务，用户可以在 Coze 上使用 AskTable 访问自己的 Excel 或者数据库。

## 插件

AskTable 插件面向开发者提供服务，开发者可以在自己的项目中使用我们的插件。我们的插件提供了四种工具：

```
add_data                 # 添加数据源
question_to_sql          # 将问题转换为 SQL
question_to_answer       # 根据问题查询数据并返回给用户
fast_add_and_ask   # 快速添加 Excel 并提问
```

关于插件的更多详细信息，请访问 [AskTable 插件页面](https://www.coze.cn/store/plugin/7407079384349343784)。

## 工作流

无论您是软件开发者还是其他领域的从业者，都可以在 Coze 中轻松建立属于自己的工作流。虽然我们不会详细阐述如何使用工作流，但我们会分享一些使用 Coze 工作流时总结的小技巧，希望能帮助您更轻松地使用工作流。

### 小技巧

- 在搭建工作流之前，建议先梳理清楚自己的业务逻辑，以避免在搭建过程中出现逻辑错误。
- 工作流从起点开始，到终点结束。中间节点必须有输入和输出，即左右两边都要有箭头指向。
- 变量的存取依赖于 bot 中初始化的变量，因此变量名必须与初始化的变量名一致。
- 当尝试运行工作流失败时，可以对失败节点进行单独测试，以便更好地发现问题。

## Bot

您可以将插件或工作流添加到 bot 中，以对话的方式轻松使用。Bot 也是定义和初始化变量的地方。

## 流程总结

我们将整个流程总结为以下几个步骤：

<div className="img-center medium">
  <img src="/img/asktable/coze_bot_steps.png" alt="Coze Bot 步骤" />
</div>


## 更新和维护

[AskTable](https://www.asktable.com/) 将持续更新和维护服务。在更新插件前,我们会发布公告。如果您的工作流中某个插件无法使用,请尝试删除原有插件并重新添加。
