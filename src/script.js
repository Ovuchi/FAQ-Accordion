"use script";
const buttons = document.querySelectorAll(".faq-btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".plus-or-minus");
    content.classList.toggle("hidden");

    if (content.classList.contains("hidden")) {
      icon.src = "../assets/images/icon-plus.svg";
    } else {
      icon.src = "../assets/images/icon-minus.svg";
    }
  });
});
