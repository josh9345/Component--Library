import React, {Component} from 'react';
import './Email.css'

class Email extends Component{
    constructor(props){
        super(props)
        this.state={
            value: ''
        };
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        let email=e.target.value
        this.setState({value: email})
        console.log(email)
        
    }
    render(){
        
    
    let classList = '';
    let types = ['email']
    if(types.includes(this.props.type)){
        classList += `email-${this.props.type}`
    }
    if(this.props.large){
        classList += ' email-large'
    }
    if(this.props.Xlarge){
        classList += ' email-Xlarge'
    }

    

    return (
        <div>
            <p>Email</p>
            <input onChange={this.handleSubmit} input={this.state.value}type='text' placeholder={this.props.label} className={classList}></input>
        </div>
    );
    }
}

export default Email;