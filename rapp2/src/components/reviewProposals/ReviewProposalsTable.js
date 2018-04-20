import React, { Component } from 'react'
import Modal from 'react-modal';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
// import EditModal from './EditModal'
import { NavLink as RRNavLink, Link } from 'react-router-dom'
import {ContextMenu} from 'primereact/components/contextmenu/ContextMenu';

import ReviewProposalsRPTable from './ReviewProposalsRPTable'


const reviewProposalsTable = ({...props, list, filter, onSearch, onEdit, onPreview, previewFlag, onDelete}) => {



return (
  <div>
    {/* props.wth = 'whaaaaat?' }
    { console.log('------> props = ' + JSON.stringify(props.wth)) */}

    <div>
      <h1>Review Proposals</h1>
          <ReviewProposalsRPTable
            value={list}
            globalFilter={filter?filter.searchText:''}
            onEdit={onEdit}
            onPreview={onPreview}
            previewFlag={previewFlag}
            onDelete={onDelete}
            onSearch={onSearch}
          />
      </div>
    </div>

  )

};

export default reviewProposalsTable;
