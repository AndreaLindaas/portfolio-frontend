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
const buttons = document.querySelector(".buttons");

async function getProject() {
  const response = await fetch(url);
  const result = await response.json();

  showProject(result.result);
}
function showProject(project) {
  console.log("fdff", project);
  title.innerHTML = project.title;
  releaseDate.innerHTML = `Lansert ${project.releaseDate}`;
  if (project.isSchoolProject == true) {
    schoolProject.innerHTML = `| Skoleprosjekt`;
  } else {
    schoolProject.innerHTML = `| Freelance`;
  }

  description.innerHTML = project.description;

  for (let i = 0; i < project.images.length; i++) {
    images.innerHTML += `<img src="${createImageUrl(
      project.images[i].asset._ref
    )}?w=800"/>`;
  }
  technicalDescription.innerHTML = project.technicalDescription;

  if (project.productionUrl) {
    buttons.innerHTML = `<a href="${project.productionUrl}" target="_blank" class="button">Besøk ${project.title}</a>`;
  }
  if (project.githubUrl) {
    buttons.innerHTML += `<a href="${project.githubUrl}" target="_blank" class="button">GitHub</a>`;
  }
}
getProject();
