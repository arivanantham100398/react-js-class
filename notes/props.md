A Prop is a way that components communicate. React uses props to transfer data from one component to another component.

But remember that props only transport data in a one-way flow (only from parent to child components). It is not possible for props to pass data from a child to parent, or to components at the same level.

Now let’s go back to our App component and pass props from an App to its child (HelloWorld.js in our case).

First, we need to define a prop on the HelloWorld Component and assign a value to it.

This is one way to get props

function HelloWorld(props) {
  return <h1>{props.title}</h1>;
}
export default HelloWorld;

import HelloWorld from "./HelloWorld";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld title="Hello World" />
        <HelloWorld title="Hello India" />
        <HelloWorld title="Hello America" />
        <HelloWorld title="Hello China" />
      </header>
    </div>
  );
};

Another way is destructuring props in argument

function HelloWorld({title}) {
  return <h1>{title}</h1>;
}
export default HelloWorld;
