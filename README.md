# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第2章 调试与环境配置

实现环境:`Visual Studio`

实现功能:

1. 代码自动格式化

使用`prettier`插件实现

2. 设置自定义代码块

在`file`中找到`Preferences`里的`Configure User Snippets`，设置自定义名字后，设置自定义代码块，示例如下:

```js
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  "Print to console": {
    "scope": "javascript,typescript",//语言范围
    "prefix": "cl",//触发字母
    "body": ["console.log();"],//获取的内容
    "description": "Log output to console"//显示描述
  }
}
```

`node.js`:是开放的、跨平台的、运行时`JavaScript`环境

`npm`:是安装包的下载工具

> 配置编程环境:
> 
> 1. 有`live-server`的实时环境
> 
> 2. 规范的编码格式，可以使用`prettier`
> 
> ---
> 
> - 写代码的过程需要坚持
