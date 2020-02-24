import React, { Component } from 'react';
import './Voucher.css'

class Voucher extends Component {
    constructor(props){
        super(props)
        this.state={
            code: ''
        }
    }
    render() {
        let classList = '';
        let types = ['voucher']
        if(types.includes(this.props.type)){
            classList += `normal-${this.props.type}`
        }
        if(this.props.large){
            classList += 'large-voucher'
        }
        return (
            <form className={classList}>
                <input className='input' type="text"></input><input type='submit' className='submit'></input>
            </form>
        );
    }
}

export default Voucher;