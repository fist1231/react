import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectUsersFilter, fetchUsersIfNeeded, invalidateUsersFilter, updateUserData } from '../../actions/userActions'
import Picker from '../../components/picker/Picker'
import UsersTable from '../../components/users/UsersTable'
import config from '../../../config/config.json'
import { usersMock } from '../../../config/MockData.js'
import { withRouter } from 'react-router-dom'
import Search from '../../components/search/Search'
import HelpDrawer from '../../components/drawer/HelpDrawer'
import HelpButton from '../../components/drawer/HelpButton'
import UsersHelpContent from '../../components/drawer/UsersHelpSrv'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';


const drawerWidth = 260;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 400,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'box',
    width: '70%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 0,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    width: '70%',
  },
});

class UsersTableView extends Component {

  constructor(props) {
    super(props);
    this.state = {...this.state, open: false, anchor: 'left'};
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
    this.setState({
      ...this.state, 
      anchor: event.target.value,
    });
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedUsersFilter } = this.props
    dispatch(invalidateUsersFilter(selectedUsersFilter))
    dispatch(fetchUsersIfNeeded(selectedUsersFilter))
  }

  handleToggle = () => this.setState({...this.state, open: !this.state.open});


  render() {

    const { selectedUsersFilter, usersTable, isFetching, lastUpdated, classes } = this.props

    const isLiveData = config.live_data;

    const dataSource = isLiveData?usersTable:usersMock();

//    const isEmpty = usersTable.length === 0
    const isEmpty = dataSource.length === 0
    // const isEmpty = usersLst === undefined

    // const { classes } = this.props;
    const { anchor } = this.state;



    return (
<div className="">
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
        {/* {isEmpty
          // ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          ? <h2>Loading...</h2> : */}
        <div className="row">
          <div className="">
                <Drawer
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  anchor={anchor}
                >
                  <div className={classes.toolbar} />
                  <Divider />
                  <List>{mailFolderListItems}</List>
                  <Divider />
                  <List>{otherMailFolderListItems}</List>
                </Drawer>
          </div>

          <div className={classes.content}>
                <Search searchFilter={selectedUsersFilter} onChange={this.props.onSearchChange}  />
                {/*<HelpButton buttonText={"Help"} buttonClick={this.handleToggle} styles={{ position: 'relative' }} />*/}
                <UsersTable usersLst={dataSource} filter={selectedUsersFilter}  onEditUser={this.props.onEditUser} />
                <HelpDrawer toggled={this.state.open} onToggleChange={this.handleToggle}>
                  <UsersHelpContent />
                </HelpDrawer>
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
        {/* } */}
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
  onEditUser:(user, filter) => dispatch(updateUserData(user, filter)),
})

UsersTableView.propTypes = {
  selectedUsersFilter: PropTypes.string.isRequired,
  usersTable: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}


export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UsersTableView)));
