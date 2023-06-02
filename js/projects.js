const url =
  "https://b7ficnxh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D";

const workHtml = document.querySelector(".work");

async function getWork() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  showWork(result.result);
}

function showWork(workArray) {
  for (let i = 0; i < workArray.length; i++) {
    const work = `<li><a href="project.html?id=${workArray[i]._id}"><div>${workArray[i].title}</div></a></li>`;
    workHtml.innerHTML += work;
  }
}
getWork();
