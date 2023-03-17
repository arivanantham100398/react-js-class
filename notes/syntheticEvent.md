Synthetic Events

In order to work as a cross-browser application, React has created a wrapper same as the native browser in order to avoid creating multiple implementations for multiple methods for multiple browsers, creating common names for all events across browsers. Another benefit is that it increases the performance of the application as React reuses the event object.


Syntax:

e.preventDefault() prevents all the default behavior by the browser.
e.preventDefault()

e.stopPropagation() prevents the call to the parent component whenever a child component gets called.
e.stopPropagation()

React event handling is similar to HTML with some changes in syntax, such as:

React uses camelCase for event names while HTML uses lowercase.

Instead of passing a string as an event handler, we pass a function in React.


Example 1 :

<!-- function Form() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked');
  }

  return (
    <form onSubmit={handleClick}>
      <button type="submit">Submit</button>
    </form>
  );
} -->