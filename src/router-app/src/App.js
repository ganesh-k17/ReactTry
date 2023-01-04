import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
         <NavBar />
        <div className="content">
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="/admin" element={<Dashboard/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
          {/* <Routes>
            <Route path="/products" exact element={<Products />} />
            <Route path="/posts" exact element={<Posts/>} />
            <Route path="/admin" exact element={<Dashboard/>} />
            <Route path="/" exact element={<Home/>} />
          </Routes> */}
        </div>
      </div>
    );
  }
}

export default App;
