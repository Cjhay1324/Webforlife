$('.nav-button a').on('click', function(e) {
    console.log(this.hash);
 if (this.hash !== '') {
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body, #content-body').animate(
        {
       scrollTop: $(hash).offset().top
        },
        800
    );
 }
});