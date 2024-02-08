import React from 'react';
import logo from '../assets/investment-calculator-logo.png'
export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Logo showing money bank"></img>
      <h1>Investment Calculator</h1>
    </div>
  );
}
