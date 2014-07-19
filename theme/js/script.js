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