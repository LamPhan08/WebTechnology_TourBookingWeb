import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import './customerlist.css'
import { Link, useNavigate } from 'react-router-dom';
import customerData from '../../../assets/data/customers'

import useFetch from '../../../hooks/useFetch.js'
import { BASE_URL } from "../../../utils/config.js";

const CustomerList = () => {
  const navigate = useNavigate();
  
  const [data1, setData] = useState([])
  const [dataDemo, setDataDemo] = useState(customerData)
  const {data: users} = useFetch(`${BASE_URL}/users`);

  useEffect(() => {
    if (users) {
      // Map over the fetched data and add an 'id' property
      const dataWithIds = users.map((user) => ({ ...user, id: user._id }));
      setData(dataWithIds);
    }
  }, [users]);

  const handleDelete = async (id) => {
    // setData(data.filter((item) => item.id !== id))
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
          method: 'delete',
          headers: {
              'content-type': 'application/json',
              // You may need to include additional headers such as authentication tokens
          },
      });

      const result = await res.json();

      if (res.ok) {
          alert(result.message);
          // Additional logic after successful deletion
      } else {
          alert(result.error); // or handle the error in an appropriate way
      }
  } catch (err) {
      alert(err.message);
  }
  }

  const handleRowClick = (id) => {
    // Redirect to the details page with the user's ID as a parameter
    navigate(`/dashboard/customers/customerdetails/${id}`);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Customer', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'phoneNumber', headerName: 'Phone', width: 250 },
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
        // onRowClick={(params) => handleRowClick(params.row.id)}
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