export const elements = {
  anchorList: Array.from(document.querySelectorAll('a')),
  body: document.getElementsByTagName('body')[0],
  hamburger: Array.from(document.querySelectorAll('.hamburger')),
  hamburgerBox: document.querySelector('.hamburger-box'),
  header: document.querySelector('.header'),
  mainNav: document.querySelector('.nav'),
  sidebar: document.querySelector('.sidebar'),
  sideNavLinks: Array.from(document.querySelectorAll('.sidenav__link'))
}