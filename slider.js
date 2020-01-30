$(document).ready(function() {

  var container = $('div.textToSlide--container');
  container.each(function() {
    var cont = $(this),indent = cont.width();
    cont.container = function() {
      indent--;
      cont.css('text-indent',indent);
      if (indent < -1 * cont.children('div.textToSlide').width()) {
          indent = cont.width();
      }
    };
    cont.data('interval',setInterval(cont.container,1000/60));
});

});
