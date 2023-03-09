Styling React components with inline styling

If you are familiar with basic HTML, you’ll know that it is possible to add your CSS inline. This is similar in React.

We can add inline styles to any React component we want to render. These styles are written as attributes and are passed to the element. Let’s style parts of our component using inline styles:

<!-- const AddTodo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>
        TODO
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <label
          style={{ padding: "10px 20px", textAlign: "center" }}
          htmlFor="new-todo"
        >
          What needs to be done?
        </label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};
export default AddTodo; -->

Directly import css files into corresponding react component

import styles from './styles.css';


Styling with Tailwind CSS

Tailwind CSS offers a different approach in which no CSS needs to be written to style an application. Instead, Tailwind CSS uses utility classes for each CSS property that you can use directly in your HTML or JSX.

function AddTodo() {
  return (
    <div className="flex flex-col">
      <h2 className="px-2.5 py-5 text-center text-white">TODO</h2>
      <div className="flex justify-center items-center">
        <label className="px-2.5 py-5 text-center" htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div className="flex justify-center items-center">
          <h4 className="text-red-800">{message}</h4>
        </div>
      )}
    </div>
  );
}