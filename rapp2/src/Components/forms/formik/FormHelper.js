import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from 'material-ui/MenuItem';


export const announcementTypeItems = [
  <MenuItem key={1} value="NRA" primaryText="NRA" />,
  <MenuItem key={2} value="AO" primaryText="AO" />,
  <MenuItem key={3} value="CAN" primaryText="CAN" />,
  <MenuItem key={4} value="AN" primaryText="AN" />,
  <MenuItem key={5} value="RFI" primaryText="RFI" />,
  <MenuItem key={6} value="OTHER" primaryText="OTHER" />,
];


export const containerTypeItems = [
  <MenuItem key={1} value="Standalone" primaryText="Standalone" />,
  <MenuItem key={2} value="Omnibus" primaryText="Omnibus" />,
  <MenuItem key={3} value="Program Element" primaryText="Program Element" />,
];

export const omnibusAutocomplete = [
  '0619OMNI',
  'NNH017ZNRA1211O',
  'NNH1405041O',
  'NASA2012',
  'OMNI12NNMSN',
  'OMNI15SOLNN1111'
];
