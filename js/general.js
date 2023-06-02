const menuChoices = document.querySelector(".menu-choices");

menuButton.onclick = function () {
  searchBar.classList.remove("show");
  menuChoices.classList.toggle("show");
};
