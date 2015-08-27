$(window).load(function(){	
	//Menu bar expansion on click
	
	var hamburgerIcon = $("#hamburgerIcon");
	var xOutMenu = $("p");

	//adds a class of hidden which to hamburgerIcon sets the hamburger icon's dispaly to none, making it invisible
	  hamburgerIcon.click(function (){
	    $("nav").toggle("slow");
	    $(xOutMenu).removeClass("hidden");
	    $(this).addClass("hidden");
	  });

	  //adds a class of hidden to the X out P tag which sets it's dispaly to none, making it invisible.
	  $("p").click(function () {
	    $("nav").toggle("slow");
	    hamburgerIcon.removeClass("hidden");
	    $(this).addClass("hidden");
	  });
});