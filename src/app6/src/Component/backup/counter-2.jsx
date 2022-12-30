import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        console.log(this);
        this.handleIncrement = this.handleIncrement.bind(this);  // normally handleIncrement would not have access to this.
                                                                //  so we have to bind it so that the method will have 'this'.
    }

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
                <button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.renderTags() }
                </ul>
            </React.Fragment>
        );
    }

    renderTags(){
        let tags = this.state.tags;
        if (tags.length === 0)
            return <p>No tags available"</p>
        return tags.map(tag => <li key={ tag }>{ tag }</li>)
    }

    handleIncrement(){
        console.log("incremented", this);
    }

    getCount(){
        const { Count } = this.state;
        return Count === 0 ? "Zero" : Count;
    }
}
 
export default Counter;
