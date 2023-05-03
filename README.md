# React

## Must to learn

* React create app tool
* React hooks (useState, useEffect, useReducer, useRef, useCallback, userMemo, useContext)
* React router (reactMux, reactGin)
* Other tools:
  - 

## Install create react app library

```bash
 npm i -g create-react-app@1.5.2
```

## Creating new application template

```bash
create-react-app app1
```

It installs,

* light weight Development server
* Webpack - for bundling our files
* Babel - compiling javascripts

## Object destructure

State = {
    Count = 0
};

const { Count } = this.State;   // The Count in State is get assigned to Count const as in left side as both have save variable name.

## Component with State

```jsx
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        Count: 2,
        ImageUrl: "https://picsum.photos/200"
     } 
    render() { 
        return (
            <React.Fragment>
                <img src = {this.state.ImageUrl}></img>
                <span className="badge badge-primary m-2">{this.getCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getCount(){
        const { Count } = this.state;
        return Count == 0 ? "Zero" : Count;
    }
}
 
export default Counter;
```

## Component with Attributes

```jsx
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        Count: 2,
        ImageUrl: "https://picsum.photos/200"
     } 

     styles = {
        fontSize: 50,
        fontWeight: "bold",
        backgroundColor: "black"
     }

    render() { 
        
        return (
            <React.Fragment>
                <img src = {this.state.ImageUrl}></img>
                <span style={this.styles} className="badge badge-primary m-2">{this.getCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getCount(){
        const { Count } = this.state;
        return Count == 0 ? "Zero" : Count;
    }
}
 
export default Counter;
```

```jsx
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        Count: 2,
        ImageUrl: "https://picsum.photos/200"
     } 

    //  styles = {
    //     fontSize: 50,
    //     fontWeight: "bold",
    //     backgroundColor: "black"
    //  }

    render() { 
        return (
            <React.Fragment>
                <img src = {this.state.ImageUrl}></img>
                <span style={ { fontSize:50, backgroundColor: 'blue' } } className="badge badge-primary m-2">{this.getCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getCount(){
        const { Count } = this.state;
        return Count == 0 ? "Zero" : Count;
    }
}
 
export default Counter;
```

## Updating State

We could not update state directly in the event handler as the state should update the DOM.  This can be solved by React method in base  class (Component) - this.setState({ }) as in below.  Here the opject passd in the setState() method will be mapped to the state object's attributes.

```jsx

state = { 
        Count: 2,
        tags: ['tag1','tag2','tag3']
     } 
     
render() { 

        let classes = "badge m-2 bg-"
        classes += (this.state.Count ===0) ? "warning" : "primary";

        return (
            <React.Fragment>
                <span style={ { fontSize:25, backgroundColor: 'blue' } } className={classes}>{this.getCount()}</span>
                <span><button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button></span>
                <span><button onClick={ this.handleDecrement } className="btn btn-secondary btn-sm">Decrement</button></span>
                <ul>
                    { this.renderTags() }
                </ul>
            </React.Fragment>
        );
    }
    
    handleIncrement = () => {
        this.setState({ Count: this.state.Count + 1 });
        console.log("incremented", this);
    }
```

## Lifecycle hooks

* Mount phase:

Constructor
Render
componentDidMount

* Update

render
ComponentDidUpdate

* UnMount

componentWillUnmount

## Routing

```jsx
npm i react-router-dom
```

* Route Parameters
* Query String
* Redirect
* Not Found (404) Pages
* Nested Routing

## Routing without Link

```jsx

navbar.jsx
 
 import React from "react";
 const NavBar = () => {
   return (
     <ul>
       <li>
         <a href="/">Home</a>
       </li>
       <li>
         <a href="/products">Products</a>
       </li>
       <li>
         <a href="/posts/2018/06">Posts</a>
       </li>
       <li>
         <a href="/admin">Admin</a>
       </li>
     </ul>
   );
 };

 export default NavBar;

app.js

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
            <Route path="/products" exact element={<Products />} />
            <Route path="/posts" exact element={<Posts/>} />
            <Route path="/admin" exact element={<Dashboard/>} />
            <Route path="/" exact element={<Home/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

```

## Routing with Link

```jsx

navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;


app.js

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
        </div>
      </div>
    );
  }
}

export default App;

index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

```


## Route parameters

In React V6 we could not use route parameter directrly we have to use hooks to get the parameters.  
So since class component is allowed only in body of function component we have use function component to use router parameter.

```jsx

app.js:

 <Routes>
    <Route path="/products" element={<Products isValid={true}/>} />  {/*passed isValid property.  IN V6 we could not pass router props to the element. For that we have to use hooks like useNavigate for navigate, useParams for match.params, useLocation for location*/}
    <Route path="/products/:id" element={<ProductDetails/>} /> 
    <Route path="/posts/:year/:month" element={<Posts/>} />
    <Route path="/admin" element={<Dashboard/>} />
    <Route path="/" element={<Home/>} />
  </Routes>

productDetails.jsx

import React, { Component } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = (props)  => {

    let {id} = useParams();
    console.log("id", id);

    return (
      <div>
        <h1>Product Details - {id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
}

export default ProductDetails;
```

## UseMatch hooks

this hook is used to match route parameter.

```jsx
 <Routes>
    <Route path="/products" element={<Products isValid={true}/>} />  {/*passed isValid property.  IN V6 we could not pass router props to the element. For that we have to use hooks like useNavigate for navigate, useParams for match.params, useLocation for location*/}
    <Route path="/products/:id" element={<ProductDetails/>} /> 
    <Route path="/posts/:year/:month" element={<Posts/>} />
    <Route path="/admin" element={<Dashboard/>} />
    <Route path="/" element={<Home/>} />
</Routes>

// Posts component 

import React from "react";
import { useMatch } from "react-router-dom";

const Posts = (props) => {
  ///posts/:year/:month
  const match = useMatch("posts/:year/:month");
  console.log(match);
  const year = match.params.year;
  const month = match.params.month;
  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month: {month}
    </div>
  );
};

export default Posts;

```

## React Route references

https://reactrouter.com/en/main/hooks/use-params
