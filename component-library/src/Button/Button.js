import React from 'react';
import './Button.css'

function Button(props) {
    let classList = '';
    let types = ['primary', 'danger', 'success', 'warning','primary-outline','danger-outline','success-outline','warning-outline','faded-primary','faded-danger','faded-success','faded-warning','cart','add-cart','favorite','add-favorite']
    if(types.includes(props.type)){
        classList += `button-${props.type}`
    }
    return (
    <button className={classList}>{props.label}</button>
    );
}

export default Button;