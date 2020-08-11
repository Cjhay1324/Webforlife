$(document).ready(function(){
	$(".nav-button").on( "click", function(event){
		
		var thisElement = $(this).children("a");

		if(thisElement.attr('href') != "") {

			event.preventDefault();

			var hash = thisElement.attr('href');

			document.querySelector(thisElement.attr('href')).scrollIntoView({
            	behavior: 'smooth'
        	});
		}
	});
});