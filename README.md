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

| 方法名字                   | 方法内容                                                                                                                                                  | 补充         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| .backgroundColor       | 背景颜色                                                                                                                                                  |            |
| .width                 | 宽度                                                                                                                                                    |            |
| .height                | 高度                                                                                                                                                    |            |
| .setProperty           | 设置属性，格式如：（属性名称，属性值），用于获取CSS上的属性，并将属性进行设置，JS：`document.documentElement.style.setProperty('--color-primary','#c04c4c')`，CSS：`--color-primary: #5ec576;` | style      |
| .alt                   | img图片的说明标签                                                                                                                                            |            |
| .src                   | img的链接地址                                                                                                                                              |            |
| .className             | 类名称                                                                                                                                                   |            |
| .getAttribute          | 获得标签对象上定义的属性值                                                                                                                                         |            |
| .setAttribute          | 为标签对象，设置属性，格式：（属性名，属性值）                                                                                                                               | attributes |
| .add                   | 添加                                                                                                                                                    |            |
| .remove                | 删除                                                                                                                                                    |            |
| .toggle                | 删除标记值，并返回false，不存在则添加标记值，并返回true                                                                                                                      |            |
| .contains              | 判断列表中是否包含该值                                                                                                                                           |            |
| childNodes             | 该元素下的所有结点                                                                                                                                             |            |
| children               | 该元素下的子结点                                                                                                                                              |            |
| firstElementChild      | 首位子结点                                                                                                                                                 |            |
| lastElementChild       | 尾位子结点                                                                                                                                                 |            |
| parentNode             | 父结点                                                                                                                                                   |            |
| parentElement          | 父元素                                                                                                                                                   |            |
| closest                | 查询该元素的上级结点                                                                                                                                            |            |
| previousElementSibling | 前一个兄弟元素                                                                                                                                               |            |
| nextElementSibling     | 后一个兄弟元素                                                                                                                                               |            |
| previousSibling        | 前一个兄弟结点                                                                                                                                               |            |
| nextSibling            | 后一个兄弟节点                                                                                                                                               |            |
| parentElement.children | 当前元素的父元素下的所有结点                                                                                                                                        | classes    |

#### 9.3 效果实现

1. **平滑滚动**

前置内容

| 方法名字                         | 方法内容                | 补充  |
| ---------------------------- | ------------------- | --- |
| getBoundingClientRect        | 返回当前对象的大小以及相对于视口的位置 |     |
| documentElement.clientHeight | 返回当前的视口高度           |     |
| documentElement.clientWidth  | 返回当前的视口宽度           |     |
| windw.pageXOffset            | 返回滚动条离X轴初始位置的距离     |     |
| windw.pageYOffset            | 返回滚动条离Y轴初始位置的距离     |     |

```js
const s1coords = section1.getBoundingClientRect();

// 滚动的实现，该元素离顶部的距离+滚动条离顶部的距离 = 指定元素的位置
window.scrollTo(
s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset
)


// 平滑滚动
window.scrollTo({
    left:s1coords.left + window.pageXOffset,
    top:s1coords.top + window.pageYOffset,
    behavior:'smooth'
  }) 

// 现代方法
section1.scrollIntoView({behavior:'smooth'})
```

2. **鼠标事件**

方法：

| 方法名字       | 方法内容      | 补充  |
| ---------- | --------- | --- |
| mouseenter | 鼠标移入元素时触发 |     |

添加监听事件

```js
const h1 = document.querySelector('h1');

// 监听事件触发后，删除监听事件
const alertH1 = function (e) {
  alert(`监听事件 mouseenter 触发`);

  h1.removeEventListener('mouseenter',alertH1);
}

h1.addEventListener('mouseenter',alertH1);
```

#### 9.4 冒泡、捕获、委托

监听事件的触发过程如下：

先捕获、再冒泡

- **捕获**：触发事件时，首先从根结点层层寻找，直到找到触发结点为止

- **冒泡**：找到触发结点之后，从当前结点开始，层层向上传递，直到根节点为止

- **委托**：监听事件绑定到父元素上，当子元素触发冒泡事件时，通过父元素实现监听事件触发

补充：当前元素再触发监听事件后，捕获完成之后，当前元素会被冒泡到外层元素的`event.target`对象上，可以通过`event.stopPropagation`阻止事件向上冒泡

```js
元素对象.addEventListener('click',function(e){
    // 监听体
},false) // 默认false，指冒泡阶段捕获事件，可调整为捕获阶段
```

> `preventDefault:监听事件如果未执行，那么该元素的默认事件不触发`

事件委托示例：

```js
document.querySelector('.nav__links').addEventListener('click',
function(e){
  e.preventDefault(); //阻止当前元素的默认事件触发

  if (e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})
```

#### 9.5 监听者对象

使用过程：

1. 创建`IntersectionObserver`对象

2. 配置回调函数、选项

3. 使用observe方法进行DOM元素监听

示例：

```js
// 获取DOM元素
const header = document.querySelector('.header');
// 获取当前视口下，Nav元素的高度
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
// 配置观察者对象的回调函数，参数还有一个 observer
const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}
// 创建监听者对象，并配置参数
const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,// 交叉值
  rootMargin:`-${navHeight}px`// 监听者对象设置margin值，提前位置触发
})
headerObserver.observe(header) // 监听header对象
```