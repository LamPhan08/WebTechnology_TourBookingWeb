import React from 'react'
import { Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom';
import bookingData from '../../../assets/data/bookings'
import './bookingdetails.css'
import { useState } from 'react';

const BookingDetails = () => {
    // Lấy thông tin từ bookingData bằng cách dùng useParams
    const { id } = useParams();
    const booking = bookingData.find(_booking => _booking.id === id)
    const { tourname, total, startDate, endDate, bookingDate, fullName, email, phone, address, guestSize, paymentStatus, receiptImage } = booking
    //

    const [viewImage, setViewImage] = useState(false)

    const handleViewImage = () => {
        setViewImage(!viewImage)
    }

    return (
        <div className='admin_booking_details_container'>
            <div>
                <div>
                    {/*  */}
                    <div className="viewBookingDetails">
                        <div className="tourNameContainer">
                            <h4 className="tourNameTitle">{tourname}</h4>
                        </div>

                        <div className='divideLine'></div>

                        <div className="details">
                            <Row>
                                <Col lg='5'>
                                    <div className='itemDisplay'>BOOKING SUMMARY</div>

                                    <div className='divideLine'></div>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Booking ID:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>#{id}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Booking Date:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{bookingDate}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Tour:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedTourName'>{tourname}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Number of Seats:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{guestSize}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Travel Date:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{startDate}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>End Date:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{endDate}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Total Price:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>${total}</div>
                                        </Col>
                                    </Row>

                                </Col>

                                <Col lg='4'>
                                    <div className='itemDisplay'>CONTACT DETAILS</div>

                                    <div className='divideLine'></div>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Full Name:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{fullName}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Email:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{email}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Phone:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{phone}</div>
                                        </Col>
                                    </Row>

                                    <Row className='mb-3'>
                                        <Col lg='5'>
                                            <div className='detailsItem'>Address:</div>
                                        </Col>

                                        <Col lg='7'>
                                            <div className='displayedIn4'>{address}</div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg='3'>
                                    <div className='itemDisplay'>PAYMENT STATUS</div>

                                    <div className='divideLine'></div>

                                    <select className="paymentStatusSelect mb-4">
                                        <option value="pending" selected={paymentStatus === 'Pending' ? true : false}>Pending</option>
                                        <option value="approved" selected={paymentStatus === 'Approved' ? true : false}>Approved</option>
                                        <option value="invalid" selected={paymentStatus === 'Invalid Receipt' ? true : false}>Invalid Receipt</option>
                                    </select>

                                    <div className='mb-3'>
                                        <button className='updateStatusBtn'>
                                            Update Status
                                        </button>
                                    </div>

                                    <div className='displayedIn4'>Payment Receipt</div>

                                    <div className='divideLine'></div>

                                    <div className='receiptZone mb-3'>
                                        <img src={receiptImage} alt="Receipt" className={receiptImage === '' ? null : 'haveImage'} onClick={receiptImage === '' ? null : handleViewImage} />
                                    </div>

                                </Col>
                            </Row>

                        </div>


                    </div>
                </div>
            </div>

            {viewImage && <div className='popupImage'>
                <span onClick={handleViewImage}>&times;</span>

                <img src={receiptImage} alt="" />
            </div>}
        </div>
    )
}

export default BookingDetails
