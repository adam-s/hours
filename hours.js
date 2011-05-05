(function($) {
  
  Drupal.behaviors.hours = {
    attach: function (context) {
  
      $('.business-hours-block [id$=-startday]').change(function (e) {
        $('[id$=-endday]', $(this).parent().parent()).val($(this).val());
      });
  
    }
  };

})(jQuery);