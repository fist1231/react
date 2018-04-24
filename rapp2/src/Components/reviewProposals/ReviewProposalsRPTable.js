import React, { Component } from 'react'
import { NavLink as RRNavLink, Link } from 'react-router-dom'

import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
import {ContextMenu} from 'primereact/components/contextmenu/ContextMenu';

import styled from 'styled-components';


class ReviewProposalsRPTable extends Component {

  constructor(props) {
      super(props);
      console.log('--------------- props = '+ JSON.stringify(props))
      console.log('**  view props.previewFlag = ' + JSON.stringify(props.previewFlag));
      this.state = {};
      this.viewProposal = this.viewProposal.bind(this);
      this.deleteProposal = this.deleteProposal.bind(this);
      this.handleMouseHoverEnter = this.handleMouseHoverEnter.bind(this);
      this.handleMouseHoverLeave = this.handleMouseHoverLeave.bind(this);
      this.onEditClicked = this.onEditClicked.bind(this);
      this.onDeleteClicked = this.onDeleteClicked.bind(this);


      this.state = {
          propsosals: []
      };


  }


  componentDidMount() {
      this.setState({proposals: this.props.value});
  }


  viewProposal(proposal) {
    console.log('**  view proposal = ' + JSON.stringify(proposal));
    this.props.onEdit(proposal)
  }

  deleteProposal(proposal) {
    console.log('**  delete proposal = ' + JSON.stringify(proposal));
    this.props.onDelete(proposal)
  }

  handleMouseHoverEnter(event, rowData) {
    this.props.previewFlag.data = rowData;
    this.state.preView.op.toggle(event)
    this.props.onPreview(rowData);
  }

  handleMouseHoverLeave(event) {
    this.state.preView.op.toggle(event)
    // onPreview(false);
  }

  onEditClicked(e, rowData) {
    // console.log('Edit: ' + JSON.stringify(rowData));
    this.props.onEdit(rowData)
  }

  onDeleteClicked(e, rowData) {
    // console.log('Delete: ' + rowData.ASSIGNED_RESPONSE_ID);
    this.props.onDelete(rowData)
  }

  render() {


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


    var nT = (rowData, column) => {
      // console.log('------> rowData = ' + JSON.stringify(rowData));
    //  console.log('------> column = ' + JSON.stringify(column));
      return <div>
          <Link to=''>{rowData.RESPONSE_NUMBER}-{rowData.RESPONSE_SEQ_NUMBER}</Link>
      </div>;
    }


    var actionsTemplate = (rowData, column) => {
      var rn = rowData.RESPONSE_NUMBER;
      return <div>
        <a className="tableAction" onClick={(e) => this.onEditClicked(e, rowData)}><i className='fa fa-edit'></i></a>
        <span>&nbsp;&nbsp;</span>
        <a className="tableAction" onClick={(e) => this.onDeleteClicked(e, rowData)}><i className='fa fa-trash'></i></a>
        <span>&nbsp;&nbsp;</span>
        <a className="tableAction" onMouseEnter={(e) => this.handleMouseHoverEnter(e, rowData)} onMouseLeave={this.handleMouseHoverLeave}><i className='fa fa-eye'></i></a>
      </div>;
    }


    const items = [
        {label: 'View', icon: 'fa-search', command: (event) => this.viewProposal(this.state.selectedProposal)},
        {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteProposal(this.state.selectedProposal)}
    ];


    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <p>Info: Drag icon on the left to reorder rows. Drag column header to rearrange columns. Right-click on a row for a context menu.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="search searchfilter">
                <span className="fa fa-search"></span>
                <InputText className="form-control" type="search" onInput={e => this.props.onSearch({searchText: e.target.value, isOpenOnly:this.props.globalFilter?this.props.globalFilter.isOpenOnly:false}) } placeholder="Search Proposals" size="50"/>
              </div>
            </div>
          </div>

          <ContextMenu model={items} ref={el => this.cm = el}/>

          <DataTable
            className=""
            value={this.state.proposals}
            paginator={true}
            rows={20}
            rowsPerPageOptions={[10,20,50]}
            resizableColumns={true}
            columnResizeMode="fit"
            responsive={true}
            reorderableColumns={true}
            reorderableRows={true} onRowReorder={(e) => this.setState({proposals: e.value})}
            globalFilter={this.props.globalFilter}
            contextMenu={this.cm}
            selectionMode="single"
            selection={this.state.selectedProposal}
            onSelectionChange={(e) => this.setState({selectedProposal: e.data})}
          >
            <Column field="a" rowReorder={true} />
            <Column field="RESPONSE_NUMBER" body={nT} header="Response Number" sortable={true} />
            <Column field="PSTATE" header="Response Status" sortable={true} />
            <Column field="FIRST_NAME" header="First name" sortable={true} />
            <Column field="LAST_NAME" header="Last name" sortable={true} />
            <Column field="" body={actionsTemplate} header="Actions" sortable={false} />
          </DataTable>


        <OverlayPanel ref={(el) => {this.state.preView = {op: el, rData: null};}}>
          <div className="container-fluid" style={{backgroundColor:'#fff'}}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Id</label>
              <div className="col-sm-10">
                { console.log('previewFlag12345=' + JSON.stringify(this.props.previewFlag)) }
                <label className="col-sm-2 col-form-label">{this.props.previewFlag.previewDetails?this.props.previewFlag.previewDetails.ASSIGNED_RESPONSE_ID:''}</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Number</label>
              <div className="col-sm-10">
                <label className="col-sm-2 col-form-label">{this.props.previewFlag.previewDetails?this.props.previewFlag.previewDetails.RESPONSE_NUMBER:''}</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Seq Number</label>
              <div className="col-sm-10">
                <label className="col-sm-2 col-form-label">{this.props.previewFlag.previewDetails?this.props.previewFlag.previewDetails.RESPONSE_SEQ_NUMBER:''}</label>
              </div>
            </div>
          </div>
        </OverlayPanel>

    </div>
      </div>

    );
  }
}


export default ReviewProposalsRPTable;
