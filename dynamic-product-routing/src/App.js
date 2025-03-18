import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import ProductsData from "./Pages/ProductsData";
import Contact from "./contact";
function App() {
  return(
    <Router> 
      <nav>
        <Link to="/">Home</Link> | <Link to ="/products">Products</Link>| 
        <Link to="/contact">Contact</Link>
      </nav>
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/products" element={<Products />} />
        <Route path ="/products/:id" element={<ProductDetail/>} />
      <Route path="/contact" element={<Contact/>}>
        {/* <contact/> */}
        </Route>
      
      </Routes>
    </Router>
  );
}
export default App;