'use strict';

const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const buttonRoll = document.querySelector(".btn--roll");
const buttonNew = document.querySelector(".btn--new");
const buttonHold = document.querySelector(".btn--hold");

const players = document.querySelectorAll(".player");
let switchIndex = false;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

let currentScore = 0;

const changeActive = function(){
    switchIndex?currentScore1.textContent = 0:currentScore0.textContent = 0;
    players[0].classList.toggle("player--active");
    players[1].classList.toggle("player--active");
    switchIndex=!switchIndex;
    currentScore = 0;
}

const inspectChampion = function(index){
    if(Number(document.querySelector(`#score--${index}`).textContent)>=10) {
        players[index].classList.add("player--winner");
        buttonRoll.disabled = true;
        buttonHold.disabled = true;
        dice.classList.add("hidden");
    }else{
        changeActive();
    }
}

buttonRoll.addEventListener("click", function () {
    const randomRoll = Math.trunc(Math.random() * 6 + 1);

    dice.classList.remove("hidden");
    dice.src = `dice-${randomRoll}.png`;

    if(randomRoll !== 1){
        currentScore += randomRoll;
        // currentScore0.textContent = currentScore;
        switchIndex?currentScore1.textContent = currentScore:currentScore0.textContent = currentScore;
    }else{
        changeActive()
    }
})

buttonHold.addEventListener("click",function () {
    if (players[0].classList.contains("player--active")){
        score0.textContent = Number(score0.textContent) + currentScore;
        inspectChampion(0);
    }else{
        score1.textContent = Number(score1.textContent)+currentScore;
        inspectChampion(1);
    }
})

buttonNew.addEventListener("click",function(){
    for (let i = 0; i < players.length; i++) {
        document.querySelector(`#score--${i}`).textContent = 0;
        document.querySelector(`#current--${i}`).textContent = 0;
        players[i].classList.remove("player--winner");
    }
    buttonRoll.disabled = false;
    buttonHold.disabled = false;
    players[0].classList.add("player--active");
    players[1].classList.remove("player--active");
    switchIndex = false;
    currentScore = 0;
})