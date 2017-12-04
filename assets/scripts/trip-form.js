$(document).ready(function() {
  const interestsInput = 
  `
    <input type="text" name="interests[]" placeholder='e.g. "hiking"' />
    <input type="text" name="interests[]" placeholder='e.g. "museums"' />
  `

  const mediaInput = 
  `
    <input type="text" name="media[].file" placeholder='Add link to self hosted image file'/>
  `

  $(".js-add-interests").click(function(event) {
    event.preventDefault();
    $(this).before(interestsInput);
  });

  $(".js-add-media").click(function(event) {
    event.preventDefault();
    $(this).before(mediaInput);
  });
});
