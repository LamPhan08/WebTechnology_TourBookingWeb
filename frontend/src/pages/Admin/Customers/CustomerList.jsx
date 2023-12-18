import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import './customerlist.css'
import { Link } from 'react-router-dom';
import customerData from '../../../assets/data/customers'

import useFetch from '../../../hooks/useFetch.js'
import { BASE_URL } from "../../../utils/config.js";

const CustomerList = () => {
  const [data1, setData] = useState(customerData)
  // const {data: users} = useFetch(`${BASE_URL}/users`);
  // const {data: users, loading, error} = useFetch(`${BASE_URL}/users`);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Customer', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 250 },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='action_zone'>
            <Link to={'/dashboard/customers/customerdetails/' + params.row.id}>
              <GrView className='view_customer' />
            </Link>

            <Link to={'/dashboard/customers/customeredit/' + params.row.id}>
              <MdEdit className='edit_customer' />
            </Link>

            <MdDeleteOutline className='delete_customer' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className="customerlist">
      <DataGrid
        rows={data1}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          '.MuiTablePagination-displayedRows': {
            marginBottom: 0
          },

          '.MuiTablePagination-selectLabel': {
            marginBottom: 0
          },
          '.MuiDataGrid-cell:focus': {
            outline: 'none'
          },
          '.MuiDataGrid-cell:active': {
            outline: 'none'
          },
          '.MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600
          },
        }}
      />
    </div>
  )
}

export default CustomerList