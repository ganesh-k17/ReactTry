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