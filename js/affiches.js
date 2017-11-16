/* {} # @ */

$(document).ready(function(){
	$("#affiche-wrapper figure").click(function() {
		$("#modal figure img").attr("src", $(this).parent().find("img").attr("src"));
		$("#modal").removeClass("d-none");
	});
	$("#modal").click(function(){
		$("#modal").addClass("d-none");
	});
});