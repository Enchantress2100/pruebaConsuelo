 $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){
        window.location.hash = hash;
      });
    } 
  });
});
 
 
 
 //Tooltips//
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })