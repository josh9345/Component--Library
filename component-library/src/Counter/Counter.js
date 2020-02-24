import React, { Component } from 'react';
import './Counter.css'


class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            value:0
        }
    }
    add=(e)=>{
        this.setState({value: this.state.value +=1})
    }
    minus=(e)=>{
        this.setState({value: this.state.value -=1})
    }
    render() {
        
        return (
            <div className='counter'>
                <button onClick={this.minus} className='minus'></button><p className='countNumber'>{this.state.value}</p><button onClick={this.add} className='plus'></button>
            </div>
        );
    }
}

export default Counter;