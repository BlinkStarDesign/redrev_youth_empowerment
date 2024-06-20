$('a[href*="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.hash);
    var offset = target.offset().top - 50; // adjust this value based on your header height
    $('html, body').animate({ scrollTop: offset }, 500);
  });