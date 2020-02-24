import React from 'react';
import './Form.css'

function Form(props) {
    let classList = '';
    let types = ['Form']
    if(types.includes(props.type)){
        classList += `form-${props.type}`
    }
    if(props.large){
        classList += ' form-large'
    }
    if(props.Xlarge){
        classList += ' form-Xlarge'
    }
    if(props.fade){
        classList += ' form-faded'
    }
    return (
        <select className={classList}>
            <option>{props.options[0]}</option>
            <option>{props.options[1]}</option>
            <option>{props.options[2]}</option>
        </select>
    );
}

export default Form;