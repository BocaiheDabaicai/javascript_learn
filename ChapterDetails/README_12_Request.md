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

#### 挑战一 地图API

出现一些问题：

1. 外网访问

2. 需要注册网址账号，并在请求时携带认证数据

```js
///////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = function (lat,lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response=>{
            console.log(response)
            if (!response.ok)
                throw new Error(`地理位置有误`)
            return response.json()
        })
        .then(data => {
            console.log(data)
            console.log(`You are in ${data.prov}, ${data.city}`)
        })
        .catch(error => {
            console.log(error.message)
        })
}

whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
```

#### 12.6 异步JS背后的原理

回调队列

- 回调队列：用于接收代码中的常规函数、回调函数，并在JS引擎为空时，将任务推进引擎中进行执行。

- 微任务队列：用于接收`fetch`请求、`Promise`对象、DOM方法之类的回调函数，执行优先级高于回调队列，微任务队列未全部执行完毕之前，回调队列停止任务推进

DOM监听事件的回调函数、`fetch`函数.then下的回调函数等等，会首先注册在WEPAPI中，当触发时，回调函数被调入回调队列中。

事件循环

- 将回调队列中的函数放入栈中进行执行，如果栈不为空，则阻塞回调队列中的其它代码进行执行，微任务队列拥有优先级，事件循环会首先保证微任务队列中的每一个回调函数被执行，并在微任务队列中的回调函数被执行之后，才开始执行回调队列中的代码

事件执行顺序

1. 按顺序执行外层函数

2. 按顺序执行微任务（`Promise`）

3. 剩余的回调函数按顺序执行，（时间函数）

#### 12.7 构造Promise

语法：`new Promise()`，构造一个`Promise`对象

接收参数：

1. `resolve`，接收正常录入的数据

2. `reject`，接收错误信息，内部内容建议创建一个`new Error()`对象，并把错误信息放入内部

直接使用参数

1. `Promise.resolve()`，生成数据对象

2. `Promise.reject()`，生成错误对象

具体实例：

```js
// 写入一个回调函数
// 回调函数内的内容属于微任务，会优先进行
const lotteryPromiseAsy = new Promise(function(resolve,reject){
    console.log('Lotter draw is happening 💟')

    setTimeout(function () {
        if(Math.random() >= 0.5){
            resolve('You Win 💗')
        }else{
            reject(new Error('You lost your money 💔'))
        }
    },2000)

})
```

#### 挑战二 异步读取图片

代码如下:

```js
///////////////////////////////////////
// Coding Challenge #2

/!*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*!/

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}


/!* self Method
let img = document.createElement('img')
const createImage = function (imgPath){
    return new Promise((resolve,reject) => {
        resolve(imgPath)
        reject(new Error('not found imgPath 😯'))
    })
}

wait(2)
    .then(()=>{
        createImage('./img/img-1.jpg')
            .then(response => {
                img.src = response
                image.append(img)
            })
            .catch(error => console.log(error))
        return wait(2)
    })
    .then(()=>{
                img.src = ''
        return wait(2)
    })
    .then(()=>{
        createImage('./img/img-2.jpg')
            .then(response => {
                img.src = response
                image.append(img)
            })
            .catch(error => console.log(error))
        return wait(2)
    })
    .then(()=>{
        img.src = ''
        return wait(2)
    })
    .then(()=>{
        createImage('./img/img-3.jpg')
            .then(response => {
                img.src = response
                image.append(img)
            })
            .catch(error => console.log(error))
        return wait(2)
    })
*!/

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img)
            resolve(img);
        })

        img.addEventListener('error', function () {
            reject(new Error('Image not found'))
        })
    })
}

let currentImg;
createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img
        console.log('Image 1 loaded');
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none'
        return createImage('img/img-2.jpg')
    })
    .then(img=>{
        currentImg = img
        console.log('Image 2 loaded');
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none'
        return createImage('img/img-3.jpg')
    })
    .then(img=>{
        currentImg = img
        console.log('Image 3 loaded');
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none'
    })
    .catch(error => console.error(error))
```

#### 12.8 同步请求(async)

针对于发起请求，并返回`Promise`对象的函数

例如：`fetch`、`new Promise()`、`navigator`获取当前地理位置

对外部声明`async fucntion(){}`，则函数被声明为同步函数

对内部请求声明`await 请求`，则直接返回该请求的`resolve`结果，并在请求结果获得之前，阻塞下面的代码运行，**等同于在运行同步请求**

示例代码：

```js
// 示例
const textData = await new Promise(function (resolve, reject){
        resolve('abcdefg')
    })

const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

const data = await response.json()
```

#### 12.9 捕获错误(try catch)

在使用`await`声明的情况下，将函数块包裹起来，能够监测函数作用域内的所有`await`请求，并把错误信息给予`catch`下的参数变量`error`

示例：

```js
const whereAmI = async function (country) {
    try {
        const textData = await new Promise(function (resolve, reject) {
            resolve('abcdefg')
        })
        console.log(textData)

        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await response.json()
        console.log(data)
        renderCountry(data[0]) 

    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}
```

#### 12.10 Promise综合

##### 1. 时间损耗

请求时间消费，同步请求会阻塞，导致时间分配

使用`Promise.all(Array)`，放入所有请求，使请求同时发生，产生时间优化

案例

```js
const get3Countries = async function(c1,c2,c3){
    try{
        // 单线程运行，每个请求消耗0.5秒
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        // console.log([...data1.capital,...data2.capital,...data3.capital])

        // 多线程运行，所有的请求在0.5秒内进行
        let data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        ])
        data = data.flat().map(item=>item.capital).flat()
        console.log(data)


    }catch (error) {
        console.error(error)
    }

}

get3Countries('china','france','canada')
```

##### 2. 请求结果

| 请求方式                     | 请求说明                         |
| ------------------------ | ---------------------------- |
| `Promise.race([])`       | 获取数组中请求最快完成的响应结果             |
| `Promise.all([])`        | 同时运行所有请求，并返回最终的响应结果，遇到错误直接停止 |
| `Promise.allSettled([])` | 同时运行所有请求，并返回最终的响应结果，无视错误     |
| `Promise.any([])`        | 获取数组中请求响应第一个成功的结果            |

示例：

```js
Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/india`),
    timeout(0.4)
])
    .then(response => console.log(response[0].capital))
    .catch(error => console.error(error))

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success double'),
])
    .then(response => console.log(response))

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success double'),
])
    .then(response => console.log(response))
    .catch(error => console.error(error))

Promise.any([
    Promise.reject('Error'),
    Promise.resolve('Success double'),
    Promise.resolve('Success'),
])
    .then(response => console.log(response))
    .catch(error => console.error(error))
```

#### 挑战三 同步图片加载

代码如下:

```js
///////////////////////////////////////
// Coding Challenge #3

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img)
            resolve(img);
        })

        img.addEventListener('error', function () {
            reject(new Error('Image not found'))
        })
    })
}

// part 1

let currentImg;
const loadNPause = async () => {
    try {
        await wait(2)
        currentImg = await createImage('img/img-1.jpg')

        await wait(2)
        currentImg.style.display = 'none'
        await wait(2)
        currentImg = await createImage('img/img-2.jpg')

        await wait(2)
        currentImg.style.display = 'none'
        await wait(2)
        currentImg = await createImage('img/img-3.jpg')
    } catch (error) {
        console.log(error)
    }
}

// loadNPause()

// part2
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']

const loadAll = async function(imgArr){
    try {
        let imgs = imgArr.map(async (item) => await createImage(item))
        console.log(imgs)

        let imgsEl = await Promise.all(imgs)
        console.log(imgsEl)

        imgsEl.forEach(item => item.classList.add('parallel'))

    } catch (error) {
        console.log(error)
    }
}

loadAll(imgArr)
```