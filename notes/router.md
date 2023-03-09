React Router

React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view

<!-- <BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</BrowserRouter> -->

Link

Normally in an application you would navigate with anchor tags, but React Router uses its own custom Link component to handle navigation. This Link component is just a wrapper around an anchor tag that helps ensure all the routing and conditional re-rendering is handled properly so you can use it just like your would a normal anchor tag.

 <Link to="/">Home</Link></li>

Dynamic Routing

<!-- <Route path="/books/:id" element={<Book />} /> -->

import { useParams } from "react-router-dom"

export function Book() {
const { id } = useParams()

return (
<h1>Book {id}</h1>
)
}

Not found Comp

<!-- <Route path="*" element={<NotFound />} /> -->


The next element I want to talk about is the NavLink component. This component works exactly the same as the Link component, but it is specifically for showing active states on links, for example in nav bars. By default if the to property of a NavLink is the same as the URL of the current page the link will have an active class added to it which you can use for styling. If this is not enough you can instead pass a function with an isActive parameter to the className, or style props, or as the children of the NavLink.


<!-- <NavLink
  to="/"
  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
>
  Home
</NavLink> -->

useNavigation Hook

The useNavigation hook on the other hand is a hook I use all the time. This hook is a really simple hook that takes no parameters and returns a single navigate function which you can use to redirect a user to specific pages

<!-- const navigate = useNavigate()

function onSubmit() {
  // Submit form results
  navigate("/books", { replace: true, state: { bookName: "Fake Title" }})
} -->


navigate(-1) // Go back one page in history
navigate(-3) // Go back three pages in history
navigate(1) // Go forward one page in history


The useLocation hook returns the location object from the current URL, which includes the following:

pathname: This is the path of the URL.
search: This is the query string (?) included in the URL.
hash: This is the result of the hash fragment (#) from the URL

const location = useLocation();
console.log(location);