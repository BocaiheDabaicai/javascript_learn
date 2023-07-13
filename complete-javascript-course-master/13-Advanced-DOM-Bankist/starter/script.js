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


/* 样式、属性、类对象
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
*/



const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(event){

  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  console.log(window.pageXOffset,window.pageYOffset)

  // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset)

  // window.scrollTo({
  //   left:s1coords.left + window.pageXOffset,
  //   top:s1coords.top + window.pageYOffset,
  //   behavior:'smooth'
  // })

  section1.scrollIntoView({behavior:'smooth'})
})

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert(`监听事件 mouseenter 触发`);

  h1.removeEventListener('mouseenter',alertH1);
}

h1.addEventListener('mouseenter',alertH1);





















