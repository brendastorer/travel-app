$(document).ready(function() {
  $(".js-trip-day-link").click(function(event) {
    event.preventDefault();
    const date = $(this).data("day-link");
    const dateContent = $(`[data-day-content='${date}']`);

    $(".js-trip-day-link").removeClass("is-active");
    $(this).addClass("is-active");
    $(".js-trip-day").removeClass("is-shown");
    $(dateContent).addClass("is-shown");
  });
});