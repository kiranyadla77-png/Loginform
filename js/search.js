    let searchBox = document.getElementById("searchMovie");
let movies = document.querySelectorAll(".movie");

searchBox.addEventListener("keyup", function(){

    let searchValue = searchBox.value.toLowerCase();

    movies.forEach(function(movie){

        let title = movie.querySelector(".movieTitle").textContent.toLowerCase();

        if(title.includes(searchValue)){
            movie.style.display = "inline-block";
        }
        else{
            movie.style.display = "none";
        }

    });

});