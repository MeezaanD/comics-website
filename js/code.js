// let movies = JSON.parse(localStorage.getItem('movies')) ?
// JSON.parse(localStorage.getItem('movies')) : [
//     {
//         id: 1,
//         movieName: "Thor: Love and Thunder",
//         studio: "Marvel",
//         image: "https://i.postimg.cc/02Qwjf3j/thor.jpg",
//     },
//     {
//         id: 2,
//         movieName: "Black Adam",
//         studio: "DC",
//         image: "https://i.postimg.cc/WzftgBK3/Black-Adam-S-DD-KA-TT-3000x3000-300dpi-EN.jpg",

//     },
//     {
//         id: 3,
//         movieName: "Black Panther: Wakanda Forever",
//         studio: "Marvel",
//         image: "https://i.postimg.cc/6p9cmG5n/bp.jpg",

//     },
   
// ];

// function displayMovies() {
//     let card = document.querySelector('#movies');
//     Object.keys(movies).forEach( (item)=> {
//         if(movies.length){
//             console.log((`${item}: ${movies[item]}`));
//             card.innerHTML +=
//             `
//             <div class="col" display:grid;grid-template-columns: (3,1);>
//                  <div class="card col-4 gap-5">
//                  <img src="${movies[item].image}" style="height: 30rem;width:100%" class="card-img-top" alt="...">
//                  <div class="card-body">
//                    <h5 class="card-title">${movies[item].movieName}</h5>
//                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                  </div>
//                  </div>
//             </div>
    

//             `
//         }
//     })
// } 
// displayMovies()

