import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import './tourlist.css'
import { Link } from 'react-router-dom';
import tourData from '../../../assets/data/tours'
import useFetch from '../../../hooks/useFetch.js'
import { BASE_URL } from "../../../utils/config.js";

// const rows = [
//   { id: 1, city: 'Snow', address: 'Jon', title: 'unknown', distance: 100, maxGroupSize: 10, price: 35 },
//   { id: 2, city: 'Lannister', address: 'Cersei', title: 'unknown', distance: 100, maxGroupSize: 10, price: 42 },
//   { id: 3, city: 'Lannister', address: 'Jaime', title: 'unknown', distance: 100, maxGroupSize: 10, price: 45 },
//   { id: 4, city: 'Stark', address: 'Arya', title: 'unknown', distance: 100, maxGroupSize: 10, price: 16 },
//   { id: 5, city: 'Targaryen', address: 'Daenerys', title: 'unknown', distance: 100, maxGroupSize: 10, price: 90 },
//   { id: 6, city: 'Melisandre', address: 'unknown', title: 'unknown', distance: 100, maxGroupSize: 10, price: 150 },
//   { id: 7, city: 'Clifford', address: 'Ferrara', title: 'unknown', distance: 100, maxGroupSize: 10, price: 44 },
//   { id: 8, city: 'Frances', address: 'Rossini', title: 'unknown', distance: 100, maxGroupSize: 10, price: 36 },
//   { id: 9, city: 'Roxie', address: 'Harvey', title: 'unknown', distance: 100, maxGroupSize: 10, price: 65 },
//   { id: 10, city: 'Snow', address: 'Jon', title: 'unknown', distance: 100, maxGroupSize: 10, price: 35 },
//   { id: 11, city: 'Lannister', address: 'Cersei', title: 'unknown', distance: 100, maxGroupSize: 10, price: 42 },
//   { id: 12, city: 'Lannister', address: 'Jaime', title: 'unknown', distance: 100, maxGroupSize: 10, price: 45 },
//   { id: 13, city: 'Stark', address: 'Arya', title: 'unknown', distance: 100, maxGroupSize: 10, price: 16 },
//   { id: 14, city: 'Targaryen', address: 'Daenerys', title: 'unknown', distance: 100, maxGroupSize: 10, price: 90 },
//   { id: 15, city: 'Melisandre', address: 'unknown', title: 'unknown', distance: 100, maxGroupSize: 10, price: 150 },
//   { id: 16, city: 'Clifford', address: 'Ferrara', title: 'unknown', distance: 100, maxGroupSize: 10, price: 44 },
//   { id: 17, city: 'Frances', address: 'Rossini', title: 'unknown', distance: 100, maxGroupSize: 10, price: 36 },
//   { id: 18, city: 'Roxie', address: 'Harvey', title: 'unknown', distance: 100, maxGroupSize: 10, price: 65 },


// ];


const TourList = () => {
  // const [data, setData] = useState(tourData)
  const [data1, setData] = useState([])
  const {data: tours} = useFetch(`${BASE_URL}/tours`);

  useEffect(() => {
    if (tours) {
      // Map over the fetched data and add an 'id' property
      const dataWithIds = tours.map((user) => ({ ...user, id: user._id })); 
      setData(dataWithIds);
    }
  }, [tours]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'city', headerName: 'Country/City', width: 250 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'title', headerName: 'Title', width: 250 },
    {
      field: 'distance',
      headerName: 'Distance',
      width: 150,
    },
    {
      field: 'maxGroupSize',
      headerName: 'Max People',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='action_zone'>
            <Link to={'/dashboard/tours/tourdetails/' + params.row.id}>
              <GrView className='view_tour' />
            </Link>

            <Link to={'/dashboard/tours/touredit/' + params.row.id}>
              <MdEdit className='edit_tour' />
            </Link>

            <MdDeleteOutline className='delete_tour' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className="tourlist">
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

export default TourList
