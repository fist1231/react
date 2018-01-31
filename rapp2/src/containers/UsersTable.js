import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectUsersFilter, fetchUsersIfNeeded, invalidateUsersFilter } from '../actions/tableActions'
import Picker from '../components/Picker'
import DisplayTable from '../components/Table'

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
    const isEmpty = usersTable.length === 0
    // const isEmpty = usersLst === undefined

    return (
      <div>
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
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <DisplayTable usersLst={usersTable} />
                Test
                <ol>
                  {usersTable.map(usr => <li key={usr._id}>{usr.name} - {usr.id}</li>)}
                </ol>
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


UsersTable.propTypes = {
  selectedUsersFilter: PropTypes.string.isRequired,
  usersTable: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}


export default connect(mapStateToProps)(UsersTable);
