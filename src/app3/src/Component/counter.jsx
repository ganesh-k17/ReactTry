import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        value: this.props.value,
        tags: ['tag1','tag2','tag3']
     } 

    render() { 

        console.log("props",this.props);

        let classes = "badge m-2 bg-"
        classes += (this.state.value === 0) ? "warning" : "primary";

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
        return tags.map(tag => <li key={ tag }><button onClick={ () => this.handleTag(tag)}>{tag}</button></li>)
    }

    handleTag = (tag) => {
        console.log(tag);
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
        console.log("incremented", this);
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1  });
        console.log("incremented", this);
    }

    getCount(){
        const { value: Count } = this.state;
        return Count === 0 ? "Zero" : Count;
    }
}
 
export default Counter;
