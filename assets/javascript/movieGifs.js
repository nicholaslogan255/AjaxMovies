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

    // when the make-gifs buttons are clicked
    $(document).on("click", ".make-gifs", function () {


        // create URL for the query
        var movie = $(this).attr("data-movie");
        var results = 12;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            movie + "&api_key=dc6zaTOxFJmzC&limit=" + results;


        // make ajax query
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) { // after we get a response..

                console.log(response); // log the JSON object to the console

                // store the gifs in an array
                var results = response.data;

                // for every gif...
                for (var i = 0; i < results.length; i++) {

                    // create a div for the item card
                    var gifDiv = $("<div class='item'>");

                    // get gif's rating from results array
                    var rating = results[i].rating;

                    // create p tag with the rating
                    var p = $("<p>").text("Rating: " + rating);

                    // get gif from from results array
                    var gif = $("<img>");
                    gif.attr("src", results[i].images.fixed_height_still.url);

                    gif.addClass("gif");

                    // todo add data-state attr
                    gif.attr("data-state", "still");

                    // todo add data-animate attr
                    gif.attr("data-animate", results[i].images.fixed_height.url);

                    // todo add data-still attr
                    gif.attr("data-still", results[i].images.fixed_height_still.url);


                    gifDiv.prepend(p); // add the p tag to the card
                    gifDiv.prepend(gif); // add the gif to the card

                    $("#gifs").prepend(gifDiv); // add card to page
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
        newButton.attr("data-movie", $("#movie-input").val());

        // add text
        newButton.text($("#movie-input").val());

        // clear input field
        $("#movie-input").val("");

        // add button to page
        $("#buttons").append(newButton);

    });

    // when the make-gifs buttons are clicked
    $(document).on("click", ".gif", function () {

        console.log("Gif Clicked");

        var thisGif = $(this);


        if (thisGif.attr("data-state") == "still") {
            console.log("Animating...");


            thisGif.attr("data-state", "animate");
            thisGif.attr("src", thisGif.attr("data-animate"));

        }
        else {

            console.log("freezing...");

            thisGif.attr("data-state", "still");
            thisGif.attr("src", thisGif.attr("data-still"));

        }




    });





}); // end document ready

