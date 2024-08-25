document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".slider-nav button");
  const slides = document.querySelectorAll(".slider img");

  navButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      slides[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
});
