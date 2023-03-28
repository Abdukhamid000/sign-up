$(document).ready(function () {
  $("#signup_btn").click(function () {
    $(".main").animate({ left: "22.5%" }, 400);
    $(".main").animate({ left: "30%" }, 500);
    $("#loginform").fadeOut(150);
    $("#loginform").animate({ left: "25%" }, 400);

    $(".signupform").animate({ left: "30%" }, 500);
    $(".signupform").fadeIn(500);
  });

  $("#login_btn").click(function () {
    $(".main").animate({ left: "77.5%" }, 400);
    $(".main").animate({ left: "70%" }, 500);
    $(".signupform").fadeOut(150);
    $(".signupform").animate({ left: "75%" }, 400);

    $("#loginform").animate({ left: "70%" }, 500);
    $("#loginform").fadeIn(500);
  });
});
