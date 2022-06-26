const api_url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ce1ae4c31f95d8ef09f1a50a37c94e";
const img_path = "https://image.tmdb.org/t/p/w1280/";
const appContainer = document.querySelector(".app");
const overviewClick = document.querySelectorAll("img_div");

const apiData = fetch(api_url)
  .then((response) => response.json())
  .then((data) => {
    let actualData = data.results;

    for (let i = 0; i < actualData.length; i++) {
      const element = actualData[i];
      console.log(element);

      const newDiv = document.createElement("div");

      newDiv.innerHTML = `
        <img class = "img_div" src = '${img_path + element.poster_path}' />
        <h3 class="title" >${actualData[i].title}</h3>
        <p class="modal hidden">${actualData[i].overview}</p>
      `;
      appContainer.appendChild(newDiv);
    }
  });


  //to fix--i want to listen the click in the picture

overviewClick.forEach((photo) => {
  photo.addEventListener("click", function (e) {
    const photoTarget = e.target
    photoTarget.style.opacity = '0.5'
  });
});
