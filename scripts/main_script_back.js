/**
 * 
 * @param page
 * @param section
 * Loads a page in a div
 */
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
