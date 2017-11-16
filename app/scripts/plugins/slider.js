
;(function($, window, document, Unibail, undefined) {
  'use strict';

   var pluginName = 'slider';
  var slideWidth = $('.mySlides ul li').width();
  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
    console.log('inited');
  }

  Plugin.prototype = {
    init: function() {
      this.interval();
      
    },
    interval: function() {
      setInterval(function() {
       this.moveLeft()
      }, 1500);
    },


    moveLeft: function () {
        $('.mySlides ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.mySlides ul li:last-child').prependTo('.mySlides ul ');
            $('.mySlides ul').css('left', '');
        });
    },
  };
  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    speed: 600,
    hideOnTop: true
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
    
  });

}(window.jQuery, window, document));
