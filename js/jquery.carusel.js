(function($) {

  $.fn.carusel = function(options) {

    var defaults = {
      pixelsOffset : 100,
    }

    var settings = $.extend(defaults, options);

    var $pixelsOffset = defaults.pixelsOffset;
    var $currentLeftValue = 0;
    var $elementsList = $('.carousel-list');
    var $minimumOffcet = $pixelsOffset *($elementsList.children('img').length - 3)

    function rightTurn() {

      if ($currentLeftValue > $minimumOffcet) {
        $currentLeftValue -=$pixelsOffset;
        $('.carousel-list').animate({ left : $currentLeftValue + "px"}, 500);
      }
    }

    function leftTurn() {
      if ($currentLeftValue < 0) {
        $currentLeftValue +=$pixelsOffset;
        $elementsList.animate({ left : $currentLeftValue + "px"}, 500);
      }

    }

    var $leftUIEl = $('.carousel-arrow-left');
    var $rightUIEl = $('.carousel-arrow-right');

    $leftUIEl.on('click', leftTurn);
    $rightUIEl.on('click', rightTurn);

    return this;
  }


})(jQuery);
