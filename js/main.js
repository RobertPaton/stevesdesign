// JavaScript Document
var listItems, imageBanner, tagLine;
function init () {
	//empty placeholder function
	//reference to css selectors
	tagLine = document.querySelector("h1");
	console.log("tagLine");
	
	console.log("init fired");
	imageBanner = document.querySelector("#galleryImages");
	listItems = document.querySelectorAll("#galleryList li");
	
	console.log("listItems");
	
	setUpListItems();
}


function setUpListItems() {
	var offset=566;
	// use for loop to cycle through a collection of item sand apply fuinality to each one.
	for(i=0; i<listItems.length; i++) {
		listItems[i].addEventListener("click", fireMove, false);
	}
	
	function fireMove(e) {
		moveBanner(e.target.parentNode.id);
	}
	
	function moveBanner (howMuch) {
		TweenMax.to(imageBanner, .7, {right:offset*howMuch});
	}
}

window.addEventListener("load", init, false);