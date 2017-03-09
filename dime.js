/**
 * DIME.JS
 * Uber-micro library for selecting elements and handling custom events.
 *
 * (c) 2017 - Kevin Weber - http://kevinw.de
 */

/**
 * CustomEvent polyfill to support IE9+
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
(function () {
  if (typeof window.CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}());

(function () {
  window.$ = document.querySelectorAll.bind(document);

  /**
   * $.each(element, index)
   */
  NodeList.prototype.each = function (fn) {
    var nodes = this;
    for (var i = 0, l = nodes.length; i < l; i++) {
      fn.call(nodes[i], i, nodes[i]);
    }
  };

  /**
   * $.on('eventName', callback)
   */
  Node.prototype.on = function (name, fn) {
    var names = name.split(' ');
    for (var i = 0, l = names.length; i < l; i++) {
      this.addEventListener(names[i], function (event) {
        fn.call(this, event, event.detail);
      });
    }
  };

  NodeList.prototype.on = function (name, fn) {
    this.each(function (index, element) {
      element.on(name, fn);
    });
  };

  /**
   * $.trigger('eventName', data)
   */
  Node.prototype.trigger = function (eventName, data) {
    var event = new CustomEvent(eventName, {
      detail: data
    });
    this.dispatchEvent(event);
  };

  NodeList.prototype.trigger = function (eventName, data) {
    this.each(function (index, element) {
      element.trigger(eventName, data);
    });
  };
}());
