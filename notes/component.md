Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

Example

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

Rendering a component - <Car/>

Why JSX? 
Within JSX we can add JavaScript(logic, functions, variables etc) as well by using curly braces { } inside the HTML

There are some differences as compared to HTML: 

Some attributes like ‘class’ become ‘className’ (because class refers to JavaScript classes), ‘tabindex’ becomes ‘tabIndex’ and should be written in Camel Case. 
We can’t return more than one HTML element at once, so make sure to wrap them inside a parent tag. 