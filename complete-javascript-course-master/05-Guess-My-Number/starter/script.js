'use strict';

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "😃correct number!";
//
// document.querySelector(".number").textContent = 16;
// document.querySelector(".score").textContent = 15;
//
// document.querySelector(".guess").value = 5;
// console.log(document.querySelector(".guess").value);

let number = Math.trunc(Math.random()*20 + 1);
console.log("number: ",number);

document.querySelector(".check").addEventListener("click",function(){
    let guess = document.querySelector(".guess");
    let score = document.querySelector(".score");
    let message = document.querySelector(".message");
    let Topnumber = document.querySelector(".number");
    let highscore = document.querySelector(".highscore");
    let check = document.querySelector(".check");


    if (Number(score.textContent) >= 1) {
        if (!guess.value) {
            message.textContent = "😓 no Number."
        } else {
            if (Number(guess.value) > number) {
                score.textContent = Number(score.textContent) - 1;
                message.textContent = "📈 too high.";
            } else if (Number(guess.value) < number) {
                score.textContent = Number(score.textContent) - 1;
                message.textContent = "📉 too low.";
            } else {
                message.textContent = "🎉correct number!";
                if (highscore.textContent === "0") {
                    highscore.textContent = score.textContent;
                } else if (highscore.textContent < score.textContent)
                    highscore.textContent = score.textContent;
                Topnumber.textContent = guess.value;
                check.disabled = true;
                document.body.style.backgroundColor = "#60b347";
            }
        }
    }else{
        score.textContent = 0;
        message.textContent = "🌺 you failed.";
        check.disabled = true;
    }
})

document.querySelector(".again").addEventListener("click",function(){
    number = Math.trunc(Math.random()*20 + 1);
    console.log(number);
    document.querySelector(".score").textContent = 7;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".check").disabled = false;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.body.style.backgroundColor = "#222";
})