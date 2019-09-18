// Array containing the first set of tags
const topics = ["pulp fiction", "kill bill", "snatch"];

// On load run click function
// window.onload = function(){
//     renderButtons();
//     clearFunction;
// };
// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#tagsDiv").empty();


    // for loop to create a new tag for each element inside the topic array
    for (let i = 0; i < topics.length; i++) {
        //New button for each tag
        let tag = $("<button>");
        // Write each element from array inside button
        tag.html(topics[i]);
        // Append tags to lead class
        $("#tagsDiv").append(tag);
        //give each tad id= tag
        tag.addClass("tag");
        tag.attr("data-tag", topics[i])
    };

    // Tags event listener
    $(".tag").on("click", function () {
        let gifName = $(this).attr("data-tag");
        console.log("Ive been clicked!!!!")
        //API URL to get GIFS
        const giphyURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gifName + "&api_key=MhFbYclkyHkjesSDKdoZEcRv0Sb9oNkn&limit=10";
        console.log(giphyURL);
        //AJAX request
        $.ajax({
            url: giphyURL,
            method: "GET"
        })

            .then(function (response) {
                $("#gifs").empty("");
                console.log(giphyURL);

                console.log(response);
                // Variable to store AJAX request
                let results = response.data;
                for (let i = 0; i < results.length; i++) {
                    // Creating and storing a div tag
                    var gifDiv = $("<div>");

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    // Creating and storing an image tag
                    var gifImage = $("<img>");
                    // Setting the src attribute of the image to a property pulled off the result item
                    gifImage.attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("gif")
                    // Appending the paragraph and image tag to the animalDiv
                    gifDiv.append(p);
                    gifDiv.append(gifImage);

                    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                    $("#gifs").append(gifDiv);

                };
                $(".gif").on("click", function () {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });

            });

    });

}
// This function handles events where one button is clicked
$("#add").on("click", function (event) {
    $("#tagsDiv").empty();
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    let newTag = $("#search").val().trim();
    console.log(newTag);
    // Adding tag from the textbox to our array
    topics.push(newTag);

    // Calling renderButtons
    renderButtons();

});




const clearFunction = $("#clear").on("click", function () {
    renderButtons();
    topics.pop();

    console.log("ive been clicked!")
});



// Calling the renderButtons function to display the intial buttons
renderButtons();
clearFunction;









































































































// window.onload = function(){

// };

