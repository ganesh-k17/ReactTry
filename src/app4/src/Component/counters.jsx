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
        <div> <button onClick={()=>this.handleReset()} className='btn btn-secondary btn-sm m-2'>Reset</button> </div> 
        { 
           this.state.counters.map( 
            counter => <Counter onDecremented = {this.handleDecrement}  onIncremented = {this.handleIncrement} onDeleted = {this.handleDelete} value={ counter} key={counter.id} selected = {true}/>
            )
        }
        </div>
        );
    }


    handleIncrement = (counter) =>{
        console.log("incremented");
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = { ...counter };
       counters[index].value++;
       this.setState({counters});

    }

    handleDecrement = (counter) =>{
        console.log("incremented");
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = { ...counter };
       counters[index].value--;
       this.setState({counters});

    }

    handleReset = ()=> {
        console.log("reset handled");
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        })
        this.setState({counters})
    }

    handleDelete = (counter) => {
        console.log("Deleted", counter.id);
        // let counters= this.state.counters.find({id:id}).splice(id,1)
        // this.setState({counters: this.state.counters.splice(id,1)})
    }
}
 
export default Counters;
