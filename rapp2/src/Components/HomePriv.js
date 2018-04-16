import React, { Component } from 'react'
import { usersMock, solicitationsMock, reviewProposalsMock } from '../../config/MockData.js'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { RingLoader, GridLoader, FadeLoader } from 'react-spinners';
import { Link } from 'react-router-dom'
import HomeCalendar from './calendar/HomeCalendar'

import {HorizontalBar} from 'react-chartjs-2'
// import {Bar} from 'react-chartjs-2'

const Users = (props) => {

      const columns = [{
        dataField: '_id',
          text: 'Id',
          sort: true
        }, {
          dataField: 'name',
          text: 'Name',
          sort: true
        }, {
          dataField: 'status',
          text: 'Status',
          sort: true
      }];


      return (
          props.data.length ? (
            <BootstrapTable keyField='_id' data={ props.data } columns={ columns } striped hover condensed />
/*
            <BootstrapTable className="table nspiresTable"
              data={props.data}
              striped hover>
              <TableHeaderColumn dataField='_id' isKey dataSort>User</TableHeaderColumn>
              <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn>
            </BootstrapTable>
*/
        ) : (
          <div>
            <GridLoader
              color={'#123abc'}
              loading={true}
            />
          </div>
        )
      )
}

const Solicitations = (props) => {
      const columns = [{
        dataField: 'SOLICITATION_NUMBER',
          text: 'Number',
          sort: true
        }, {
          dataField: 'RELEASE_DATE',
          text: 'Release',
          sort: true
        }, {
          dataField: 'CLOSE_DATE',
          text: 'Close',
          sort: true
      }];
      return (
          props.data.length ? (
            <BootstrapTable keyField='SOLICITATION_ID' data={ props.data } columns={ columns } striped hover condensed />
/*

          <BootstrapTable className="table nspiresTable"
            data={props.data}
            striped hover>
            <TableHeaderColumn dataField='SOLICITATION_NUMBER' isKey dataSort>Number</TableHeaderColumn>
            <TableHeaderColumn dataField='RELEASE_DATE' dataSort>Release</TableHeaderColumn>
            <TableHeaderColumn dataField='CLOSE_DATE' dataSort>Close</TableHeaderColumn>
          </BootstrapTable>
*/
      ) : (
        <div>
          <RingLoader
            color={'#123abc'}
            loading={true}
          />
        </div>
      )
    )
}

const Proposals = (props) => {
      const columns = [{
        dataField: 'RESPONSE_NUMBER',
          text: 'Number',
          sort: true
        }, {
          dataField: 'PSTATE',
          text: 'Status',
          sort: true
        }, {
          dataField: 'LAST_NAME',
          text: 'PI',
          sort: true
      }];
      return (
          props.data.length ? (
            <BootstrapTable keyField='ASSIGNED_RESPONSE_ID' data={ props.data } columns={ columns } striped hover condensed />
/*
          <BootstrapTable className="table nspiresTable"
            data={props.data}
            striped hover>
            <TableHeaderColumn dataField='RESPONSE_NUMBER' isKey dataSort>Number</TableHeaderColumn>
            <TableHeaderColumn dataField='PSTATE' dataSort>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='LAST_NAME' dataSort>PI</TableHeaderColumn>
          </BootstrapTable>
*/
      ) : (
        <div>
          <FadeLoader
            color={'#123abc'}
            loading={true}
          />
        </div>
      )
    )
}

const data = {
  labels: ['Apr 18', 'Mar 18', 'Feb 18', 'Jan 18', 'Dec 17', 'Nov 17', 'Oct 17', 'Sep 17', 'Aug 17', 'Jul 17', 'Jun 17'],
  datasets: [
    {
      label: 'Proposals Submitted in 2017/2018',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [752, 1466, 1538, 1129, 528, 1735, 911, 1318, 1100, 906, 1501 ]
    }
  ]
};

class HomePriv extends Component {

  getDelayedData(data, delayInMilliseconds) {

    setTimeout(() => {
      switch (data) {
        case "solicitationsData": {
          this.setState({
            ...this.state,
            solicitationsData: solicitationsMock().slice(0,10)
          });
          break;
        }
        case "usersData": {
          this.setState({
            ...this.state,
            usersData: usersMock().slice(0,10)
          });
          break;
        }
        case "proposalsData": {
          this.setState({
            ...this.state,
            proposalsData: reviewProposalsMock().slice(0,10)
          });
          break;
        }
        default: {break;}
      }
    }, delayInMilliseconds)
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
    this.getDelayedData('solicitationsData', 1000);
    this.getDelayedData('usersData', 4000);
    this.getDelayedData('proposalsData', 2000);
  }

  render() {
    // console.log('~~~~state=' + JSON.stringify(this.state));
    return (
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-sm border border-primary">
            <HomeCalendar />
          </div>
          <div className="col-sm border border-primary">
            <div className="m-3">
              <p>The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research.[note 1]</p>
              <p>President Dwight D. Eisenhower established NASA in 1958[10] with a distinctly civilian (rather than military) orientation encouraging peaceful applications in space science. The National Aeronautics and Space Act was passed on July 29, 1958, disestablishing NASA's predecessor, the National Advisory Committee for Aeronautics (NACA). The new agency became operational on October 1, 1958.[11][12]</p>
              <p>Since that time, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. Currently, NASA is supporting the International Space Station and is overseeing the development of the Orion Multi-Purpose Crew Vehicle, the Space Launch System and Commercial Crew vehicles. The agency is also responsible for the Launch Services Program (LSP) which provides oversight of launch operations and countdown management for unmanned NASA launches.</p>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-sm border border-primary">
              <div style={{border:'1px solid #000'}}>
                <div><Link to='/solicitations'>Solicitations</Link></div>
                <div>
                  <Solicitations data={this.state.solicitationsData} />
                </div>
              </div>
          </div>
          <div className="col-sm border">
            <div style={{border:'1px solid #000'}}>
              <div><Link to='/usersTable'>Users</Link></div>
              <div>
                <Users data={this.state.usersData} />
              </div>
            </div>
          </div>

          <div className="m-3">
            <p>NASA science is focused on better understanding Earth through the Earth Observing System,[13] advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program,[14] exploring bodies throughout the Solar System with advanced robotic spacecraft missions such as New Horizons,[15] and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated programs.[16] NASA shares data with various national and international organizations such as from the Greenhouse Gases Observing Satellite.</p>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-sm border">
            <h2>Proposals Submitted</h2>
            <HorizontalBar data={data} />
            {/* <Bar data={data} /> */}
          </div>
          <div className="col-sm border">
            <h2>Proposals Data</h2>
            <div style={{border:'0px solid #000'}}>
              <div><Link to='/reviewProposals'>Proposals</Link></div>
              <div>
                <Proposals data={this.state.proposalsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default HomePriv
