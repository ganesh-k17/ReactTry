# React

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
