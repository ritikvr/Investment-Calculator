import React from "react";
import './header.css';
import logo from './../../images/investment-calculator-logo.png';

function header(){
    return <div className="header">
        <img src={logo} alt=""></img>
        <h1>Investment Calculator</h1>
    </div>
}

export default header;