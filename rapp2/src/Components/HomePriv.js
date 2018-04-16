
import React, { Component } from "react";
import {
  usersMock,
  solicitationsMock,
  reviewProposalsMock
} from "../../config/MockData.js";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { RingLoader, GridLoader, FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
import HomeCalendar from "./calendar/HomeCalendar";
import HomeTabs from "./homeTabs";

const Users = props => {
  return props.data.length ? (
    <BootstrapTable
      className="table nspiresTable"
      data={props.data}
      striped
      hover
    >
      <TableHeaderColumn dataField="_id" isKey dataSort>
        User
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort>
        Name
      </TableHeaderColumn>
      <TableHeaderColumn dataField="status" dataSort>
        Status
      </TableHeaderColumn>
    </BootstrapTable>
  ) : (
    <div className="row">
      <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
    </div>
  );
};

const Solicitations = props => {
  return props.data.length ? (
    <BootstrapTable
      className="table nspiresTable"
      data={props.data}
      striped
      hover
    >
      <TableHeaderColumn dataField="SOLICITATION_NUMBER" isKey dataSort>
        Number
      </TableHeaderColumn>
      <TableHeaderColumn dataField="RELEASE_DATE" dataSort>
        Release
      </TableHeaderColumn>
      <TableHeaderColumn dataField="CLOSE_DATE" dataSort>
        Close
      </TableHeaderColumn>
    </BootstrapTable>
  ) : (
    <div className="row">
      <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
    </div>
  );
};

const Proposals = props => {
  return props.data.length ? (
    <BootstrapTable
      className="table nspiresTable"
      data={props.data}
      striped
      hover
    >
      <TableHeaderColumn dataField="RESPONSE_NUMBER" isKey dataSort>
        Number
      </TableHeaderColumn>
      <TableHeaderColumn dataField="PSTATE" dataSort>
        Status
      </TableHeaderColumn>
      <TableHeaderColumn dataField="LAST_NAME" dataSort>
        PI
      </TableHeaderColumn>
    </BootstrapTable>
  ) : (
    <div className="row">
      <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
    </div>
  );
};

class HomePriv extends Component {
  getDelayedData(data, delayInMilliseconds) {
    setTimeout(() => {
      switch (data) {
        case "solicitationsData": {
          this.setState({
            ...this.state,
            solicitationsData: solicitationsMock().slice(0, 5)
          });
          break;
        }
        case "usersData": {
          this.setState({
            ...this.state,
            usersData: usersMock().slice(0, 3)
          });
          break;
        }
        case "proposalsData": {
          this.setState({
            ...this.state,
            proposalsData: reviewProposalsMock().slice(0, 3)
          });
          break;
        }
        default: {
          break;
        }
      }
    }, delayInMilliseconds);
  }

  constructor(props) {
    super(props);
    this.users = new Array();
    this.solicitations = new Array();
    this.proposals = new Array();
    this.state = {
      usersData: this.users,
      solicitationsData: this.solicitations,
      proposalsData: this.proposals
    };
  }

  componentDidMount() {
    this.getDelayedData("solicitationsData", 1000);
    this.getDelayedData("usersData", 4000);
    this.getDelayedData("proposalsData", 2000);
  }

  render() {
    // console.log('~~~~state=' + JSON.stringify(this.state));
    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Welcome to NSPIRES Dr. Fred Smith</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col">
                <div className="homePanel">
                  <HomeTabs />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="homePanelBox">
                  <h4>Solicitation Management</h4>
                  <div>
                    <Link to="/solicitations">Solicitations</Link>
                  </div>
                  <div>
                    <Solicitations data={this.state.solicitationsData} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="homePanelBox">
                  <h4>Proposal Management</h4>
                  <div>
                    <Link to="/reviewProposals">Proposals</Link>
                  </div>
                  <div>
                    <Proposals data={this.state.proposalsData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <div className="homePanelBox">
                  <h4>Events Calendar</h4>
                  <div className="calendarContainer">
                    <HomeCalendar />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="homePanelBox">
                  <h4>User Data</h4>
                  <Users data={this.state.usersData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 homeSideInfo">
            <div className="loginInfo">
              <p>Last Login:</p>
              <p>Jun 01, 2016 10:24 EDT</p>
            </div>
            <h3>NSPIRES Home</h3>

            <ul className="list-group homeLinkList">
              <li className="list-group-item">
                <a href="#">Solicitations</a>
              </li>
              <li className="list-group-item">
                <a href="#">Selected Proposals</a>
              </li>
            </ul>
            <h3>Getting Started</h3>
            <ul className="list-group homeLinkList">
              <li className="list-group-item">
                <a href="#">What is NSPIRES?</a>
              </li>
              <li className="list-group-item">
                <a href="#">Getting an Account</a>
              </li>
              <li className="list-group-item">
                <a href="#">Using NSPIRES</a>
              </li>
            </ul>
            <h3>
              <a href="#">
                <i className="fa fa-external-link-square" />NASA Web Sites
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePriv;
