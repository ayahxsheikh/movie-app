
var searchInput = $('.search');
var itemWrapper = $('main');

function displayMatches(matches) {
    itemWrapper.html('');
    
    if(!matches){
      return itemWrapper.html('<p class="not-searched">No results found.</p>') 
    }
        for (var matchObj of matches) {
            itemWrapper.append( `
            <div class="movie-item" style="background: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${matchObj.Poster})">
            <h3>${matchObj.Title}</h3>
            <p>Release Year:${matchObj.Year}</p>
            <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View More Details</a>
            </div>`
            );
        }

}

function getMovieData(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.val().trim(); 

    if(keyCode === 13 && searchText){
    //$.get() works similar to fetch
       $.get(`https://www.omdbapi.com/?apikey=84f848a9&s=${searchText}`)
       .then(function (data) {
       displayMatches(data.Search);

    });
}
}


function init(){
searchInput.keydown(getMovieData )
}

init();
















/*
<div class="movie-item">
<h3>Movie Title</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<a href="#">View Details</a>
</div>
*/