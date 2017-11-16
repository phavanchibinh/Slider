
;(function($, window, document, Unibail, undefined) {
  'use strict';

  var pluginName = 'backtotop';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
    console.log('inited');
  }

  Plugin.prototype = {
    init: function() {
      this.scrollTop();
      if (this.options.hideOnTop) {
        this.hideOnTop();
      }
    },
    scrollTop: function() {
      var that = this,
        element = that.element,
        options = that.options;
      $(element).on('click', function() {
        console.log('scroll clicked');
        $('html').animate({ scrollTop: 0 }, options.speed);
      });
    },
    hideOnTop: function() {
      var that = this,
      element = that.element;
      console.log('window height: ' + $(window).height());
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height()) {
          $(element).show();
        }
        else {
          $(element).hide();
        }
      });
    },
    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
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
