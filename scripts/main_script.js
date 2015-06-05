/**
 * 
 * @param page
 * @param section
 * Loads a page in a div
 */
$(document).ready(function() {
	$("#main").load("main.html")
});

$("#home").click( function() {
	$("#main").load("main.html")
});

$("#research").click( function() {
	$("#main").load("research.html")
});

$("#paintings").click( function() {
	$("#main").load("painting.html")
});

$("#music").click( function() {
	$("#main").load("music.html")
});

$("#geek").click( function() {
	$("#main").load("geek.html")
});

$("#reading").click( function() {
	$("#main").load("reading.html")
});

$("#contact").click( function() {
	$("#main").load("contact.html")
});

function loadPage(page, section) {
	var req;
	if (window.XMLHttpRequest) // Object of the current windows
	{
		req = new XMLHttpRequest(); // Firefox, Safari, ...
	} else if (window.ActiveXObject) // ActiveX version
	{
		req = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		alert("Your browser does not support AJAX!");
	}

	req.open('GET', page, false);
	req.send(null);
	document.getElementById(section).innerHTML = req.responseText;
}

/**
 * 
 * @param imagename
 * @param newsrc
 * Rollover image
 */
function rollover(imagename, newsrc) {
	document.images[imagename].src = newsrc
}
