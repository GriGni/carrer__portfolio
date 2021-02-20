"use strict";
// make navbar transparent when it is on the top
const navBar = document.querySelector("#navbar");
// navBar height 가져오기
const navBarHeight = navbar.getBoundingClientRect().height;

function showNavBar() {
  window.addEventListener("scroll", () => {
    // console.log(navBarHeight, window.scrollY);
    if (navBarHeight < window.scrollY) {
      navBar.classList.add("navbar--dark");
    } else {
      navBar.classList.remove("navbar--dark");
    }
  });
}

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

function BtnScrollIntoView(event) {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null || link === undefined) {
    return;
  }
  scrollIntoView(link);
}

//handle click on "contact me" button on home

const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// make home slowly fade to transparent as the window scrolls down

const Home = document.querySelector(".home__container");
const HomeHeight = Home.getBoundingClientRect().height;

function fadeOutHome() {
  Home.style.opacity = 1 - window.scrollY / HomeHeight;
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

function init() {
  showNavBar();
  navbarMenu.addEventListener("click", BtnScrollIntoView);
  window.addEventListener("scroll", fadeOutHome);
}

init();
