const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//url
const url =
  "https://b7ficnxh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20_id%3D%3D%22" +
  id +
  "%22%5D%5B0%5D";
async function getProject() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  showProject(result.result);
}
function showProject(project) {}
getProject();
