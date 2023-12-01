import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline, MdEmail, MdError } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import bookingData from '../../../assets/data/bookings'
import './bookinglist.css'
import {ImPhone} from 'react-icons/im'
import { BsCheck } from 'react-icons/bs'


const BookingList = () => {
  const [data, setData] = useState(bookingData)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    {
      field: 'tourname',
      headerName: 'Tour',
      width: 250,
      renderCell: (params) => {
        return (
          <div className='tourNameValue'>
            {params.value}
          </div>
        )
      }
    },

    {
      field: 'contact',
      headerName: 'Contact Details',
      width: 250,
      renderCell: (params) => {
        return (
          <div>
            <div className='contactItem mb-2'>{params.row.fullName}</div>

            <div className='contactItem mb-2'>
              <MdEmail size={16} className='contactIcons'/>
              {params.row.email}
            </div>

            <div className='contactItem'>
              <ImPhone size={16} className='contactIcons'/>
              {params.row.phone}
            </div>
          </div>
        )
      }
    },

    { field: 'startDate', headerName: 'Travel Date', width: 250 },

    {
      field: 'total',
      headerName: 'Total Price',
      width: 250,
      renderCell: (params) => {
        return (
          <div className='totalPriceValue'>${params.value}</div>
        )
      }
    },

    { field: 'paymentStatus', 
      headerName: 'Payment Status', 
      width: 250,
      renderCell: (params) => {
        return (
          <div className={`bookingPaymentStatus ${params.value === 'Pending' ? 'pendingStatus' : (params.value === 'Approved' ? 'approvedStatus' : 'invalidStatus')}`}>
            {params.value === 'Pending' ? 'Pending...'
                          : (params.value === 'Approved' ? <>Approved <BsCheck color='#A9A9A9' size={20} /></>
                            : <>Invalid Receipt <MdError color='red' size={20} className='errorIcon' /></>)}
          </div>
        )
      } },

    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='action_zone'>
            <Link to={'/dashboard/bookings/bookingdetails/' + params.row.id}>
              <GrView className='view_booking_details' />
            </Link>

            <MdDeleteOutline className='delete_booking' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className="bookinglist">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
          sorting: {
            sortModel: [{ field: 'paymentStatus', sort: 'desc' }]
          }
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        rowHeight={100}
        sx={{
          '.MuiTablePagination-displayedRows': {
            marginBottom: 0
          },

          '.MuiTablePagination-selectLabel': {
            marginBottom: 0
          },
          '.MuiDataGrid-cell:active': {
            outline: 'none'
          },
          '.MuiDataGrid-cell:focus': {
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

export default BookingList
