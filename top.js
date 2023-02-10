const api_key = "api_key=02904aaa6140ad4e8e75cd0725d9b635"
const base_url = "https://api.themoviedb.org/3"
const  topRated = base_url + "/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&"+api_key

const image_url = "https://image.tmdb.org/t/p/w500"
const container2 = document.querySelector(".container-wrapper")

getTopRated(topRated)

function getTopRated(url2){
    fetch(url2).then(res => res.json()).then(data2 => {
        showTopRated(data2.results)
    }).catch((err) => {
        console.log('error', err)
    })
}

function showTopRated(data2){
    container2.innerHTML= ''
    
    data2.forEach(pops => {
        const {title, poster_path,release_date} = pops
        const movie2 = document.createElement("div")
        movie2.classList.add('container2')
        movie2.innerHTML = `
        <img src="${image_url+poster_path}"alt="${title}">
        <div class="movie-title">
           <h3>${title}</h3>
        </div>
        <div class="movie-info">
            <h3 class="date">${release_date}</h3>
         </div>
        `

        container2.appendChild(movie2)
    });
}
