
import React, { Component } from 'react';
import Navbar from './Component/navbar';
import Counters from './Component/counters';
import './App.css';

class App extends Component {
  
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
      <React.Fragment>
        <Navbar TotalCount = {this.state.counters.length}/>
        <main className="container">
          <Counters counters = {this.state.counters} onDecremented = {this.handleDecrement}  onIncremented = {this.handleIncrement} onDeleted = {this.handleDelete} />
        </main>
      </React.Fragment>
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

export default App;
