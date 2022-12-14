
var searchInput = document.body.querySelector('.search');
var itemWrapper = document.body.querySelector('main');

function getMovieData(event){
    var keyCode = event.keyCode;
    var searchText = searchInput.value.trim().toLowerCase(); //target input value
    //trim() removes white space b4 & after string input

    //needs a if statement to enure to grab value when pressed. not for every key enetered in the input box
    //also need to ensure they enter something
    //value for enter key is 13

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
        console.log(matches);


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