const api_url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ce1ae4c31f95d8ef09f1a50a37c94e";
const img_path = "https://image.tmdb.org/t/p/w1280/";
const appContainer = document.querySelector(".app");
const overviewClick = document.querySelectorAll(".app");
const informationDiv = document.querySelectorAll(".information");
const textInfo = document.querySelector(".infos");


const apiData = fetch(api_url)
  .then((response) => response.json())
  .then((data) => {
    let actualData = data.results;

    for (let i = 0; i < actualData.length; i++) {
      const element = actualData[i];
      //   console.log(element);

      const newDiv = document.createElement("div");

      newDiv.innerHTML = `
      <div class='div_img'>
      <img class = "img_div" src = '${img_path + element.poster_path}' />
      <div class = 'information'>
      <p class='info'>More info</p>
      <p class='infos'>${actualData[i].overview}</p>
      </div>
      </div>
      <h3 class="title" >${actualData[i].title}</h3>
      `;
      appContainer.appendChild(newDiv);
    }
  });


  //not working yet
informationDiv.forEach((info) => {
  info.addEventListener("click", function (e) {
    console.log('clicked');
  });
});

// infoMovie.forEach((info) => {
//   info.addEventListener("click", function (e) {
//     const targetInfo = e.target;
//     targetInfo.style.color = "red";
//   });
// });

// const showInfo = blabla.forEach((mm) => {
//   mm.addEventListener("click", function (e) {
//     e.preventDefault();
//     blabla.classlist.remove('hidden')
//   });
// });

//to fix--i want to listen the click in the picture

// overviewClick.forEach((movie) => {
//   movie.addEventListener("click", function (e) {
//     e.preventDefault();
//     mdl.style.display = "block";
//   });
// });
