import {TIMEOUT_SECOND} from "./config.js";

const timeout = function(second){
    return new Promise(function(_,reject){
        setTimeout(function(){
            reject(new Error(`Request took too long! Timeout after ${second} second`))
        },second*1000)
    })
}


export const getJSON = async function (url) {
    try {
        const response = await Promise.race([fetch(url),timeout(TIMEOUT_SECOND)])
        const data = await response.json()

        if(!response.ok) throw new Error(`${data.message} (${response.status})`)

        return data
    } catch (error) {
        throw error
    }
}

export const sendJSON = async function (url,uploadData) {
    try {
        const fetchPro = fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(uploadData)
        })

        const response = await Promise.race([fetch(url),timeout(TIMEOUT_SECOND)])
        const data = await response.json()

        if(!response.ok) throw new Error(`${data.message} (${response.status})`)

        return data
    } catch (error) {
        throw error
    }
}

export const getNumber = function(number){
    if(+number) return number
    let [num,denom] = number.split('/')

    return num/denom
}