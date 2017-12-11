$(document).ready(function () {
  var interestsInput = "\n    <input type=\"text\" name=\"interests[]\" placeholder='e.g. \"hiking\"' />\n    <input type=\"text\" name=\"interests[]\" placeholder='e.g. \"museums\"' />\n  ";

  var mediaInput = "\n    <input type=\"text\" name=\"media[].file\" placeholder='Add link to self hosted image file'/>\n  ";

  $(".js-add-interests").click(function (event) {
    event.preventDefault();
    $(this).before(interestsInput);
  });

  $(".js-add-media").click(function (event) {
    event.preventDefault();
    $(this).before(mediaInput);
  });
});
$(document).ready(function () {
  $(".js-trip-day-link").click(function (event) {
    event.preventDefault();
    var date = $(this).data("day-link");
    var dateContent = $("[data-day-content='" + date + "']");

    $(".js-trip-day-link").removeClass("is-active");
    $(this).addClass("is-active");
    $(".js-trip-day").removeClass("is-shown");
    $(dateContent).addClass("is-shown");
  });
});