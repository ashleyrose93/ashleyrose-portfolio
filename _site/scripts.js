$( document ).ready(function() {
    console.log( "ready!" );
});

$( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
   });
});
