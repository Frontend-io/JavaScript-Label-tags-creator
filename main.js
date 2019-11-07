// DOM variables

var  form = document.querySelector("form");
var  input = document.querySelector("#collect");
var  container = document.querySelector(".archive");
var  submit = document.querySelector("button");
var  message = document.querySelector(".message");
// Adding event to the Add Label button


// Array to hold the labels entered for backend export
var labelsForExport = [];

// To manipulate the DOM
var labelsElements = [];

// Process the value from the input
function processInput(tag){
	let inputValue = tag.value;
	// Get rid of white space
	let trimmedTag = inputValue.trim();

	// Send the input to the export array
	labelsForExport.push(trimmedTag.toLowerCase());
	return trimmedTag
};

// Create the labels
function createTag(tag){
	// Create label Elements
	let div = document.createElement("div");
	let textNode = document.createElement("span");
	let deleteTag = document.createElement("span");

	// Set elements' properties
	div.className = "label";
	textNode.className = 'text';
	deleteTag.className = "delete-tag";

	textNode.innerText = tag;
	deleteTag.innerHTML = "&times;";
	// Append the elements inside the label
	div.appendChild(deleteTag);
	div.prepend(textNode);
	// Add a unique data-attribute to the label
	div.setAttribute('data-tag', tag);
	deleteTag.setAttribute('data-target-tag', tag);
	// Add to the labelsELement array
	labelsElements.push(div);
	// return created element
	return div;
}


// Create tag on button click 
function newTagInstance(){
	// Start a new instance of Making the tag
	let newTag =  processInput(input);
	let createdTag = createTag(newTag);

	// Append the tag before the input
	container.insertBefore(createdTag, input);
	// Reset/clear the input field
	input.value = "";
	
}

submit.addEventListener('click', ()=>{
	// Preventing reloading of page when submitting
		form.addEventListener("submit", (e)=>{
		e.preventDefault();
	});
	// Preventing submission of empty input and duplicate label
	if (input.value == ""  ) {
		message.innerText = "Please input a value!"
		message.classList.remove("hidden");
	}else if( labelsForExport.includes(input.value.toLowerCase()) ){
		message.classList.remove("hidden");
		message.innerText = "Label already exists!"
	}
	else{
		message.classList.add("hidden");
		newTagInstance();
	}
	setTimeout(()=>{message.classList.add("hidden")}, 2000)
});


// Delete the particular label when the delete icon on it is clicked
document.addEventListener("click", deleteTag)
function deleteTag(e){
	// Check if the click was on the right tag
	if (e.target.className == 'delete-tag' ) {
		let purgeTag = e.target.getAttribute('data-target-tag');
		// Loop through the array and match the selected label for deletion
		labelsElements.forEach((label)=>{
			if (label.getAttribute("data-tag") === purgeTag) {
				let index = labelsElements.indexOf(label);
				// Remove and update the array of labels
				labelsForExport.splice(index, 1);
				labelsElements.splice(index, 1);
				// Remove the label from the DOM
				container.removeChild(label);
			}
		})
	} 

}

