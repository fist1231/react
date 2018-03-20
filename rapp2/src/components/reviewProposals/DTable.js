import React, { Component } from 'react'
import Modal from 'react-modal';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';

import { connect } from 'react-redux'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const handleInput = (e) => {
  searchFilter?searchFilter.searchText = e.target.value:searchFilter;
  console.log('searchFilter.searchText = ' + searchFilter.searchText);
}

const DTable = ({reviewProposals, searchFilter, onChange}) => (



      <div>
        <div style={{'textAlign':'left'}}>
                       <i className="fa fa-search" style={{margin:'4px 4px 0 0'}}></i>
                       <InputText type="search" onInput={(e) => {if(searchFilter) searchFilter.searchText = e.target.value} } placeholder="Global Search" size="50"/>
                   </div>
        aaaaaaaaaaaa = {searchFilter?searchFilter.searchText:''}
        <DataTable value={reviewProposals} paginator={true} rows={50} rowsPerPageOptions={[10,20,50,100,1000]}
          resizableColumns={true} columnResizeMode="fit" responsive={true} reorderableColumns={true} globalFilter={searchFilter?searchFilter.searchText:''}>
          <Column field="ASSIGNED_RESPONSE_ID" header="Id" sortable={true} />
          <Column field="UPLOADED_BY" header="Uploaded" sortable={true} filter={true} />
          <Column field="UPLOADED_DATE" header="Uploaded Date" sortable={true} />
        </DataTable>

      </div>

);

export default DTable;
