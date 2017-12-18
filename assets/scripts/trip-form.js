$(document).ready(function() {
  
  $(document).on("click", ".js-remove-input", function(event) {
    event.preventDefault();
    $(this).closest(".form-container__added-field").remove();
  });

  $(".js-add-interests").click(function(event) {
    event.preventDefault();
    $(this).before(
      `
        <div class="form-container__added-field">
          <input type="text" name="interests[]" placeholder='e.g. "hiking"' />
          <a href="#" class="js-remove-input form-container__remove">x</a>
        </div>
      `
    );
  });

  function watchLocationSubmit() {
    $(".js-location-form").submit(event => {
      event.preventDefault();

      const currentTripInput = $(event.currentTarget).find(".js-trip-id");
      const currentTrip = currentTripInput.val();
      const requestUrl = "/trips/" + currentTrip;

      const sendData = 
        {
          "id": ${currentTrip},
          "days": {
            "calendarDate": "2018-02-13T00:00:00.000Z",
            "locations": {
              "name": "Florence",
              "country": "Italy"
            }
          }
        };

      console.log(sendData);
      console.log(requestUrl);


      $.ajax({
        url: requestUrl,    
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(sendData),
        async: false,
        success: function(msg) {
          console.log(success);
        }
      });
    });
  }

  $(watchLocationSubmit);
});