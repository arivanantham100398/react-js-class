The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders

Stateful

<!-- class Main extends Component {
 constructor() {
   super()
   this.state = {
     books: []
   }
 }
 render() {
   return <BooksList books={this.state.books} />;
 }
} -->

Stateless

<!-- const BooksList = ({books}) => {
 return (
   <ul>
     {books.map(book => {
       return <li>book</li>
     })}
   </ul>
 )
}
 -->

Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.