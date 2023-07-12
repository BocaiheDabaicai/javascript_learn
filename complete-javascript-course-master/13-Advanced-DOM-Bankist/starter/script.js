'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('.section'));


// console.log()
document.documentElement.style.setProperty('--color-primary','#c04c4c')

const imgA = document.querySelector('.nav__logo')
console.log(imgA.alt)
console.log(imgA.src)
console.log(imgA.designer)
console.log(imgA.getAttribute('designer'))
imgA.setAttribute('bank','huahuaBank')
console.log(imgA.getAttribute('bank'))
imgA.alt = 'hahahahah';
console.log(imgA.alt)












