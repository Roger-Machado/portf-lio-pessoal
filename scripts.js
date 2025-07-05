window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav-bar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document
  .querySelector(".arrow-down-timeline")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#time-line-projects");
    const offset = -100;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", function () {
  if (window.innerWidth <= 768) {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0"; 
    } else {
      navbar.style.top = "-70px"; 
    }

    prevScrollPos = currentScrollPos;
  } else {
    navbar.style.top = "0"; 
  }
});
