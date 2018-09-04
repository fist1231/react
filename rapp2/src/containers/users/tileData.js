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

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PermIdentityIcon />
      </ListItemIcon>
      <ListItemText primary="Change Username" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="Change Password" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VpnKeyIcon />
      </ListItemIcon>
      <ListItemText primary="Challenge Question" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationCityIcon />
      </ListItemIcon>
      <ListItemText primary="Address Book" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="Affiliations" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SubscriptionsIcon />
      </ListItemIcon>
      <ListItemText primary="Email Subscriptions" />
    </ListItem>
  </div>
);