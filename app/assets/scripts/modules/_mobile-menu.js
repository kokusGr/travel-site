'use strict';
var mobileMenu = function() {
  
  var menu = document.getElementsByClassName('site-header__menu-content')[0];
  var menuIcon = document.getElementsByClassName('site-header__menu-icon');
  var siteHeader = document.getElementsByClassName('site-header')[0];
  
  var init = function () {
    events();
  };
  
  var events = function () {
    for(let i = 0; i < menuIcon.length; i++) {
      menuIcon[i].addEventListener('click', toggleMenu);
    }    
  };
  
  var toggleMenu = function () {
    menu.classList.toggle('site-header__menu-content--is-visible');
    siteHeader.classList.toggle('site-header--blue-overlay');
    
    for(let i=0; i < menuIcon.length; i++) {
      menuIcon[i].classList.toggle('site-header__menu-icon--close-x');
    }
  };
  
  return {
    init: init
  };
};


module.exports = mobileMenu();