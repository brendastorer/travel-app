$(document).ready(function () {

  $(document).on("click", ".js-remove-input", function (event) {
    event.preventDefault();
    $(this).closest(".form-container__added-field").remove();
  });

  $(".js-add-interests").click(function (event) {
    event.preventDefault();
    $(this).before("\n        <div class=\"form-container__added-field\">\n          <input type=\"text\" name=\"interests[]\" placeholder='e.g. \"hiking\"' />\n          <a href=\"#\" class=\"js-remove-input form-container__remove\">x</a>\n        </div>\n      ");
  });

  function watchLocationSubmit() {
    $(".js-location-form").submit(function (event) {
      event.preventDefault();

      var currentTripInput = $(event.currentTarget).find(".js-trip-id");
      var currentTrip = currentTripInput.val();
      var requestUrl = "/trips/" + currentTrip;

      var sendData = "{\n          \"id\": " + currentTrip + ",\n          \"days\": {\n            \"calendarDate\": \"2017-06-21T00:00:00.000Z\",\n            \"locations\": {\n              \"name\": \"Florence\",\n              \"country\": \"Italy\"\n            }\n          }\n        }\n        ";

      console.log(sendData);
      console.log(requestUrl);

      $.ajax({
        url: requestUrl,
        type: "PUT",
        dataType: "json",
        data: { sendData: sendData },
        success: function success() {}
      });
    });
  }

  $(watchLocationSubmit);
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