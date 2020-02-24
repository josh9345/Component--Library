import React, { Component } from 'react';
import './CheckBox.css'

class CheckBox extends Component {
    constructor(props){
        super(props)
    }
    render() {
       let classList='checkBox'
       let types=['checkbox']
       if(this.props.black){
           classList += ' checkBox-black'
       }
        return (
            <div>
                <input className={classList} type='checkbox'></input>
            </div>
        );
    }
}

export default CheckBox;