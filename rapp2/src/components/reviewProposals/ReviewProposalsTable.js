import React, { Component } from 'react'
import Modal from 'react-modal';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
import EditModal from './EditModal'
import { NavLink as RRNavLink, Link } from 'react-router-dom'


var nT = (rowData, column) => {
  // console.log('------> rowData = ' + JSON.stringify(rowData));
//  console.log('------> column = ' + JSON.stringify(column));
  return <div>
      <Link to='/'>{rowData.RESPONSE_NUMBER}</Link>
  </div>;
}

const onEditClicked = (e, rd) => {
  console.log('Edit: ' + rd);
}

const onDeleteClicked = (e, rd) => {
  console.log('Delete: ' + rd);
}

var actionsTemplate = (rowData, column) => {
  console.log('------> rowData = ' + JSON.stringify(rowData));
  var rn = rowData.RESPONSE_NUMBER;
  return <div>
    <button onClick={(e) => onEditClicked(e, rowData.RESPONSE_NUMBER)}><i className='fa fa-edit'></i></button>
    <span>&nbsp;&nbsp;</span>
    <button onClick={(e) => onDeleteClicked(e, rowData.RESPONSE_NUMBER)}><i className='fa fa-trash'></i></button>
  </div>;
}


const reviewProposalsTable = ({list, filter, onSearch, numberTemplate}) => (

<div>
  <h1>Review Proposals</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="search searchfilter">
            <span className="fa fa-search"></span>
            <InputText className="form-control" type="search" onInput={e => onSearch({searchText: e.target.value, isOpenOnly:filter?filter.isOpenOnly:false}) } placeholder="Search Proposals" size="50"/>
          </div>
        </div>
      </div>

        <DataTable className="test1" value={list} paginator={true} rows={20} rowsPerPageOptions={[10,20,50,100,1000]}
          resizableColumns={true} columnResizeMode="fit" responsive={true} reorderableColumns={true} globalFilter={filter?filter.searchText:''}>
          <Column field="ASSIGNED_RESPONSE_ID" header="Id" sortable={true} />
          <Column body={nT} header="Response" sortable={true} />
          <Column field="RESPONSE_SEQ_NUMBER" header="Response Sequence" sortable={true} />
          <Column field="PSTATE" header="Status" sortable={true} />
          <Column field="FIRST_NAME" header="First name" sortable={true} />
          <Column field="LAST_NAME" header="Last name" sortable={true} />
          <Column body={actionsTemplate} header="Actions" sortable={false} />
        </DataTable>

    </div>

);

export default reviewProposalsTable;
