// DOM variables

var  input = document.querySelector("#collect");
var  basket = document.querySelector(".archive");
var  hook = document.querySelector("button");
var  alert = document.querySelector(".message");

// Adding event to the Add Label button

hook.addEventListener("click", autoLabel);
var array = [];


// Array of messages

	var messages = {
				invalid: "Please enter a value!",
				hint: "Try entering words that start with vowels and see how the labels are displayed.",
				info: "It also makes sure that empty spaces are not submitted"
				};

	// Hide hints
	function hideInfo(){
		setTimeout(hideAlert, 2500);

		function hideAlert(){
			alert.style.top = "10px";
			// Give the alert a little stretch effect before leaving the viewport
			setTimeout(animateAlert, 200)
			function animateAlert(){
				alert.style.top = "-200px";
			}
		}
	};


	// Waring display
	function showAlert(messageToShow){
		alert.innerText = messageToShow;
		alert.style.top = "0px";
		hideInfo();
	}


// Main function to do the labels

function autoLabel(){

	// Variables for processing arrays

	let trimmed = input.value.trim();
	let processed = trimmed.split(".");
	array.push(processed);
	var text;
	var label = document.createElement("span");
	var form = document.querySelector("form");
	var inputValue = input.value;

	// Preventing reloading of page
		form.addEventListener("submit", function(event){
		event.preventDefault()
	})








	// Returning the value entered to be the text of the label created
	for (var i = 0; i < array.length; i++) {
		label;
		label.innerText = array[i];
	}

	// Making sure empty spaces aren't submitted
	if (inputValue.trim() == "") {
		showAlert(messages.invalid);
	}else{
		if (label.innerText[0].toLowerCase() == "a" ) {
			label.style.background = "green";
		}
		else if (label.innerText[0].toLowerCase() == "e" ) {
			label.style.background = "red";
		}
		else if (label.innerText[0].toLowerCase() == "i" ) {
			label.style.background = "blue";
		}
		else if (label.innerText[0].toLowerCase() == "o" ) {
			label.style.background = "red";
		}
		else if (label.innerText[0].toLowerCase() == "u" ) {
			label.style.background = "#254412";
		}
		else{
			basket.appendChild(label);
		}
		basket.appendChild(label);
	}
	input.value = "";

};

