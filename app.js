const api_key = "api_key=02904aaa6140ad4e8e75cd0725d9b635"
const base_url = "https://api.themoviedb.org/3"

const now_showing = base_url + "/discover/movie?primary_release_date.gte=2021-07-11&primary_release_date.lte=2021-09-01&"+ api_key
const popular = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key
const topRated = base_url + "/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&"+api_key

const image_url = "https://image.tmdb.org/t/p/w500"
const container = document.querySelector(".container-wrapper")
const container1 = document.querySelector(".container-wrapper1")
const container2 = document.querySelector(".container-wrapper2")
  
getNowShowing(now_showing)
getPopular(popular)
getTopRated(topRated)

function getNowShowing(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results)
       showMovies(data.results)
    }).catch((err) => {
        console.log('error', err)
    })
}

function getPopular(url1){
    fetch(url1).then(res => res.json()).then(data1 => {
        showPopular(data1.results)
    }).catch((err) => {
        console.log('error', err)
    })
}

function getTopRated(url2){
    fetch(url2).then(res => res.json()).then(data2 => {
        console.log(data2.results)
        showTopRated(data2.results)
    }).catch((err) => {
        console.log('error', err)
    })
}


function showMovies(data){
    container.innerHTML= ''
    
    data.forEach(movie => {
        const {title, poster_path,release_date,id} = movie
        const movie1 = document.createElement("div")
        movie1.classList.add('container')
        movie1.innerHTML = `
        <a href="movie_info.html?movie_id=${id}">
        <img src="${image_url+poster_path}"alt="${title}">
        <div class="movie-title">
           <h3>${title}</h3>
        </div>
        <div class="movie-info">
            <h3 class="date">${release_date}</h3>
         </div>
        </a>
        `

        container.appendChild(movie1)
    });
}


function showPopular(data1){
    container1.innerHTML= ''
    
    data1.forEach(pops => {
        const {title, poster_path,release_date} = pops
        const movie2 = document.createElement("div")
        movie2.classList.add('container1')
        movie2.innerHTML = `
        <img src="${image_url+poster_path}"alt="${title}">
        <div class="movie-title">
           <h3>${title}</h3>
        </div>
        <div class="movie-info">
            <h3 class="date">${release_date}</h3>
         </div>
        `

        container1.appendChild(movie2)
    });
}


function showTopRated(data2) {
    container2.innerHTML= ''
    
    data2.forEach(tops => {
        const {title, poster_path,release_date} = tops
        const movies = document.createElement("div")
        movies.classList.add('container2')
        movies.innerHTML = `
        <img src="${image_url+poster_path}"alt="${title}">
        <div class="movie-title">
           <h3>${title}</h3>
        </div>
        <div class="movie-info">
            <h3 class="date">${release_date}</h3>
         </div>
        `

        container2.appendChild(movies)
} )
}

function getMovieId (){
    const param = new URLSearchParams(window.location.search)
    return param.get("movie_id")
}
