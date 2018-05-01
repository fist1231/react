import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import 'font-awesome/css/font-awesome.min.css';

const HelpButton = ({buttonText, buttonClick}) => (
<div className="helpBtnWrapper">
  <div className="helpBtnContainer">
    <ReactTooltip />
    <i data-tip="Click me" className="btn btn-link helpBtn" onClick={buttonClick} style={{cursor:'help'}}> {buttonText}</i>
  </div>
  </div>
)

export default HelpButton;
