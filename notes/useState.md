The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. It can be used like this:

const [state, setState] = useState(initialValue);

Updating objects and arrays in useState

// Objects
const [state, setState] = useState({ name: 'John', age: 30 });

const updateName = () => {
  setState({ ...state, name: 'Jane' });
};

const updateAge = () => {
  setState({ ...state, age: state.age + 1 });
};

// Arrays
const [array, setArray] = useState([1, 2, 3, 4, 5]);

const addItem = () => {
  setArray([...array, 6]);
};

const removeItem = () => {
  setArray(array.slice(0, array.length - 1));
};