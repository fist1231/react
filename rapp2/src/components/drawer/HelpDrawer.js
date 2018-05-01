import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import 'font-awesome/css/font-awesome.min.css';
import './drawer.css'

export default class HelpDrawer extends Component {

  constructor(props) {
    super(props);
    this.onToggleChange = this.props.onToggleChange.bind(this);

  }

  // handleToggle = () => this.setState({open: !this.state.open});
  handleClick = () => {
    this.onToggleChange()
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Drawer width={350} openSecondary={true} open={this.props.toggled} className="usageTipsContainer">
            <AppBar
              title="Usage Tips"
              className="usageTips"
              onLeftIconButtonClick={this.handleClick}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            />
              { this.props.children }
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}
