'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const renderCountry = function (data,className='') {
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
    countriesContainer.insertAdjacentText('beforeend',msq)
    countriesContainer.style.opacity = 1
}

const getCountryAndNeighbourData = function(country) {
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












