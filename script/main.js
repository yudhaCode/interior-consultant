document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks[0].dataset.active = "true"; // Set the first item as active by default

  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.forEach((i) => (i.dataset.active = "false"));
      item.dataset.active = "true";
    });
  });
});

const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const navList = document.querySelector(".nav__list");

const toggleNav = () => {
  navList.classList.toggle("active");
  openIcon.style.display = navList.classList.contains("active")
    ? "none"
    : "block";
  closeIcon.style.display = navList.classList.contains("active")
    ? "block"
    : "none";
};

const mediaQuery = window.matchMedia("(max-width: 769px)");

const handleMediaQueryChange = (mediaQuery) => {
  if (mediaQuery.matches) {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    openIcon.addEventListener("click", toggleNav);
    closeIcon.addEventListener("click", toggleNav);
  } else {
    openIcon.style.display = "none";
    closeIcon.style.display = "none";
    openIcon.removeEventListener("click", toggleNav);
    closeIcon.removeEventListener("click", toggleNav);
    navList.classList.remove("active");
  }
};

mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery); // Initial check
