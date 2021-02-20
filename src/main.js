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
const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", () => {
  console.log("hi");
  scrollIntoView("#home");
});
// show "arrow up" button when scrolling down
document.addEventListener("scroll", () => {
  if (window.scrollY > HomeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

function fadeOutHome() {
  Home.style.opacity = 1 - window.scrollY / HomeHeight;
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      let type = project.dataset.type;
      if (filter === "*" || type === filter) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function init() {
  showNavBar();
  navbarMenu.addEventListener("click", BtnScrollIntoView);
  window.addEventListener("scroll", fadeOutHome);
}

init();
