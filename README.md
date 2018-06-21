# dime.js

## Methods

- elements = `$('selector')`
- element = `$('selector')[0]`
- element|elements `.on()`
- element|elements `.trigger()`
- elements `.each()`
- element `.find()`

## Usage

```javascript
// Select multiple elements (querySelectorAll).
$('.selector')

// Iterate over elements.
$('.selector').each(callback)

// Attach one or more events (separated by a single space) to elements.
$('.selector').on('event1 event2', callback)

// Trigger a custom event on elements.
$('.selector').trigger('eventName', data)

// Select first element. Supports .on() and .trigger().
$('.selector')[0]

// Find elements within a single element. Supports .each(), .on(), .trigger().
$('.selector')[0].find('.another-selector')
```

## Design goals

1. **Simplicity.** Very short learning curve and ease of use. The methods work on native DOM elements, even if they're not wrapped in `$()`. No need for `.querySelectorAll` or `.querySelector`.
2. **Minimalism.** Small file size and high performance.

## Notes

- Dime.js adds methods to the native `NodeList` and `Node` prototypes. In consequence, if the native prototypes ever provide one of the methods this library provides, they will be overridden and no longer accessible. Despite the possible _property shadowing_, we think this library is worth to be used. In the unlikely case a property gets overridden, we can refactor.
- The `.find()` method is only supported on a single element (`$elements[0].find('.selector')`), not on a collection of elements, aka NodeList. So `$elements.find('.selector')` is not going to work.
