import {  Route, Routes } from "react-router-dom"
import "./pages/index.css"
import Navabr from "./components/Navbar"
import Footer from "./components/Footer"
import ProductsPage from "./pages/ProductsPage"
import Product from "./pages/Product"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Users from "./pages/Users"
import CounterApp from "./components/CounterApp"
import Form from "./pages/Form"
import Calc from "./components/Calc"

function App() {

  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/counter" element={<CounterApp/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/calc" element={<Calc/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
