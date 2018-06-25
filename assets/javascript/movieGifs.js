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


    $(document).on("click",".make-gifs", function () {



        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

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








});


// // Generic function for displaying the movieInfo
// $(document).on("click", ".movie", displayMovieInfo())