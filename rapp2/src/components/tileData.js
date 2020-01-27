// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { NavLink as RRNavLink, Link } from 'react-router-dom'

const logout = () => {
  // const { dispatch, auth, history } = this.props;
  const authen = { loggedIn: "false", username: "" };
  localStorage.setItem("loggedIn", false);
  localStorage.setItem("username", "");
  // dispatch(setAuthOff());
  // history.push("/");
};

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Link to='/'><ListItemText primary="Dashboard" /></Link>
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Link to='/calendar'><ListItemText primary="Calendar" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <Link to='/usersTable'><ListItemText primary="Users" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <Link to='/solicitations'><ListItemText primary="Solicitations" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <Link to='/reviewProposals'><ListItemText primary="Review Proposals" /></Link>
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Tutorials" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <Link to="/" onClick={logout}>Logout</Link>
    </ListItem>
  </div>
);