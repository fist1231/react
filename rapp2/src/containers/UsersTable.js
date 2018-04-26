import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectUsersFilter, fetchUsersIfNeeded, invalidateUsersFilter } from '../actions/tableActions'
import Picker from '../components/Picker'
import DisplayTable from '../components/Table'
import config from '../../config/config.json'
import { usersMock } from '../../config/MockData.js'
import { withRouter } from 'react-router-dom'
import Search from '../components/solicitations/Search'

class UsersTable extends Component {


  componentDidMount() {
    const { dispatch, selectedUsersFilter } = this.props
    dispatch(fetchUsersIfNeeded(selectedUsersFilter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUsersFilter !== this.props.selectedUsersFilter) {
      const { dispatch, selectedUsersFilter } = nextProps
      dispatch(fetchUsersIfNeeded(selectedUsersFilter))
    }
  }

handleChange = nextUsersFilter => {
  this.props.dispatch(selectUsersFilter(nextUsersFilter))
}

handleRefreshClick = e => {
  e.preventDefault()

  const { dispatch, selectedUsersFilter } = this.props
  dispatch(invalidateUsersFilter(selectedUsersFilter))
  dispatch(fetchUsersIfNeeded(selectedUsersFilter))
}

  render() {

    const { selectedUsersFilter, usersTable, isFetching, lastUpdated } = this.props

    const isLiveData = config.live_data;

    const dataSource = isLiveData?usersTable:usersMock();

//    const isEmpty = usersTable.length === 0
    const isEmpty = dataSource.length === 0
    // const isEmpty = usersLst === undefined




    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col">
      <h1>Users</h1>
      </div>
      </div>
{/*
        <Picker value={selectedUsersFilter}
                onChange={this.handleChange}
                options={[ 'SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_DISABLED' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
          }
        </p>
*/}
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div className="row">
          <div className="col">

                {/*<Search value={selectedUsersFilter} onChange={this.props.onSearchChange}  />*/}
                <DisplayTable usersLst={dataSource} />
{/*

                <hr />
                <table className="table">
                  <tbody>
                    {dataSource.map(usr => <tr key={usr._id}><td>{usr.name}</td><td>{usr.id}</td><td>{usr.status}</td><td>{usr.created_date}</td></tr>)}
                  </tbody>
                </table>
                */}
                </div>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedUsersFilter, usersByUsersFilter } = state
  const {
    isFetching,
    lastUpdated,
    usersTable: usersTable
  } = usersByUsersFilter[selectedUsersFilter] || {
    isFetching: true,
    usersTable: []
  }

  return {
    selectedUsersFilter,
    usersTable,
    isFetching,
    lastUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSearchChange:filter => dispatch(selectUsersFilter(filter)),
})

UsersTable.propTypes = {
  selectedUsersFilter: PropTypes.string.isRequired,
  usersTable: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersTable));
