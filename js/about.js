

$( document ).ready(function() {
  $(".about").css({
    backgroundColor: "rgb(252,114,30)",
    color: "black",
    borderRadius: "10px",
    padding: "8px"
  })
var delay = 500;
$(".progress-bar").each(function(i) {
  $(this).delay(delay * i).animate({
    width: $(this).attr('aria-valuenow') + '%'
  }, delay);

  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: delay,
    // easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now) + '%');
    }
  });
});
})