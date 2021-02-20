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

const Home = document.querySelector("#home");
const About = document.querySelector("#about");
const Skills = document.querySelector("#skills");
const Work = document.querySelector("#work");
const Testimonials = document.querySelector("#testimonials");
const Contact = document.querySelector("#contact");

function BtnScrollIntoView(event) {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null || link === undefined) {
    return;
  }
  target.classList.add("active");
  console.log(link);
  let scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

function init() {
  showNavBar();
  navbarMenu.addEventListener("click", BtnScrollIntoView);
}

init();
