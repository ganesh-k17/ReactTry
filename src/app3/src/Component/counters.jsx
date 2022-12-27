import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters:[
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
            { id: 5, value: 0},
        ]
    } 
    render() { 
        return (
        <div>
        { 
           this.state.counters.map( 
            // counter => <Counter onDeleted = { this.handleDelete } key={counter.id} value={ counter.value} selected = {true}/>
            counter => <Counter onDeleted = {this.handleDelete} value={ counter.value} key={counter.id} id={counter.id} selected = {true}/>
            )
        }
        </div>
        );
    }

    handleDelete = (id) => {
        console.log("Deleted", id);
        // let counters= this.state.counters.find({id:id}).splice(id,1)
        // this.setState({counters: this.state.counters.splice(id,1)})
    }
}
 
export default Counters;
