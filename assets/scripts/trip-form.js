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
});