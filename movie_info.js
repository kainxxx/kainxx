const api_key = "02904aaa6140ad4e8e75cd0725d9b635"
const base_url = "https://api.themoviedb.org/3"

const movieInfo = `${base_url}/movie/${getMovieId()}?api_key=${api_key}`;

const image_url = "https://image.tmdb.org/t/p/w500"
const container = document.querySelector(".cast_Container")
const container1 = document.querySelector(".container-wrapper1")
const container2 = document.querySelector(".container-wrapper2")

// getMovieId(now_showing)

getMovieInfo(movieInfo);

function getMovieId (){
    const param = new URLSearchParams(window.location.search);
    return param.get("movie_id");
}

function getMovieInfo(url) {
    fetch(url).then(res => res.json()).then(data =>{
         console.log(data)
        showInfo(data)
    }).catch((err) => {
        console.log('error', err)  
    })
}

function showInfo(data){
    container.innerHTML= ''
    
    data.forEach(movie => {
        const {title, poster_path,release_date,tagline, backdrop_path,overview} = movie
        const movie1 = document.createElement("div")
        movie1.classList.add('container')
        movie1.innerHTML = `
        <img src="${image_url+backdrop_path}" alt="smiley" class="backdrop-image">
    <div class="movie-details flex">
        <div class="column-main titles">
            <img src="${image_url+poster_path}" alt="smiley" class="poster-image">
        </div>
        <div class="column-sidebar">
            <h1 class="tile centered">${title}</h1>
            <h3 class="tile centered">${tagline}</h3>
            <h4 class="tile centered"><strong>${release_date}</strong></h4>
            <p class="tile centered"><strong>${overview}</strong></p>
        </div>
    </div>
        <h1 class="movies_titles">Cast</h1>
    <div class="movies_posters">
        <figure class="movie-item">
            <img src="" alt="baby" class="movie-item__image">
            <figcaption class="movie-item__title"></figcaption>
        </figure>
    </div>
        `

        container.appendChild(movie1)
    });
}
