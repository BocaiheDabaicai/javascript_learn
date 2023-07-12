# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第9章 高级DOM

#### 9.1 DOM

DOM对象是一棵结点树，管理着所有的标签对象

结点的类型有：元素、文本、接口、文本符号（comment）、网页（document）

#### 9.2 DOM方法

| 方法名                    | 方法内容                    | 补充    |
| ---------------------- | ----------------------- | ----- |
| .documentElement       | 获取DOM文档结点               |       |
| .head                  | 获取头结点                   |       |
| .body                  | 获取body结点                |       |
| .querySelector         | 查找到第一个符合条件的结点           |       |
| .querySelectorAll      | 查找到所有符合条件的结点，并返回列表      |       |
| .getElementById        | ID查找器                   |       |
| .getElementByTagName   | 标签查找器                   |       |
| .getElementBuClassName | 类查找器                    | 查找    |
| .insertAdjcentHtml     | 创建元素                    |       |
| .createElement         | 创建元素                    |       |
| .classList.add         | 为结点元素添加类名               |       |
| .textContent           | 为结点元素添加纯文本内容            |       |
| .innerHTML             | 为结点元素添加文本、标签内容          |       |
| .prepend               | 在当前结点之前插入新元素，多次插入相同元素无效 |       |
| .append                | 在当前结点之后插入新元素，多次插入相同元素无效 |       |
| .cloneNode             | 复制节点，可以实现多次插入           |       |
| .before                | 在当前结点之前插入新元素            |       |
| .after                 | 在当前结点之后插入新元素            | 创建，添加 |
| .remove                | 删除当前结点                  |       |
| .removeChild           | 删除当前结点的子节点              |       |

#### 9.3 style,attributes,classes

style是文档对象上的样式对象

attributes是文档对象里的标签对象，标签对象上还有自定义的数据集**dataset**，提供只读数据

classes是文档对象里的类列表对象

| 方法名字             | 方法内容                                                                                                                                                  | 补充         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| .backgroundColor | 背景颜色                                                                                                                                                  |            |
| .width           | 宽度                                                                                                                                                    |            |
| .height          | 高度                                                                                                                                                    |            |
| .setProperty     | 设置属性，格式如：（属性名称，属性值），用于获取CSS上的属性，并将属性进行设置，JS：`document.documentElement.style.setProperty('--color-primary','#c04c4c')`，CSS：`--color-primary: #5ec576;` | style      |
| .alt             | img图片的说明标签                                                                                                                                            |            |
| .src             | img的链接地址                                                                                                                                              |            |
| .className       | 类名称                                                                                                                                                   |            |
| .getAttribute    | 获得标签对象上定义的属性值                                                                                                                                         |            |
| .setAttribute    | 为标签对象，设置属性，格式：（属性名，属性值）                                                                                                                               | attributes |
| .add             | 添加                                                                                                                                                    |            |
| .remove          | 删除                                                                                                                                                    |            |
| .toggle          | 删除标记值，并返回false，不存在则添加标记值，并返回true                                                                                                                      |            |
| .contains        | 判断列表中是否包含该值                                                                                                                                           | classes    |