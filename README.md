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

1. jQuery-compatibility. If dime.js is removed, everything still works with jQuery.
2. Simplicity. Very short learning curve and ease of use. No need for `.querySelectorAll` or `.querySelector`.
3. Minimalism. Small file size and high performance.

## Notes

- The `.find()` method is only supported on a single element (`$elements[0].find('.selector')`), not on a collection of elements (`$elements.find('.selector')`). Supporting this – including support for the `.on()` and `.trigger()` methods – would increase the file size significantly.
