import React, { Component } from 'react'
import Modal from 'react-modal';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
// import EditModal from './EditModal'
import { NavLink as RRNavLink, Link } from 'react-router-dom'
import styled from 'styled-components';
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
import {ContextMenu} from 'primereact/components/contextmenu/ContextMenu';


const reviewProposalsTable = ({...props, list, filter, onSearch, onEdit, onPreview, previewFlag, onDelete}) => {


  const handleMouseHoverEnter = (event, rowData) => {
    previewFlag.data = rowData;
    previewFlag.op.toggle(event)
    onPreview(rowData);
  }

  const handleMouseHoverLeave = (event) => {
    previewFlag.op.toggle(event)
    // onPreview(false);
  }

  var nT = (rowData, column) => {
    // console.log('------> rowData = ' + JSON.stringify(rowData));
  //  console.log('------> column = ' + JSON.stringify(column));
    return <div>
        <Link to='' onMouseEnter={(e) => handleMouseHoverEnter(e, rowData)} onMouseLeave={handleMouseHoverLeave}>{rowData.RESPONSE_NUMBER}</Link>
    </div>;
  }

  const onEditClicked = (e, rowData) => {
    console.log('Edit: ' + JSON.stringify(rowData));
    onEdit(rowData)
  }

  const onDeleteClicked = (e, rowData) => {
    console.log('Delete: ' + rowData.ASSIGNED_RESPONSE_ID);
    onDelete(rowData)
  }

  var actionsTemplate = (rowData, column) => {
    var rn = rowData.RESPONSE_NUMBER;
    return <div>
      <a className="tableAction" onClick={(e) => onEditClicked(e, rowData)}><i className='fa fa-edit'></i></a>
      <span>&nbsp;&nbsp;</span>
      <a className="tableAction" onClick={(e) => onDeleteClicked(e, rowData)}><i className='fa fa-trash'></i></a>
    </div>;
  }

  const Square = styled.div`
    position: absolute;
    height: 300px;
    width: 400px;
    margin: 200px;
    ${'' /* background-color: green; */}
    cursor: pointer;
    z-index: 999999;
    border: 1px;
  `

  const items = [
      {label: 'View', icon: 'fa-search', command: (event) => onEditClicked(props.selectedCar)},
      {label: 'Delete', icon: 'fa-close', command: (event) => onDeleteClicked(props.selectedCar)}
  ];

return (
  <div>
    { props.wth = 'whaaaaat?' }
    { console.log('------> props = ' + JSON.stringify(props.wth)) }

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

        <ContextMenu model={items} ref={el => props.cm = el}/>

        <DataTable className="test1" value={list} paginator={true} rows={20} rowsPerPageOptions={[10,20,50,100,1000]}
          resizableColumns={true} columnResizeMode="expand" responsive={true} reorderableColumns={true} globalFilter={filter?filter.searchText:''}
          contextMenu={props} selection={props.selectedCar} onSelectionChange={(e) => (props.selectedCar=e.data)} >
          <Column field="ASSIGNED_RESPONSE_ID" header="Id" sortable={true} />
          <Column body={nT} header="Response" sortable={true} />
          <Column field="RESPONSE_SEQ_NUMBER" header="Response Sequence" sortable={true} />
          <Column field="PSTATE" header="Status" sortable={true} />
          <Column field="FIRST_NAME" header="First name" sortable={true} />
          <Column field="LAST_NAME" header="Last name" sortable={true} />
          <Column body={actionsTemplate} header="Actions" sortable={false} />
        </DataTable>
  </div>
  <OverlayPanel ref={(el) => {previewFlag = {op: el, rData: null};}}>
    <div className="container-fluid" style={{backgroundColor:'#fff'}}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Id</label>
        <div className="col-sm-10">
          { console.log('previewFlag12345=' + JSON.stringify(previewFlag)) }
          <label className="col-sm-2 col-form-label">{previewFlag.previewDetails?previewFlag.previewDetails.ASSIGNED_RESPONSE_ID:''}</label>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Number</label>
        <div className="col-sm-10">
          <label className="col-sm-2 col-form-label">{previewFlag.previewDetails?previewFlag.previewDetails.RESPONSE_NUMBER:''}</label>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Seq Number</label>
        <div className="col-sm-10">
          <label className="col-sm-2 col-form-label">{previewFlag.previewDetails?previewFlag.previewDetails.RESPONSE_SEQ_NUMBER:''}</label>
        </div>
      </div>
    </div>
  </OverlayPanel>
</div>

  )

};

export default reviewProposalsTable;
