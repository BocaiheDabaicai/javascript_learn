'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// const image = document.querySelector('.images')
const imgContainer = document.querySelector('.images')
///////////////////////////////////////


const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 100000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.fifa}</p>
            <p class="country__row"><span>💰</span>${data.capital[0]}</p>
          </div>
        </article>
    `

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1
}

const renderError = function (msq) {
    countriesContainer.insertAdjacentText('beforeend', msq)
    countriesContainer.style.opacity = 1
}

const getCountryAndNeighbourData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send()
    request.addEventListener('load', function () {
        // console.log(this.responseText)
        const [data] = JSON.parse(this.responseText)
        console.log(data)
        renderCountry(data)

    })
}

/* API请求
getCountryAndNeighbourData('China')
// getCountryData('America')
// getCountryData('Canada')
getCountryAndNeighbourData('Germany')
*/

/* 回调地狱
setTimeout(()=>{
    console.log('第1秒触发')
    setTimeout(()=>{
        console.log('第2秒触发')
        setTimeout(()=>{
            console.log('第3秒触发')
            setTimeout(()=>{
                console.log('第4秒触发')
            },1000)
        },1000)
    },1000)
},1000)
*/

/* Fetch函数
const data = fetch(`https://restcountries.com/v3.1/name/china`)
console.log(data)
*/

/* Promise 实现
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function(response){
        console.log(response)
        return response.json()
    })
        .then(function (data) {
            console.log(data)
        })
}
const getCountryDataS = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response)=> response.json())
        .then( (data)=> renderCountry(data[0]))
}
// getCountryData('china')
getCountryDataS('china')
*/

/* 链式Promise
const getJSON = function(url,errorMsg = 'Something went wrong'){
    return fetch(url)
        .then(response => {
            if(!response.ok)
                throw new Error(`${errorMsg} (${response.status})`);
            return response.json()
        })
}

const getCountryData = function(country){
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
}


btn.addEventListener('click',function(){
    getCountryData('france')
})

getCountryData('asdasdas')
*/

/*
// 冗余写法
const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            console.log(response)

            if (!response.ok)
                throw new Error(`Country not found (${response.status})`)

            return  response.json()
        })
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
}
*/

/* 函数重构
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok)
                throw new Error(`${errorMsg} (${response.status})`)

            return response.json()
        })
}

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country not found')
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]

            if (!neighbour) return;

            return getJSON(`https://restcountries.com/v3.1/name/${neighbour}`,`neighbour not found`)
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(error => {
            console.error(`${error} 💥💥💥`)
            renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}


btn.addEventListener('click', function () {
    getCountryData('france')
})

getCountryData('asdasdas')
*/

/* 挑战一 地图API
///////////////////////////////////////
// Coding Challenge #1

/!*
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
*!/

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
*/

/* 事件循环
function getData(){
    console.log('get data')
}


console.log('Test start');

setTimeout(()=> console.log('0 sec timer'),0);
Promise.resolve('Resolved promise 1').then(res=>console.log(res))
Promise.resolve('Resolved promise 2').then(res=>{
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res)
})
setTimeout(getData,0)

console.log('Test end');
*/

/* 构造Promise对象
const lotteryPromise = new Promise(function(resolve,reject){
    if(Math.random() >= 0.5){
        resolve('You Win 💗')
    }else{
        reject('You lost your money 💔')
    }
})

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

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve,seconds * 1000)
    })
}

// lotteryPromise
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

// lotteryPromiseAsy
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

wait(1)
    .then(()=>{
        console.log('waited for 1 seconds');
        return wait(1)
    })
    .then(()=>{
        console.log('waited for 2 seconds');
        return wait(1)
    })
    .then(()=>{
        console.log('waited for 3 seconds');
        return wait(1)
    })
    .then(()=>console.log('waited for 4 seconds'))
*/

/* 获取地理位置封装为Promise
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

getPosition().then(pos => console.log(pos))
*/

/* 挑战二 异步读取图片
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
*/





