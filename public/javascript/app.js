$(".js-mobile-nav-toggle").click(function (event) {
  event.preventDefault();
  $(".js-mobile-nav").toggleClass("is-active");
});
$(document).ready(function () {

  $(document).on("click", ".js-remove-input", function (event) {
    event.preventDefault();
    $(this).closest(".form-container__added-field").remove();
  });

  $(".js-add-interests").click(function (event) {
    event.preventDefault();
    $(this).before("\n        <div class=\"form-container__added-field\">\n          <input type=\"text\" name=\"interests[]\" placeholder='e.g. \"hiking\"' />\n          <a href=\"#\" class=\"js-remove-input form-container__remove\">x</a>\n        </div>\n      ");
  });
});
$(document).ready(function () {
  $(".js-trip-day-link").click(function () {
    var date = $(this).data("day-link");
    var dateContent = $("[data-day-content='" + date + "']");

    $(".js-trip-day-link").removeClass("is-active");
    $(this).addClass("is-active");
    $(".js-trip-day").removeClass("is-shown");
    $(dateContent).addClass("is-shown");
  });
});