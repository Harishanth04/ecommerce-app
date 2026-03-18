import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ShopContextProvider, { ShopContext } from "./context/ShopContect.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ShopContextProvider>
     <App />

  </ShopContextProvider>
    
  </BrowserRouter>
);