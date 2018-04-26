import React, { Component } from 'react'
import { NavLink as RRNavLink, Link } from 'react-router-dom'

import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
import {ContextMenu} from 'primereact/components/contextmenu/ContextMenu';
import {Button} from 'primereact/components/button/Button';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';

// primereact/components/autocomplete/AutoComplete.css



import styled from 'styled-components';
import { Route } from 'react-router-dom'

import ReactTooltip from 'react-tooltip'

class ReviewProposalsRPTable extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.viewProposal = this.viewProposal.bind(this);
      this.deleteProposal = this.deleteProposal.bind(this);
      this.handleMouseHoverEnter = this.handleMouseHoverEnter.bind(this);
      this.handleMouseHoverLeave = this.handleMouseHoverLeave.bind(this);
      this.onEditClicked = this.onEditClicked.bind(this);
      this.onDeleteClicked = this.onDeleteClicked.bind(this);
      this.export = this.export.bind(this);

      this.firstNameEditor = this.firstNameEditor.bind(this);
      this.lastNameEditor = this.lastNameEditor.bind(this);
      this.statusEditor = this.statusEditor.bind(this);
      this.requiredValidator = this.requiredValidator.bind(this);



      this.state = {
          proposals: []
      };


  }


  componentDidMount() {
    // console.log('------------ isLoading? ' + this.props.isLoading);
    // this.props.isLoading?null:this.setState({proposals: this.props.value});
    this.setState({proposals: this.props.value});
  }

  // componentDidUpdate() {
  //     this.setState({proposals: this.props.value});
  // }


  viewProposal(proposal) {
    // console.log('**  view proposal = ' + JSON.stringify(proposal));
    this.props.onEdit(proposal)
  }

  deleteProposal(proposal) {
    // console.log('**  delete proposal = ' + JSON.stringify(proposal));
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


  export() {
      this.dt.exportCSV();
  }


  onEditorValueChange(props, value) {
      let updatedCars = [...props.value];
      updatedCars[props.rowIndex][props.field] = value;
      this.setState({cars: updatedCars});
  }

  inputTextEditor(props, field) {
      return <InputText required="true" type="text" value={props.rowData.year} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
  }

  firstNameEditor(props) {
      return this.inputTextEditor(props, 'FIRST_NAME');
  }

  lastNameEditor(props) {
      return this.inputTextEditor(props, 'LAST_NAME');
  }

  statusEditor(props) {
      let dd = React.createRef();
      let statuses = [
          {label: 'Pending', value: 'PENDING_STATUS'},
          {label: 'Submitted', value: 'SUBMITTED_STATUS'},
          {label: 'Withdrawn', value: 'WITHDRAWN_STATUS'},
          {label: 'Returned', value: 'RETURNED_STATUS'},
          {label: 'Declined', value: 'DECLINED_STATUS'},
          {label: 'Selected', value: 'SELECTED_STATUS'},
      ];

      return (
          <Dropdown appendTo={document.body} value={props.value[props.rowIndex].PSTATE} options={statuses}
                  onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select Status"/>
      );
  }

  requiredValidator(props) {
      let value = props.rowData[props.field];
      return value && value.length > 0;
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
      const lnk = `/reviewProposals/proposal/${rowData.ASSIGNED_RESPONSE_ID}`;
      return <div>
        <a className="tableAction" onMouseEnter={(e) => this.handleMouseHoverEnter(e, rowData)} onMouseLeave={this.handleMouseHoverLeave}><i className='fa fa-eye'></i></a>
        <span>&nbsp;&nbsp;</span>
        <Link to={lnk}>{rowData.RESPONSE_NUMBER}-{rowData.RESPONSE_SEQ_NUMBER}</Link>
      </div>;
    }


    var actionsTemplate = (rowData, column) => {
      var rn = rowData.RESPONSE_NUMBER;
      return <div>
        <a className="tableActionEdit" onClick={(e) => this.onEditClicked(e, rowData)}><i className='fa fa-pencil' data-tip="Edit proposal"></i></a>
        <span>&nbsp;&nbsp;</span>
        <a className="tableActionDelete" onClick={(e) => this.onDeleteClicked(e, rowData)}><i className='fa fa-times' data-tip="Remove proposal"></i></a>
      </div>;
    }


    const items = [
        {label: 'View', icon: 'fa-search', command: (event) => this.viewProposal(this.state.selectedProposal)},
        {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteProposal(this.state.selectedProposal)}
    ];


    return (
      <div>
      <div>

          <div className="form-row mt-2">
            <div className="col-md-8 offset-md-2">
              <div className="search searchfilter">
                <span className="fa fa-search"></span>
                <InputText className="form-control" type="search" onInput={e => this.props.onSearch({searchText: e.target.value, isOpenOnly:this.props.globalFilter?this.props.globalFilter.isOpenOnly:false}) } placeholder="Search Proposals" size="50"/>
              </div>
            </div>
          </div>


          <div className="tableHeader">
          <div className="row">
          <div className="col pt-1">
<span className="totalNumber">Total number of Records: {this.state.proposals.length}</span></div>
          <div className="col text-right">
          <a className="btn btn-link" onClick={this.export} data-tip="Export table to CSV format for Excel"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Excel</a></div>



               {/*<div className="col">
               <p data-tip="You can resize and reorder columns by dragging column's header. Right-click on a row for a context menu. Drag and Drop icon on the left to rearrange rows" className="fa fa-question-circle-o"> Usage tips</p>
               </div>*/}



</div>
          </div>


          <ContextMenu model={items} ref={el => this.cm = el}/>

          <DataTable
            className="dataTableContainer"
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
            ref={(el) => { this.dt = el; }}
            selectionMode="single"
            selection={this.state.selectedProposal}
            onSelectionChange={(e) => this.setState({selectedProposal: e.data})}
          >
            <Column field="a" rowReorder={true} style={{width: '2em'}} />
            <Column field="RESPONSE_NUMBER" body={nT} header="Response Number" sortable={true} />
            <Column field="PSTATE" header="Response Status" sortable={true} editor={this.statusEditor} editorValidator={this.requiredValidator} className="statusCol" />
            <Column field="FIRST_NAME" header="First name" sortable={true} editor={this.firstNameEditor} editorValidator={this.requiredValidator} />
            <Column field="LAST_NAME" header="Last name" sortable={true}  editor={this.lastNameEditor} editorValidator={this.requiredValidator} />
            <Column field="" body={actionsTemplate} header="" sortable={false} style={{width: '6em'}} />
          </DataTable>


        <OverlayPanel ref={(el) => {this.state.preView = {op: el, rData: null};}}>
          <div className="container-fluid" style={{backgroundColor:'#fff'}}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Id</label>
              <div className="col-sm-10">
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
        <ReactTooltip />
        </div>
    </div>

    );
  }
}


export default ReviewProposalsRPTable;
