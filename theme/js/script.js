$('#login').click(function() {
  if ($('.form-login').hasClass("visible")) {
    $('form.form-login').submit(); }
  else {
    $(".visible").toggle().removeClass("visible");
    $('.form-login').toggle().addClass("visible");
    console.log("login");
  }
}
  );
$('#register').click(function() {
  $(".visible").toggle().removeClass("visible");
  $('.form-register').toggle().addClass("visible");
  console.log("login");
}
  );
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").removeClass("navbar-visibility",1000);
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").addClass("navbar-visibility",1000);
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $('body').css('overflow-y','auto');
        setTimeout(aniAbout, 1000);
    });
    
});