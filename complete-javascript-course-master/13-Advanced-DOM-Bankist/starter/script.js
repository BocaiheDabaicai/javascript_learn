'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
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

// tabbed  component
const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  tabs.forEach(t=>t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active')
  // console.log(clicked.dataset.tab)
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// 菜单隐藏动画

const handlerHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

// nav.addEventListener('mouseover',(e)=>handlerHover(e,0.5))
// nav.addEventListener('mouseout',(e)=>handlerHover(e,1))

nav.addEventListener('mouseover',handlerHover.bind(0.5))
nav.addEventListener('mouseout',handlerHover.bind(1))

// 粘性导航

// const initialCoords = section1.getBoundingClientRect()
// window.addEventListener('scroll',function () {
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

/* IntersectionObserver观察者实例对象
const obsCallback = function(entries,observer){
  entries.forEach(entry=>{
    console.log(entry)
  })
}

const obsOptions = {
  root:null,
  // threshold:0.1
  threshold:[0,0.2]
}
// 当前视口的顶端与观察元素的顶端、底端的位置差额和threshold值进行比较
const observer = new IntersectionObserver(obsCallback,obsOptions);
observer.observe(section1)
*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`
})
headerObserver.observe(header)

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

/* 冒泡、捕获、监听
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert(`监听事件 mouseenter 触发`);

  h1.removeEventListener('mouseenter',alertH1);
}

h1.addEventListener('mouseenter',alertH1);
*/
/* 事件委托：实现平滑跳转
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    })
  })
})

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault(); //阻止当前元素的默认事件触发

  if (e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})
*/


















