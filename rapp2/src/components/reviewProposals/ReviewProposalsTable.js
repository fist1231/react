import React, { Component } from 'react'
import Modal from 'react-modal';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';


const reviewProposalsTable = ({list, filter, onSearch}) => (

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
          <Column field="RESPONSE_NUMBER" header="Response" sortable={true} />
          <Column field="RESPONSE_SEQ_NUMBER" header="Response Sequence" sortable={true} />
          <Column field="PSTATE" header="Status" sortable={true} />
          <Column field="FIRST_NAME" header="First name" sortable={true} />
          <Column field="LAST_NAME" header="Last name" sortable={true} />
        </DataTable>

    </div>

);

export default reviewProposalsTable;
