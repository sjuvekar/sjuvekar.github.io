/**
 * 
 * @param page
 * @param section
 * Loads a page in a div
 */
 
$(document).ready(function() {
	$("#main").load("main.html");
	
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

});

function loadAds() {
    var infeed_placement = new AdsNative('KhVSjS_gskK3u73HGs3LqMX6n3jTros7k7V4nuEy');
    infeed_placement.fetchAd(function(status){
      if(status){
	     setTimeout (function() {didDisplay = infeed_placement.displayAd('an-infeed');}, 10);
	     if(!didDisplay)
		console.log('Ad could not be displayed. Most likely due to invalid element ID or double rendering of ad.');
	     else
	        console.log("Displayed ad");
	        
      }   
    });
}

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