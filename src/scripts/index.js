import jump from 'jump.js';
import { elements } from './base';
import '../styles/main.scss';


const { 
  anchorList, 
  body, 
  hamburger, 
  hamburgerBox,
  header,
  mainNav,
  sidebar,
  sideNavLinks } = elements;

const sideNavCurLinks = sideNavLinks.filter(({ classList })=> classList.contains('sidenav__link--current'));

//BURGER TOGGLE STYLES
const burgerStylesToggle = () => {
  hamburger.forEach(({ classList })=>classList.toggle(`${classList[1]}-active`));
  hamburgerBox.classList.toggle('hamburger-box--fixed');
  sidebar.classList.toggle('sidebar--active');
  mainNav.classList.toggle('nav--hide');
  header.classList.toggle('header--fixed');
  body.classList.toggle('u-hide-scroll');
}

//HAMBURGER MENU TOGGLE 
hamburgerBox.addEventListener('click', burgerStylesToggle);


//SIDENAV FUNCTIONALITY
const preToggle = (link) => {
  link.classList.toggle('sidenav__link--selected');
  link.firstElementChild.classList.toggle('sidenav__line');
}

const toggle = (link) => {
  preToggle(link);
  sideNavCurLinks.forEach(curLink=>preToggle(curLink));
}

sideNavLinks
  .filter(({ classList })=> !classList.contains('.sidenav__link--current'))
  .forEach(link=>{
    link.addEventListener('mouseenter', ()=>toggle(link));
    link.addEventListener('mouseleave', ()=>toggle(link));
  });

// SMOOTH SCROLL WITH JUMP.JS
Array.from(anchorList).forEach((a)=>{
  a.addEventListener('click',()=>{
    if(a.classList.contains('sidebar__link')) {
      burgerStylesToggle();
    } else { 
      jump(a.hash, {duration: 800}); 
    }
  })
})



