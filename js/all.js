/* {} # @ */
$(document).ready(function() {
	var out = true;
	var hide = true;
	var hide = true;
	var grey = false;
	var myTop = $("#main-container").offset().top;
	var myBottom = $("#main-wrapper").offset().top;
	var active = $("a.active");
	console.log("myBottom = " +myBottom);
	console.log("myTop = " +myTop);
	console.log("window = " +$(window).scrollTop());
	$(window).scroll(function() {
		if($(window).scrollTop() * 2 > myTop && hide == true)
		{

			$("#bars").css("transform", "translateX(30vw)");
			$("#bars #burg").css("transform", "rotate(0deg)");
			hide = false;
		}
		else if($(window).scrollTop() * 2 <= myTop) {
			$("#bars").css("transform", "translateX(-30vw)");
			$("#bars #burg").css("transform", "rotate(-360deg)");
			hide = true;
		}
		if($(window).scrollTop() > myBottom) {
			$("#bars #burg").css("background-color", "#eada33");
			$("#nav-bis").css("background-color", "#eada33");
			$("#bars .active-g").addClass("active");
			$("#bars .active-g").removeClass("active-g");
			grey = false;
		}
		else {
			$("#bars #burg").css("background-color", "#888888");
			$("#nav-bis").css("background-color", "#888888");
			$("#bars .active").addClass("active-g");
			$("#bars .active").removeClass("active");
			grey = true;
		}
	});
	$("#bars #burg").hover(function() {
		if(grey == false)
			$("#bars #burg").css("background-color", "#efb62e");
		else
			$("#bars #burg").css("background-color", "#656363");
	}, function() {
		if(grey == false)
			$("#bars #burg").css("background-color", "#eada33");
		else
			$("#bars #burg").css("background-color", "#888888");
	});
	$("#bars #burg").click(function() {
		if(out == true) {
			$("#bars #burg").css("transform", "rotate(-180deg)");
			$("#nav-bis").css("left", "0");
			out = false;
		}
		else {
			$("#bars #burg").css("transform", "rotate(180deg)");
			$("#nav-bis").css("left", "-100%");
			out = true;
		}
	});
	$("#bars a").hover(function() {
		console.log("this = "+this);
		console.log("active = "+ active);
		if(grey == false)
			$(this).addClass("activeB");
		else
			$(this).addClass("active-gB");
	}, function() {
		if(grey == false && this != active)
			$(this).removeClass("activeB");
		else if(this != active)
			$(this).removeClass("active-gB");
	});
});