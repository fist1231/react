import React from 'react'
import moment from 'moment';

const numrows = 100;

export const usersMock = () => {
  var rows = [];
  var dte = new Date();

  for(var i=0; i<numrows; i++) {
    rows.push({ _id: `0000${i}`, id: `0000${i}`, name: `User name-${i}`, status: `Confirmed${i}`, created_date: `${moment((dte).toString()).subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}` });
  }
  return rows;

// return [
//   { _id: "00001", id: "00001", name: "User name-1", status: "Confirmed", created_date: "21/03/2012" },
// ]
}

export const solicitationsMock = () => {
  var rows = [];
  for(var i=0; i<numrows; i++) {
    rows.push({ id: `0000${i}`, acronym: `Acronym-${i}`, title: `Solicitation Title ${i}` });
  }
  return rows;

  // return [
  //   { id: "00001", acronym: "Acronym-1", title: "Solicitation Title 1" },
  // ]
}

export const reviewProposalsMock = () => {

  var rows = [];
  for(var i=0; i<numrows; i++) {
    rows.push({ ASSIGNED_RESPONSE_ID: `000000${i}`, FIRST_NAME: `First-${i}`, LAST_NAME: `Last-${i}`, RESPONSE_NUMBER: `Number${i}`, RESPONSE_SEQ_NUMBER: `Seq-${i}`, PSTATE: `Status${i}` });
  }
  return rows;

//  return [
//   { ASSIGNED_RESPONSE_ID: "11111", FIRST_NAME: "First1", LAST_NAME: "Last1", RESPONSE_NUMBER: "Number1", "RESPONSE_SEQ_NUMBER": "Sqe1", PSTATE: "Submitted"},
// ]
}

const MockData = () => {
}

export default MockData;
