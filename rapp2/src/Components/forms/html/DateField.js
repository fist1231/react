import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import DatePicker from 'material-ui/DatePicker';


export const DateField = ({hintText, formatDate, name, floatingLabelText, className, onChange, onBlur, value, errorText, onClearClick, setFieldValue, autoOk, openToYearSelection, container}) => {
  var tipText = "Clear " + floatingLabelText;

  const _handleDateChange = (event, value, field) => {
    // console.log('~~~~~~~~~~~~~ _handleDateChange='+value);
    // console.log('~~~~~~~~~~~~~ _handleDateChange field='+field);
    setFieldValue(field, value);
  };

  return <div>

    <div className="" style={{ position:'relative' }}>
      <DatePicker
        hintText={hintText}
        formatDate={formatDate}
        name={name}
        floatingLabelText={floatingLabelText}
        className={className}
        onChange={(e, val) => _handleDateChange(e, val, name)}
        onBlur={onBlur}
        value={value}
        errorText={errorText}
        autoOk={autoOk}
        openToYearSelection={openToYearSelection}
        container={container}
      />

      <div className="">
        <i className="fa fa-remove" data-tip={tipText} onClick={onClearClick} style={{ position:'absolute',color:"#ccc",   top: '40px',
      height: '20px',    left: '220px' }} />
      </div>
    </div>

    <ReactTooltip />
  </div>
}

// export default DateField;
