import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Collection from "./pages/collection";
import Footer from "./components/Footer";

const App = () => {
  return (

    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/Collection" element={<Collection/>}/>
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;