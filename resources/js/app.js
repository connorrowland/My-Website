var $ = require("jquery");
$(document).ready(function(){
  $("#header--contact-link").on("click", function(){
    $('html,body').animate({
      scrollTop: $("#contact-click--section").offset().top
    },600);
  })
})