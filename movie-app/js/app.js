
var searchInput = document.body.querySelector('.search');
var itemWrapper = document.body.querySelector('main');

function displayMatches(matches){
    itemWrapper.innerHTML = '';
    //removes p tag on the page when search is used

  for(var matchObj of matches){
    itemWrapper.insertAdjacentHTML('beforeend', `
    <div class="movie-item" style="background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${matchObj.image_url})">
        <h3>${matchObj.title}</h3>
        <p>${matchObj.description}</p>
        <a href="${matchObj.imdb_url}"target= "_blank">View More Details</a>
    </div>`
    //target blank loads url in a new tab instead of changing the current page
    );
  }

}

function getMovieData(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.value.trim().toLowerCase(); //target input value
    //trim() removes white space b4 & after string input

    if(keyCode === 13 && searchText){
        //if keycode is 13 and search is true run code

        var matches = [];

        for(var movie of movieData){
            // movie refers to every object and its info in the array
            if(movie.title.toLocaleLowerCase().includes(searchText)){
            //.lowercase allows removes case sensitivity .includes() allows partial search "die" instead of die hard
            matches.push(movie);
            }
        }

        fetch('https://www.omdbapi.com/?apikey=84f848a9&t=drive');

        displayMatches(matches);


    }
}


//initialising function starts when page loads
// event listener first then create the func above it
//second argument in eventListener must be a call-bk func
function init(){
searchInput.addEventListener('keydown', getMovieData )
}

init();
//init NEEDS to be called like this ^ otherwise the codes above will not run

// Get html elements
// Get the input's value on enter key press
// Grab data related to user's search
// Inject the movie item into the DOM, based on user's search
















/*
<div class="movie-item">
<h3>Movie Title</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<a href="#">View Details</a>
</div>
*/