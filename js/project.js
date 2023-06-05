const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//url
const url =
  "https://b7ficnxh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20_id%3D%3D%22" +
  id +
  "%22%5D%5B0%5D";
const title = document.querySelector(".title");
const releaseDate = document.querySelector(".release-date");
const schoolProject = document.querySelector(".schoolproject");
const description = document.querySelector(".description");
const images = document.querySelector(".images");
const technicalDescription = document.querySelector(".technical-description");
const productionUrl = document.querySelector(".production-url");
const githubUrl = document.querySelector(".github-url");

async function getProject() {
  const response = await fetch(url);
  const result = await response.json();

  showProject(result.result);
}
function showProject(project) {
  console.log("fdff", project);
  title.innerHTML = project.title;
  releaseDate.innerHTML = project.releaseDate;
  schoolProject.innerHTML = project.isSchoolProject;
  description.innerHTML = project.description;

  for (let i = 0; i < project.images.length; i++) {
    images.innerHTML += project.images[i].asset._ref;
  }

  technicalDescription.innerHTML = project.technicalDescription;
  productionUrl.innerHTML = project.productionUrl;
  githubUrl.innerHTML = project.githubUrl;
}
getProject();
