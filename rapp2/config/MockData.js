import React from 'react'
import moment from 'moment';

const numrows = 100;
var dte = moment();

export const usersMock = () => {
  var rows = [];
  for(var i=0; i<numrows; i++) {
    rows.push({ _id: `0000${i}`, NSPIRES_USER_ID: `0000${i}`, USERNAME: `alexis${i}`, FIRST_NAME: `Aristotl${String.fromCharCode(97 + i)}`, LAST_NAME: `Maximinus${String.fromCharCode(97 + i)}`, REGISTRATION_DATE: `${dte.subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}` });
  }
  return rows;

// return [
//   { _id: "00001", id: "00001", name: "User name-1", status: "Confirmed", created_date: "21/03/2012" },
// ]
}

export const solicitationsMock = () => {
  var rows = [];
  for(var i=0; i<numrows; i++) {
    rows.push({ _id: `9000${i}`, SOLICITATION_ID: `0000${i}`, SOLICITATION_NUMBER: `NN60SPG2015A${i}`, PUBLICATION_APPROVAL: 1, FISCAL_YEAR: `${1990+i}`,
    OMNIBUS_NUMBER: `OmniNumber ${i}`,
    TITLE: `Cassini Data Analysis and Participating Scientists ${i}`,
    REVIEW_DATE: '',
    // REVIEW_DATE: `${moment((dte).toString()).subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}`,
    SELECTION_DATE: `${dte.subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}`,
    RELEASE_DATE: `${dte.subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}`,
    CLOSE_DATE: `${dte.subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}`,
    ANNOUNCEMENT_TYPE: `Type-${i}`,
    CONTAINER_TYPE: `Container type-${i}`,
    AUTHORIZED_BY: `Authorized by ${i}`,
    WITHDRAWAL_REASON: `TReason number ${i}`,
    // WITHDRAWAL_DATE: `${moment(dte.subtract(i, 'months').subtract(i, 'days').format("MM/DD/YYYY")}`,
    WITHDRAWAL_DATE: '',
    WITHDRAWN_BY: `Withdrawer ${i}` });
  }
  return rows;

  // return [
  //   { id: "00001", acronym: "Acronym-1", title: "Solicitation Title 1" },
  // ]
}

export const reviewProposalsMock = () => {

  var rows = [];
  for(var i=0; i<numrows; i++) {
    rows.push({
      ASSIGNED_RESPONSE_ID: `000000${i}`,
      GENERATED_STATUS: `GENERATED_STATUS`,
      PANEL_ID: `999999${i}`,
      ACRONYM: `In-Space Propul ${i}`,
      RESPONSE_NUMBER: `11-11NIAC-100${i}`,
      RESPONSE_SEQ_NUMBER: `${i}`,
      NSPIRES_USER_ID: `id001${i}`,
      FIRST_NAME: `Robert${String.fromCharCode(97 + i)}`,
      LAST_NAME: `Baggi${String.fromCharCode(97 + i)}`,
      EVALUATION_FORM_ID: `formid456${i}`,
      QUESTIONNAIRE: `questionnaire ${i}`,
      EVALUATION_STATUS: `status ${i}`,
      GRADE: `grade ${i}`,
      SCORING_METHOD_ID: `smid0012${i}`,
      PANEL_PROPOSAL_ID: `propid987${i}`,
      PSTATE: `Submitted`,
      p_first_name: `p_first_name${i}`,
      p_last_name: `p_last_name${i}`,
      s_first_name: `s_first_name${i}`,
      s_last_name: `s_last_name${i}`,
      np_first_name: `np_first_name${i}`,
      np_last_name: `np_last_name${i}`
    });
  }
  return rows;

//  return [
//   { ASSIGNED_RESPONSE_ID: "11111", FIRST_NAME: "First1", LAST_NAME: "Last1", RESPONSE_NUMBER: "Number1", "RESPONSE_SEQ_NUMBER": "Sqe1", PSTATE: "Submitted"},
// ]
}

export const reviewProposalDetailsMock = () => {

  return { ASSIGNED_RESPONSE_ID: "11111", FIRST_NAME: "First1", LAST_NAME: "Last1", RESPONSE_NUMBER: "Number1", "RESPONSE_SEQ_NUMBER": "Sqe1", PSTATE: "Submitted"}

}




const MockData = () => {
}

export default MockData;
