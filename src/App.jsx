import {  Route, Routes } from "react-router-dom"
import "./pages/index.css"
import Navabr from "./components/Navbar"
import Footer from "./components/Footer"
import ProductsPage from "./pages/ProductsPage"
import Product from "./pages/Product"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App