/*=============== SHOW MENU ===============*/
let navToggle = document.querySelector(".nav-toggle"),
  navMenu = document.querySelector(".nav-menu"),
  navClose = document.querySelector(".nav-close"),
  navLink = document.querySelectorAll(".nav-link");

const showNav = () => {
  navMenu.classList.add("open-nav");
};

navToggle.addEventListener("click", showNav);

/*=============== REMOVE MENU MOBILE ===============*/
const closeNav = () => {
  navMenu.classList.remove("open-nav");
};

const handleLink = () => {
  navMenu.classList.remove("open-nav");
};
navClose.addEventListener("click", closeNav);
navLink.forEach((link) => {
  link.addEventListener("click", handleLink);
});

/*=============== ADD BLUR TO HEADER ===============*/
const blurNav = () => {
  let nav = document.querySelector(".header");

  this.scrollY > 120 ? nav.classList.add("blur") : nav.classList.remove("blur");
};
window.addEventListener("scroll", blurNav);
/*=============== SHOW SCROLL UP ===============*/
const handleScrollUp = () => {
  let scrollUp = document.querySelector(".scroll-up");

  this.scrollY > 500
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", handleScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const handleActiveLink = (e) => {
  let scrollY = this.scrollY;

  sections.forEach((section) => {
    let sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionA = document.querySelector(`.nav-menu a[href='#${sectionId}']`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionA.classList.add("active-link");
    } else {
      sectionA.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", handleActiveLink);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  // reset: true,
});

sr.reveal(`.home-data , .explore-data , .explore-user , .footer-container`);
sr.reveal(`.home-card`, { delay: "400", distance: "200px", interval: 200 });
sr.reveal(`.about-data , .join-img`, { origin: "right" });
sr.reveal(`.about-img , .join-data`, { origin: "left" });
sr.reveal(`.popular-card`, { interval: 200 });
