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

  return <div className="row mt-3">
    <div className="col-md-9">
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
    </div>
    <div className="col-md-1">
      <i className="fa fa-times" data-tip={tipText} onClick={onClearClick} style={{ position:'absolute', bottom:'13px' }} />
    </div>
    <ReactTooltip />
  </div>
}

// export default DateField;
