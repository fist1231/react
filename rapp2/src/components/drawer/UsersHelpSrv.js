import React, { Component } from 'react';

import config from '../../../config/config.json'
import axios from 'axios';


class UsersHelpSrv extends Component {

  constructor(props) {
    super(props);
    this.state = {helpIts: []};
    this.helpItems = this.helpItems.bind(this);
  }

  componentDidMount() {
    this.helpItems();
  }

  helpItems = () => {
    axios
      .get(`${config.gateway_address}help/search/USERS`)
      .then(response => {
        console.log('********** UsersHelpSrv: users help result:' + JSON.stringify(response.data.items));
        response.json(response.data);
        this.setState({helpIts: response.data.map((x) => x.dh_text)});
        // response.data.items;
      })
      .catch(error => {
        console.log('********** UsersHelpSrv: users help error:' + error);
      });
  }


  render() {

    return <ol>
      { !this.state.helpIts ? 'loading ...'
        :
        this.state.helpIts.map(item => <li>{item}</li>)
      }
    </ol>;
  }

}

export default UsersHelpSrv;
