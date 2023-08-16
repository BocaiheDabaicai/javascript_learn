# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第12章 JS异步

#### 12.1 概念

- 同步：代码按照顺序依次执行，如果处于阻塞状态，那么下面的代码不会被执行，直到阻塞被处理

- 异步：代码会被延时执行，即同步代码会按照顺序执行，异步代码在一定条件被触发后，才会执行，**相比于同步而言，异步代码可能不会按顺序执行，而且不会被阻塞，回调函数不能编写异步代码**

说明：

1. 同步代码，一般的代码语句

2. 异步代码，带有API请求、时间函数、AJAX等等

3. AJAX，即异步JS和XML，允许使用异步方式下的web服务器进行通讯，对于AJAX回调来说，可以实现动态请求web服务器下的数据

4. API，应用编程接口，软件的部分功能可以被使用在另一个软件上，允许软件之间进行交互

#### 12.2 请求与响应

URL的组成：

1. 通讯协议

2. 域名

3. 资源地址

请求到响应的完整过程：

1. 客户端发送URL到域名系统进行IP查询

2. 查询成功后，将IP地址返回给客户端

3. 服务器与客户端进行TCP/IP连接(Socket)

4. 客户端发送HTTP请求

5. 服务器发送HTTP响应

> HTTP请求包括：请求头和请求体
> 
> HTTP响应包括：响应头和响应体
> 
> HTTPS请求，会使用TLS或SSL进行加密

#### 12.3 回调地狱

概念：异步代码当中，出现时间函数、请求API的代码块重复使用多次，使得代码难以维护、难以理解的情况。

#### 12.4 Fetch

Fetch是一个函数，用于请求资源，并最终返回一个`Promise`对象的`resolve`结果

#### 12.5 Promise

产生`Promise`对象：

- 通过`fetch`函数生成`Promise`回应

- 在使用`then`方法获取`Promse`的结果

链式传递参数：

- 在`then`方法内使用`return`再次返回一个`Promise`对象

特别地，

1. `catch`方法也会传递一个`Promise`对象

2. `finally`方法会默认执行

示例如下：

```js
fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]

            if (!neighbour) return;

            return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(error => {
            console.error(`${error} 💥💥💥`)
            renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
```