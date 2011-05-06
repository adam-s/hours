(function($) {
  
  Drupal.behaviors.hours = {
    attach: function (context) {
  
      $('.business-hours-block [id$=-start-day]').change(function (e) {
        $('[id$=-end-day]', $(this).parent().parent()).val($(this).val());
      });
  
    }
  };

})(jQuery);