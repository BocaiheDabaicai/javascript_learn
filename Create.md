# 项目构建说明

---

## 一. 安装

#### 1. 代码格式化工具

安装`prettier`   

```js
npm install --save-dev --save-exact prettier    
```

生成配置文件与忽略文件

- `.prettierrc.json`

- `.prettierignore`

#### 2. ES代码检查工具

安装`eslint`

```js
npm init @eslint/config
```

选择配置，自动生成

#### 3. 样式代码检查工具

安装`stylelint`

```js
npm install --save-dev stylelint stylelint-config-standard
```

创建配置文件

- `.stylelintrc.json`

写入如下标准内容:

```json
{
  "extends": "stylelint-config-standard"
}
```

#### 4. 解决检查工具之间的冲突

安装的依赖包如下

```js
npm install --save-dev stylelint-config-prettier
npm install --save-dev eslint-config-prettier
```

然后分别在以下文件中添加语句

1. `.stylelintrc.json`

```js
"extends": [
    ...,
    "stylelint-config-prettier"
  ]
```

2. `.eslintrc.json`

```js
"extends": [
        ...,
        "stylelint-config-prettier"
    ],
```