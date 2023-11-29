import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './myBookingDetails.css'
import bookingData from '../../assets/data/bookings'
import { useParams } from 'react-router-dom';
import { BsCheck } from 'react-icons/bs'
import { MdError } from 'react-icons/md'

const MyBookingDetails = () => {
    // Lấy thông tin từ bookingData bằng cách dùng useParams
  const { id } = useParams();
  const booking = bookingData.find(_booking => _booking.id === id)
  const { tourname, total, startDate, endDate, bookingDate, fullName, email, phone, address, guestSize, paymentStatus, receiptImage } = booking
  //

 //Upload receipt
 const [file, setFile] = useState(receiptImage)

 const handleUpload = (e) => {
   console.log(e.target.files);
   setFile(URL.createObjectURL(e.target.files[0]));
 }
 //

 const [viewImage, setViewImage] = useState(false)

  const handleViewImage = () => {
    setViewImage(!viewImage)
  }

  return (
    <Container className='booking_details_container'>
      <Row>
        <Col lg='12'>
          <div className="bookingDetails">

            <div className="insideBookingDetailsContainer">
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

                      <div className={`paymentStatus ${paymentStatus === 'Pending' ? 'pendingStatus' : (paymentStatus === 'Approved' ? 'approvedStatus' : 'invalidStatus')}`}>
                        {paymentStatus === 'Pending' ? 'Pending...'
                          : (paymentStatus === 'Approved' ? <>Approved <BsCheck color='#A9A9A9' size={20} /></>
                            : <>Invalid Receipt <MdError color='red' size={20} className='errorIcon' /></>)}
                      </div>

                      <div className='displayedIn4'>Payment Receipt</div>

                      <div className='divideLine'></div>

                      <div className='receiptZone mb-3'>
                        <img src={file} alt="Receipt"  className={file === '' ? null : 'haveImage'} onClick={file === '' ? null : handleViewImage}/>
                      </div>

                      <div className={(paymentStatus === 'Pending' || paymentStatus === 'Invalid Receipt') ? 'visibleBtn' : 'invisibleBtn'}>
                        <label className='changeReceiptBtn' htmlFor='file'>Change Payment Receipt</label>
                        <input type="file" id="file" style={{ display: "none" }} accept="image/jpg, image/jpeg, image/png" onChange={handleUpload} />
                      </div>

                    </Col>
                  </Row>

                </div>


              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* <img src={file} alt="" style={{width: '100%', height: '100%'}}/> */}
      {viewImage && <div className='popupImage'>
          <span onClick={handleViewImage}>&times;</span>

          <img src={file} alt="" />
        </div>}
    </Container>
  )
}

export default MyBookingDetails
