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
          {/* <Routes>          # this render method is not available in latest react library
            <Route path="/products" render={(props)=><Products {...props} isValid={true} />} />    # here props is router's props which contains navigate, match, location
            <Route path="/posts" render={()=><Posts/>} />
            <Route path="/admin" render={()=><Dashboard/>} />
            <Route path="/" render={()=><Home/>} />
          </Routes> */}
          <Routes>
            <Route path="/products" element={<Products isValid={true}/>} />  {/*passed isValid property.  IN V6 we could not pass router props to the element. For that we have to use hooks like useNavigate for navigate, useParams for match.params, useLocation for location*/}
            <Route path="/products/:id" element={<ProductDetails/>} /> 
            <Route path="/posts/:year/:month" element={<Posts/>} />
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
