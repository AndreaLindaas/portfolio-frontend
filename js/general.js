const menuButton = document.querySelector(".menu-button");
const menuChoices = document.querySelector(".menu-choices");

menuButton.onclick = function () {
  menuChoices.classList.toggle("show");
};

const baseUrl = "https://cdn.sanity.io/images/b7ficnxh/production/";

function createImageUrl(imageUrl) {
  let fixUrl = imageUrl.replace("image-", "").replace("-jpg", ".jpg");
  return baseUrl + fixUrl;
}
