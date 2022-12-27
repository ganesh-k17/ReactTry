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

        let classes = "badge m-2 bg-"
        classes += (this.state.Count ===0) ? "warning" : "primary";

        return (
            <React.Fragment>
                <img src = {this.state.ImageUrl}></img>
                {/* <span style={ { fontSize:50, backgroundColor: 'blue' } } className="badge badge-primary m-2">{this.getCount()}</span> */}
                <span style={ { fontSize:25, backgroundColor: 'blue' } } className={classes}>{this.getCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getCount(){
        const { Count } = this.state;
        return Count === 0 ? "Zero" : Count;
    }
}
 
export default Counter;