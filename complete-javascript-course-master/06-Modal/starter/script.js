'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const clickOpenListener = function () {
    // modal.classList.remove("hidden","...")
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const clickCloseListener = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", clickOpenListener);
}

btnCloseModal.addEventListener("click", clickCloseListener);
overlay.addEventListener("click", clickCloseListener);
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) clickCloseListener();
});