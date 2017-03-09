/**
 * DIME.JS
 * Uber-micro library for selecting elements and handling custom events.
 *
 * Author: Kevin Weber (http://kevinw.de)
 * Based on bling.js from Paul Irish (https://gist.github.com/paulirish/12fb951a8b893a454b32)

 * $('.selector') selects multiple elements (querySelectorAll).
 * $('.selector').on('event', callback) attaches an event to multiple elements.
 * $('.selector').trigger('eventName', data) triggers a custom event on multiple elements.
 * $('.selector').forEach(callback) allows you to iterate over multiple elements.
 *
 * $1 is like $ but only selects the first element (querySelector).
 * $1 supports .on() and .trigger().
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
  window.$1 = document.querySelector.bind(document);

  /**
   * $.forEach(element, index)
   */
  NodeList.prototype.__proto__ = Array.prototype;

  /**
   * $.on('eventName', callback)
   */
  Node.prototype.on = function (name, fn) {
    this.addEventListener(name, fn);
  };

  NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach(function (element) {
      element.on(name, fn);
    });
  };

  /**
   * $.trigger('eventName', data)
   */
  Node.prototype.trigger = function (eventName, data) {
    var event = new CustomEvent(eventName, {
      detail: data || {}
    });
    this.dispatchEvent(event);
  };

  NodeList.prototype.trigger = function (eventName, data) {
    this.forEach(function (element) {
      element.trigger(eventName, data);
    });
  };
}());
