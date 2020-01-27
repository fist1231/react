import React, { Component } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import {
  usersMock,
  solicitationsMock,
  reviewProposalsMock
} from "../../config/MockData.js";
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { RingLoader, GridLoader, FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
import HomeCalendar from "./calendar/HomeCalendar";
import ProposalsChart from "./charts/ProposalsChart";
import HomeTabs from "./homeTabs";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("origLayout");

const Users = props => {
  const columns = [
    {
      dataField: "_id",
      text: "Id",
      sort: true
    },
    {
      dataField: "name",
      text: "Name",
      sort: true
    },
    {
      dataField: "status",
      text: "Status",
      sort: true
    }
  ];

  return props.data.length ? (
    <BootstrapTable
      keyField="_id"
      data={props.data}
      columns={columns}
      striped
      hover
      condensed
    />
  ) : (
    /*
            <BootstrapTable className="table nspiresTable"
              data={props.data}
              striped hover>
              <TableHeaderColumn dataField='_id' isKey dataSort>User</TableHeaderColumn>
              <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn>
            </BootstrapTable>
*/
<div className="row">
  <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
</div>
  );
};

const Solicitations = props => {
  const columns = [
    {
      dataField: "SOLICITATION_NUMBER",
      text: "Number",
      sort: true
    },
    {
      dataField: "RELEASE_DATE",
      text: "Release",
      sort: true
    },
    {
      dataField: "CLOSE_DATE",
      text: "Close",
      sort: true
    }
  ];
  return props.data.length ? (
    <BootstrapTable
      keyField="SOLICITATION_ID"
      data={props.data}
      columns={columns}
      striped
      hover
      condensed
    />
  ) : (
    /*

          <BootstrapTable className="table nspiresTable"
            data={props.data}
            striped hover>
            <TableHeaderColumn dataField='SOLICITATION_NUMBER' isKey dataSort>Number</TableHeaderColumn>
            <TableHeaderColumn dataField='RELEASE_DATE' dataSort>Release</TableHeaderColumn>
            <TableHeaderColumn dataField='CLOSE_DATE' dataSort>Close</TableHeaderColumn>
          </BootstrapTable>
*/
<div className="row">
  <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
</div>
  );
};

const Proposals = props => {
  const columns = [
    {
      dataField: "RESPONSE_NUMBER",
      text: "Number",
      sort: true
    },
    {
      dataField: "LAST_NAME",
      text: "PI",
      sort: true
    },
    {
      dataField: "ACRONYM",
      text: "Panel",
      sort: true
    }
  ];
  return props.data.length ? (
    <BootstrapTable
      keyField="ASSIGNED_RESPONSE_ID"
      data={props.data}
      columns={columns}
      striped
      hover
      condensed
    />
  ) : (
    /*
          <BootstrapTable className="table nspiresTable"
            data={props.data}
            striped hover>
            <TableHeaderColumn dataField='RESPONSE_NUMBER' isKey dataSort>Number</TableHeaderColumn>
            <TableHeaderColumn dataField='PSTATE' dataSort>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='LAST_NAME' dataSort>PI</TableHeaderColumn>
          </BootstrapTable>
*/
<div className="row">
  <div className="col-md-5 offset-md-3 text-center loader"><FadeLoader color={"#0275d8"} loading={true} /></div>
</div>
  );
};

class HomePriv extends Component {

  static defaultProps = {
    className: "layout",
    items: 5,
    rowHeight: 102,
   // onLayoutChange: function() {console.log('#### onLayoutChange222');},
    cols: 4
  };


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
            usersData: usersMock().slice(0, 5)
          });
          break;
        }
        case "proposalsData": {
          this.setState({
            ...this.state,
            proposalsData: reviewProposalsMock().slice(0, 5)
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
    
    // const layout = this.generateLayout();
    var layout = getFromLS("origLayout");
        console.log('layout='+layout);

    if(!layout) {

      console.log('calling genLayout');
      layout = genLayout();
        console.log('layout='+layout);
    }

    this.state = {
      usersData: this.users,
      solicitationsData: this.solicitations,
      proposalsData: this.proposals,
      layout
    };
  }

  componentDidMount() {
    this.getDelayedData("solicitationsData", 1000);
    this.getDelayedData("usersData", 4000);
    this.getDelayedData("proposalsData", 2000);
  }


  generateDOM() {
    return [
      <div key={"0"}>
        <div className="homePanelBox">
          <HomeTabs />
        </div>
      </div>,
      <div key={"1"}>
                <div className="homePanelBox">
                  <h4>
                    Events Calendar{" "}
                    <span className="float-right homePanelLink">
                      <Link to="/calendar">
                        <i className="fa fa-file-text-o" aria-hidden="true" />view
                      </Link>
                    </span>

                  </h4>
                  <div className="dataTableContainer">
                    <HomeCalendar windowMode={true} />
                  </div>
                </div>
      </div>,
      <div key={"2"}>
        <div className="homePanelBox">
          <h4>
            Solicitations{" "}
            <span className="float-right homePanelLink">
              <Link to="/solicitations">
                <i className="fa fa-file-text-o" aria-hidden="true" />view
              </Link>
            </span>
          </h4>

          <div className="dataTableContainer">
            <Solicitations data={this.state.solicitationsData} />
          </div>
        </div>
      </div>,
      <div key={"3"}>
              <div className="homePanelBox">
                <h4>
                  Proposals{" "}
                  <span className="float-right homePanelLink">
                    <Link to="/reviewProposals">
                      <i className="fa fa-file-text-o" aria-hidden="true" />view
                    </Link>
                  </span>
                </h4>
                <div className="dataTableContainer">
                  <Proposals data={this.state.proposalsData} />
                </div>
              </div>
      </div>,
      <div key={"4"}>
              <div className="homePanelBox">
                <h4>Submitted Proposals</h4>
                <ProposalsChart />
              </div>
      </div>,
    ];
  }


/*
  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      // const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      const y = 4;
      console.log(` ${i}: [ ${(i * 2) % 4}, ${Math.floor(i / 2) * y}, 2, ${y} ]`);
      return {
        x: (i * 2) % 4,
        y: Math.floor(i / 2) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }
*/
  generateLayout() {
    const layt = 
    [
      {
        x: 0,
        y: 0,
        w: 2,
        h: 3,
        i: "0",
        minH: 3
      },
      {
        x: 2,
        y: 0,
        w: 2,
        h: 4,
        i: "1",
        minH: 4
      },
      {
        x: 0,
        y: 3,
        w: 2,
        h: 3,
        i: "2",
        minH: 3
      },
      {
        x: 2,
        y: 4,
        w: 2,
        h: 3,
        i: "3",
        minH: 3
      },
      {
        x: 0,
        y: 5,
        w: 2,
        h: 4,
        i: "4",
        minH: 4
      }
    ];
    return layt;
  }


  onLayoutChange(layout) {
    console.log('onLayoutChange called');
    saveToLS("origLayout", layout);
    this.setState({
      ...this.state,
      layout
    });
    // console.log('~~~~state=' + JSON.stringify(this.state));

    // this.props.onLayoutChange(layout);

  }

  render() {
    // console.log('~~~~state=' + JSON.stringify(this.state));
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-10">
            <ReactGridLayout
              layout={this.state.layout}
              onLayoutChange={(layout) =>
                this.onLayoutChange(layout)
              }
              {...this.props}
            >
              {this.generateDOM()}
            </ReactGridLayout>
          </div>


          <div className="col-md-2 homeSideInfo">

            <div className="loginInfo">
              <p>Last Login:</p>
                <p><i className="fa fa-user-circle" /> {localStorage.getItem("username")}</p>
              <small>03/20/2018 10:24 EDT</small>
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

function getFromLS(key) {
   console.log('getFromLS called with key='+key);

  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
    console.log('saveToLS called with key='+key+'; value='+value);

  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

function  genLayout() {
  console.log('genLayout called');
    const layt = 
    [
      {
        x: 0,
        y: 0,
        w: 2,
        h: 3,
        i: "0",
        minH: 3
      },
      {
        x: 2,
        y: 0,
        w: 2,
        h: 4,
        i: "1",
        minH: 4
      },
      {
        x: 0,
        y: 3,
        w: 2,
        h: 3,
        i: "2",
        minH: 3
      },
      {
        x: 2,
        y: 4,
        w: 2,
        h: 3,
        i: "3",
        minH: 3
      },
      {
        x: 0,
        y: 5,
        w: 2,
        h: 4,
        i: "4",
        minH: 4
      }
    ];
    return layt;
  }
