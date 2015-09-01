$(window).load(function(){	
	//Menu bar expansion on click
	
	var hamburgerIcon = $("#hamburgerIcon");
	var xOutMenu = $("#xOut");

	//adds a class of hidden which to hamburgerIcon sets the hamburger icon's dispaly to none, making it invisible
	  hamburgerIcon.click(function (){
	    $("nav").toggle();
	    // $(this).addClass("hidden");
	    // $(xOutMenu).removeClass("hidden");
	  });

	  //adds a class of hidden to the X out P tag which sets it's dispaly to none, making it invisible.
	  $(xOutMenu).click(function () {
	    $("nav").toggle();
	    // hamburgerIcon.removeClass("hidden");
	    // $("nav").addClass("hidden");
	  });
});