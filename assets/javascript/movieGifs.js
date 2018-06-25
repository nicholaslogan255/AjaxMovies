// $(".gif").on("click", function() {


//     var thisGif = $(this);


//     if(thisGif.attr("data-state") == "still"){

//       thisGif.attr("data-state","animate");
//       thisGif.attr("src", thisGif.attr("data-animate"));

//     }
//     else{
//       thisGif.attr("data-state","still");
//       thisGif.attr("src", thisGif.attr("data-still"));

//     }

// }

$(document).ready(function () {

    // Here we create the on click event that gets the user"s pick
    // $(".container").on("click", ".btn-choice", function() {

    console.log("Script Running");

    // when the make gifs buttons are clicked
    $(document).on("click",".make-gifs", function () {


        // create URL for the query
        var movie = $(this).attr("data-movie");
        var results = 12;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=dc6zaTOxFJmzC&limit="+results;


        // make ajax query
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) { // after we get a response..

                console.log(response);

                // store 
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div class='item'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    // get gif from from results array
                    var gif = $("<img>");
                    gif.attr("src", results[i].images.fixed_height.url);

                    // todo add data-state attr

                    // todo add data-animate

                    // todo add data still

                    gifDiv.prepend(p);
                    gifDiv.prepend(gif);

                    $("#gifs").prepend(gifDiv);
                }
            });
    });


    //  On Click event associated with the add-movie-button button
    $("#add-movie-button").on("click", function (event) {
        // prevent form from submitting
        event.preventDefault();

        console.log("Trying to add movie button");

        // create button
        var newButton = $("<button>");

        // add attributes
        newButton.addClass("make-gifs");
        newButton.attr("data-movie",$("#movie-input").val());

        // add text
        newButton.text($("#movie-input").val());

        // clear input field
        $("#movie-input").val("");

        // add button to page
        $("#buttons").append(newButton);





    
    });








});


// // Generic function for displaying the movieInfo
// $(document).on("click", ".movie", displayMovieInfo())