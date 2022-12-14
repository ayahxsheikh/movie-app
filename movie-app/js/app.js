
var searchInput = document.body.querySelector('.search');
var itemWrapper = document.body.querySelector('main');

function getMovieData(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.value; //target input value

    //needs a if statement to enure to grab value when pressed. not for every key enetered in the input box
    //also need to ensure they enter something
    //value for enter key is 13

    if(keyCode === 13 && searchText){
        //cond means: if the keycode is 13 and search is true 

    }
}


//initialising function starts when page loads
function init(){
// event listener first then create the func above it
//second argument in eventListener must be a call-bk func
searchInput.addEventListener('keydown', getMovieData )
}

init();

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