import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
    render() { 
        return (
        <div>
        <div> <button onClick={()=>this.handleReset()} className='btn btn-secondary btn-sm m-2'>Reset</button> </div> 
        { 
           this.props.counters.map( 
            counter => <Counter onDecremented = {this.props.onDecremented}  onIncremented = {this.props.onIncremented} onDeleted = {this.props.onDeleted} value={ counter} key={counter.id} selected = {true}/>
            )
        }
        </div>
        );
    }
}
 
export default Counters;
