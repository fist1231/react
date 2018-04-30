import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

const HelpButton = ({buttonText, buttonClick}) => (
  <div>
    <ReactTooltip />
    <i data-tip="Click me" className="fa fa-question-circle-o" onClick={buttonClick} style={{cursor:'help'}}> {buttonText}</i>
  </div>
)

export default HelpButton;
