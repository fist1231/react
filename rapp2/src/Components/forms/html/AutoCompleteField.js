import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class AutoCompleteField extends Component {

  constructor(props) {
    super(props);
  }


/*
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
*/

  render() {
    return (
        <AutoComplete
          // hintText="Type anything"
          dataSource={this.props.dataSource}
          // onUpdateInput={this.handleUpdateInput}
          hintText={this.props.hintText}
          floatingLabelText={this.props.floatingLabelText}
          onChange={this.props.onChange}
          onUpdateInput={this.props.onUpdateInput}
          onBlur={this.props.onBlur}
          name={this.props.name}
          className={this.props.className}
          value={this.props.value}
          errorText={this.props.errorText}
      />
    );
  }
}
