import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectUsersFilter, fetchUsersIfNeeded, invalidateUsersFilter } from '../actions/tableActions'
import Picker from '../components/Picker'
import Table from '../components/Table'

class UsersTable extends Component {

  static propTypes = {
    selectedUsersFilter: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

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
    const { selectedUsersFilter, users, isFetching, lastUpdated } = this.props
    const isEmpty = users.length === 0

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
              <UsersTable users={users} />
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
    users: users
  } = usersByUsersFilter[selectedUsersFilter] || {
    isFetching: true,
    users: []
  }

  return {
    selectedUsersFilter,
    users,
    isFetching,
    lastUpdated
  }
}


export default connect(mapStateToProps)(UsersTable);
