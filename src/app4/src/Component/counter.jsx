import React, { Component } from 'react';

class Counter extends Component {

    render() { 

        console.log("props",this.props);

        let classes = "badge m-2 bg-"
        classes += (this.props.value === 0) ? "warning" : "primary";

        return (
            <div>
                <span style={ { fontSize:25, backgroundColor: 'blue' } } className={classes}>{this.getCount()}</span>
                <span><button onClick={ () => this.props.onIncremented(this.props.value) } className="btn btn-secondary btn-sm m-2">Increment</button></span>
                <span><button onClick={ () => this.props.onDecremented(this.props.value) } className="btn btn-secondary btn-sm m-2">Decrement</button></span>
                <span><button onClick={() => this.props.onDeleted(this.props.value) } className="btn btn-danger btn-sm m-2">Delete</button></span>
            </div>
        );
    }
    
    getCount(){
        const { value: Count } = this.props.value;
        return Count === 0 ? "Zero" : Count;
    }
}
 
export default Counter;
