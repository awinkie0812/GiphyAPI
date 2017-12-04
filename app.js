var office = ["Michael Scott", "Dwight Schrute", "Jim Halpert", "Creed Bratton", "Stanley Hudson" ];
$("#buttons").append(office);
var authKey
function displayGif() {
	$('button').on("click", function()) {

	var character = $(this).atrr("data-name");
	// var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + character + "&api_key=dc6zaTOxFJmzC&limit=5";
	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + character;


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response.data;

		for (var i = 0; i< results.length; i++) {
			var gifDiv = $("<div class = 'item'>")
			var personImage = $("<img>");
			personImage.atrr("src", results[i].images.fixed_height.url);

			gifDiv.prepend(personImage);
			$("#gifs-appear-here").prepend(gifDiv);
		}
		
	});
//another way to do it 
// response.data.map(result=>$('#gifs-appear-here').prepend(`
// 	<div class= "item">
// 		<img src="${result.images.fixed_height.url}"/>
// 		<p>Rating: ${result.rating}</p>
// 	</div>
// 	`)
});



function renderButton() {

	$("#buttons-view").empty();

	for (var i =0; i < office.length; i++) {
		var a = $("<button>");
		a.addClass("character");
		a.atrr("data-name", office[i]);
		a.text(office[i]);
		$("#buttons-view").append(a);
	}

}

$("#add-character").on("click", function(event) {
	event.preventDefault();
	var character = $("#character-input").val().trim();
	office.push(character);
	renderButton();
});

$(document).on("click", ".character", displayGif);
renderButton();
