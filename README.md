# dime.js

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
```

## Design goals

1. jQuery-compatibility. If dime.js is removed, everything still works with jQuery.
2. Simplicity. Very short learning curve and ease of use.
3. Minimalism. Small file size and high performance.
