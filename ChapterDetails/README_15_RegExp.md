## 第15章 正则表达式（个人补充）

#### 15.1 创建一个正则表达式

两种方式

1. 直接声明正则表达式规则，`let re = /ab+c/`

2. 获取一个正则表达式对象，`let re = new RegExp("ab+c")`

## 15.2 编写匹配模式

1. 简单模式，直接书写字符串，并匹配与内容相同的部分，例如`/abc/`，只找字符串`abc`

2. 特殊字符，使用特殊字符，查找规定模式，例如`/ab*c/`，找字符串`abc`，且`b`的个数无限

**特殊字符表**

| 字符      | 含义                                                                    |
| ------- | --------------------------------------------------------------------- |
| `\`     | 表示匹配类型，常见的形式有`\d`、`\s`，分别代表匹配整数、匹配空格                                  |
| `^`     | 表示匹配输入的开始，例如`/^a/`，表示开头字符为`a`                                         |
| `$`     | 表示匹配输入的结束，例如`/b$/`，表示结束字符为`b`                                         |
| `*`     | 表示前一个输入的0次或多次，例如`/ab*c/`，表示匹配`b`的0次或多次                                |
| `+`     | 表示前一个输入的1次或多次，例如`/ab+c/`，表示匹配`b`的1次或多次                                |
| `.`     | 表示匹配不在首位置的输入，例如`/.n/`，表示匹配除开头位置之外，包含`n`字符的匹配值，如`nas df no n`，得到`no,n` |
| `(x)`   | 表示匹配值的重复表达，例如`/(foo) \1/`，表示匹配`/foo foo/`                             |
| `x(?y)` | 表示匹配`x`且后面的内容是否是`y`，结果不包含`y`，例如`/foo(?=bar\|deed)/`                   |
| (?<=y)x | 表示匹配`x`且前面的内容是否是`y`，结果不包含`y`，例如`/(?<=bar\|let)foo/`                   |
| (?<!y)x | 表示匹配`x`且前面的内容不是`y`，结果不包含`y`，例如`/(?<!bar)foo/`                         |
| `x\|y`  | 表示匹配的输入为`x`或`y`                                                       |
|         |                                                                       |
|         |                                                                       |

> 启用贪婪模式
> 
> 被匹配的字符串：`123abc`
> 
> 使用`/\d+/`，则得到结果`123`，使用`+`号，会尽可能得到更多的整数，贪婪性
> 
> 使用`/\d?/`，则得到结果`1`，使用`?`号，会尽可能少匹配，非贪婪性