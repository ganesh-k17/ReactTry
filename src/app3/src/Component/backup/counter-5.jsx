import React, { Component } from 'react';

class Counter extends Component {

    // constructor(){
    //     super();
    //     console.log(this);
    //     this.handleIncrement = this.handleIncrement.bind(this);  // normally handleIncrement would not have access to this.
    //                                                             //  so we have to bind it so that the method will have 'this'.
    // }

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

    renderTags(){
        let tags = this.state.tags;
        if (tags.length === 0)
            return <p>No tags available"</p>
        // return tags.map(tag => <li onClick={ () => this.handleTag(tag)} key={ tag }>{ tag }</li>)
        return tags.map(tag => <li key={ tag }><button onClick={ () => this.handleTag(tag)}>{tag}</button></li>)
    }

    handleTag = (tag) => {
        console.log(tag);
    }

    handleIncrement = () => {
        this.setState({ Count: this.state.Count + 1 });
        console.log("incremented", this);
    }

    handleDecrement = () => {
        this.setState({ Count: this.state.Count - 1  });
        console.log("incremented", this);
    }

    getCount(){
        const { Count } = this.state;
        return Count === 0 ? "Zero" : Count;
    }
}
 
export default Counter;
