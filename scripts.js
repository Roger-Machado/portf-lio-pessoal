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
