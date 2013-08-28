$(document).ready( function() {
	
	$("#sudeep-code-sidebar ul li").click(function(e) {
		e.preventDefault();
		$("#sudeep-code-sidebar ul").children().css("background", "#FFFFFF");
		$(this).css("background", "#EEEEEE");
		$("#sudeep-code-content").load($(this).find("a").attr("href"));
	});
	
	$("#sudeep-code-iglassdoor").click();
});