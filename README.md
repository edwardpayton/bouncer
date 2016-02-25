# Bouncer
Bouncer: a Javascript plugin to throttle and debounce callbacks easily.

## How to use
The plugin can be used with or without jQuery.

The syntax is like so:
```javascript
namespace.option(delay,callback,runBefore);
```

* namespace: use `$` with jQuery, use `bouncer` without 
* option: `throttle` or `debounce`
* delay: number - use 0 or greater in milliseconds
* callback: your callback function, eg an ajax call
* runBefore: for `debounce`, run your `callback` before or after the `delay`




### With jQuery
Use the `$` namespace
```javascript
$.throttle(500,callback);
$.debounce(500,callback[,true]);
```

```javascript
$("#foo").click($.debounce(500,function() {
  // My ajax callback
});
```

### Plain Javascript
Use the `bouncer` namespace  
```javascript
bouncer.throttle(500,callback);  
bouncer.debounce(500,callback[,true]);  
```

```javascript
document.getElementById('foo')addEventListener('click', bouncer.debounce(500,function(){
// My ajax callback  
}),false);
```

