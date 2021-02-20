"use strict";
// make navbar transparent when it is on the top
const navBar = document.querySelector("#navbar");
const navBarHeight = navbar.getBoundingClientRect().height;
// navBar height 가져오기
function showNavBar() {
  window.addEventListener("scroll", () => {
    console.log(navBarHeight, window.scrollY);
    if (navBarHeight < window.scrollY) {
      navBar.classList.add("navbar--dark");
    } else {
      navBar.classList.remove("navbar--dark");
    }
  });
}

function init() {
  showNavBar();
}

init();
