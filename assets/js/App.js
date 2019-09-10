// Array containing the first set of tags
const topics = ["pulp_fiction", "kill_bill", "snatch"];

// On load run click function
// window.onload = function(){

// };



// for loop to create a new tag for each element inside the topic array
for (let i = 0; i < topics.length; i++) {
    //New button for each tag
    let tag = $("<button>");
    // Write each element from array inside button
    tag.html(topics[i]);
    // Append tags to lead class
    $(".lead").append(tag);
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
                var animalDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.append(animalImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs").append(animalDiv);

                            };

                         });

                    });









































































































// window.onload = function(){

// };

