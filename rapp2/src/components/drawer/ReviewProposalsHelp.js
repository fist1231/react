import React, { Component } from 'react';

const ReviewProposalsHelpContent = () => (
  <ol>
    <li>Search by all columns data</li>
    <li>Reorder rows by dragging first icon of each row</li>
    <li>Quick preview by mouse-over the 'eye' icon</li>
    <li>Export table to CSV format for Excel by clicking 'Excel'</li>
    <li>Select row by clicking on it. Right-click for context menu</li>
    <li>In-place editing for Response Status, First and Last name column data</li>
    <li>To rearrange columns, drag by the column header</li>
    <li>To resize column, rest the mouse pointer on the header boundary until it becomes a resize pointer, and then drag the boundary.</li>
    <li>Live data from Oracle Beta Review Proposals table</li>
    <li>Edit/Delete operations do not propagate to the underlying database, since it is a live Beta data</li>
    <li>Hide these Tips by clicking Get Help button again</li>
  </ol>
)

export default ReviewProposalsHelpContent;
