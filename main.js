$(document).ready(function(){
$('.nav-button a').on('click', function(e) {
    console.log(this.hash);
 if (this.hash !== '') {
    e.preventDefault();
    
    var hash = this.hash;
    
    $('#content-body').animate(
        {
            scrollTop: $(hash).offset().top
        },
        500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
            });
        }
    });
});