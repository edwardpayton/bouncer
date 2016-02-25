// Bouncer: throttle and debounce functions
(function(window,undefined){
  var $ = window.jQuery || window.bouncer || ( window.bouncer = {} );

  function doCallback(callback) {
    callback.call();
  };
  $.throttle = function(delay,callback) {
    var wait = !1;
    return function () {
      if(!wait) {
        doCallback(callback);
        wait = !0;
        setTimeout(function() {
            wait = !1;
        }, delay);
      }
    };
  };
  $.debounce = function(delay,callback,before) {
    var timer = !1;
    return function() {
      if(before && !timer) doCallback(callback);
      clearTimeout(timer);
      timer = setTimeout(function() {

        if(!before) doCallback(callback);
        timer = !1;
      }, delay);
    };
  };
})(this);
