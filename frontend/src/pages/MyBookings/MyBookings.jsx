import React from 'react'
import './myBookings.css'
import { Row, Col, Container } from 'reactstrap'
import bookingData from '../../assets/data/bookings'
import { DataGrid } from '@mui/x-data-grid';
import { BsCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {MdError} from 'react-icons/md'


const MyBookings = () => {
  const navigate = useNavigate()

    const handleRowClick = (params) => {
        navigate('/mybookings/' + params.id)
    };

    const columns = [
        {
            field: 'tourname',
            headerName: 'Tour Name',
            width: 500,
            renderCell: (params) => {
                return (<div className='tableTourName tableItem'>{params.value}</div>)
            }
        },

        {
            field: 'startDate',
            headerName: 'Travel Date',
            width: 250,
            renderCell: (params) => {
                return (<div className='tableItem'>{params.value}</div>)
            }
        },

        {
            field: 'total',
            headerName: 'Total',
            width: 100,
            renderCell: (params) => {
                return (<div className='tableItem'>${params.value}</div>)
            }
        },
        {
            field: 'paymentStatus',
            headerName: 'Payment Status',
            width: 300,
            renderCell: (params) => {
                return (
                    <div className='statusZone'>
                        <div className={`tableItem ${params.value === 'Pending' ? 'pendingStatus' : (params.value === 'Approved' ? 'approvedStatus' : 'invalidStatus')}`}>
                            {params.value === 'Pending' ? 'Pending...' : (params.value === 'Approved' ? 'Approved' : 'Invalid Receipt')}
                        </div>

                        {params.value === 'Approved' ? <BsCheck color='#A9A9A9' size={20} /> : null}
                        {params.value === 'Invalid Receipt' ? <MdError color='red' size={20} className='errorIcon'/> : null}
                    </div>
                )
            }
        },
    ];

    return (
        <Container className='bookings__container'>
            <Row>
                <Col lg='12'>
                    <div className="bookings">

                        <div className="bookingsContainer">
                            {/*  */}

                            <div className="viewBookings">
                                <div className="currentBookingsTitleContainer">
                                    <h4 className="currentBookingsTitle">Current Bookings</h4>
                                </div>

                                <div className='divideLine'></div>

                                <div className="currentBookingsList">
                                    <DataGrid
                                        className='bookingDatagrid'
                                        rows={bookingData}
                                        columns={columns}
                                        disableRowSelectionOnClick
                                        rowModesModel={false}
                                        initialState={{
                                            pagination: {
                                                paginationModel: { page: 0, pageSize: 10 },
                                            },
                                            sorting: {
                                                sortModel: [{field: 'paymentStatus', sort: 'desc'}]
                                            }
                                        }}
                                        rowsPerPageOptions={[]}
                                        sx={{
                                            '.MuiDataGrid-columnHeaderTitle': {
                                                fontWeight: 600
                                            },

                                            '.MuiTablePagination-displayedRows': {
                                                marginBottom: 0
                                            },
                                            '.MuiDataGrid-cell:focus': {
                                                outline: 'none'
                                            },
                                            '.MuiDataGrid-row:hover': {
                                                cursor: 'pointer'
                                            }
                                        }}
                                        onRowDoubleClick={handleRowClick}

                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MyBookings