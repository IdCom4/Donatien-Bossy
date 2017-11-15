/* {} # @ */
$(document).ready(function() {
	var out = true;
	var hide = true;
	var hide = true;
	var myTop = $("#main-container").offset().top;
	$(window).scroll(function() {
		if($(window).scrollTop() > myTop && hide == true)
		{

			$("#bars").css("transform", "translateX(30vw)");
			$("#bars #burg").css("transform", "rotate(180deg)");
			hide = false;
		}
		else if($(window).scrollTop() <= myTop) {
			$("#bars").css("transform", "translateX(-30vw)");
			$("#bars #burg").css("transform", "rotate(-180deg)");
			hide = true;
		}
	});
	$("#bars #burg").hover(function() {
		$("#bars #burg").css("background-color", "#efb62e");
	}, function() {
		$("#bars #burg").css("background-color", "#eada33");
	});
	$("#bars #burg").click(function() {
		if(out == true) {
			$("#bars #burg").css("transform", "rotate(-180deg)");
			$("#nav-bis").css("transform", "translateX(100%)");
			out = false;
		}
		else {
			$("#bars #burg").css("transform", "rotate(180deg)");
			$("#nav-bis").css("transform", "translateX(-100%)");
			out = true;
		}
	});
});