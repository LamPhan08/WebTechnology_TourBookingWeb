import React, { useContext } from 'react'
import './payment.css'
import { Row, Col, Container } from 'reactstrap';
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

// //Data mẫu
// const bookingData = {
//     tourname: "Westminister Bridge",
//     total: 200,
//     startDate: "2023-01-01",
//     endDate: "2023-01-05",
//     bookingDate: "2022-12-28", // => trường này giá trị là "ngày hôm nay"
//     fullName: "Benjamin",
//     email: "benjamin1234@gmail.com",
//     phone: "0123456789",
//     address: "Somewhere",
//     guestSize: 8,
//     paymentStatus: '',
//     receiptImage: ''
// }

const Payment = () => {
    const location = useLocation(); // Nhận dữ liệu booking

    const navigate = useNavigate()

    const {id} = useParams()

    const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`);
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour
    const {user} = useContext(AuthContext);
    //Data mẫu
    const bookingData = {
        tourname: title,
        total: 200,
        startDate: "2023-01-01",
        endDate: "2023-01-05",
        bookingDate: "2022-12-28", // => trường này giá trị là "ngày hôm nay"
        fullName: "Benjamin",
        email: user.email,
        phone: "0123456789",
        address: "Somewhere",
        guestSize: 8,
        paymentStatus: '',
        receiptImage: ''
    }

    //=== date
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // const withSlashes = [year, month, day].join('/');
    // console.log(withSlashes); // 👉️ "2023/7/25"

    const dateStart = [year, month, day].join('-');
    // console.log(withHyphens); // 👉️ "2023-7-25"
    const dateEnd = [year, month, day + 5].join('-');

    //===
    
    const handleSubmitReceipt = () => {
        navigate('/tours/payment/receipt/' + id, {state: paymentData})
    }

    const paymentData = {
        // tourname: bookingData.tourname,
        // totalPrice: location.state.totalPrice,
        // // startDate: bookingData.startDate,
        // startDate: dateStart,
        // endDate: bookingData.endDate,
        // bookingDate: location.state.bookingDate,
        // fullName: location.state.fullName,
        // // email: location.state.email,
        // email: bookingData.email,
        // phone: location.state.phone,
        // address: bookingData.address,
        // numberOfSeats: location.state.numberofSeats,
        userId: user._id,
        userEmail: bookingData.email,
        tourName: bookingData.tourname,
        fullName: location.state.fullName,
        guestSize: location.state.numberofSeats,
        phone: location.state.phone,
        bookAt: location.state.bookingDate
    }

    return (
        <Container className='payment_container'>
            <Row>
                <Col lg='12'>
                    <div className="bookingDetails">

                        <div className="insideBookingDetailsContainer">
                            {/*  */}

                            <div className="viewPaymentDetails">
                                <div className="tourNameContainer">
                                    <h4 className="tourNameTitle">{bookingData.tourname}</h4>
                                </div>

                                <div className='divideLine'></div>

                                <div className="details">
                                    <Row>
                                        <Col lg='4'>
                                            <div className='itemDisplay'>BOOKING SUMMARY</div>

                                            <div className='divideLine'></div>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Tour:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedTourName'>{bookingData.tourname}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Booking Date:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{location.state.bookingDate}</div>
                                                </Col>
                                            </Row>


                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Number of Seats:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{location.state.numberofSeats}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Travel Date:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{dateStart}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>End Date:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{dateEnd}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Total Price:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>${location.state.totalPrice}</div>
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
                                                    <div className='displayedIn4'>{location.state.fullName}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Email:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{user.email}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Phone:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{location.state.phone}</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='5'>
                                                    <div className='detailsItem'>Address:</div>
                                                </Col>

                                                <Col lg='7'>
                                                    <div className='displayedIn4'>{bookingData.address}</div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg='4'>
                                            <div className='itemDisplay'>TRANSFER INFORMATION</div>

                                            <div className='divideLine'></div>

                                            <div className='detailsItem mb-3'>
                                                Please transfer the correct amount and enter the correct transfer content
                                            </div>

                                            <Row className='mb-3'>
                                                <Col lg='6'>
                                                    <div className='detailsItem'>Account Number:</div>
                                                </Col>

                                                <Col lg='6'>
                                                    <div className='displayedIn4'>0123456789123456</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='6'>
                                                    <div className='detailsItem'>Beneficiary Name:</div>
                                                </Col>

                                                <Col lg='6'>
                                                    <div className='displayedIn4'>Travel Center Travelo</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='6'>
                                                    <div className='detailsItem'>Beneficiary Bank:</div>
                                                </Col>

                                                <Col lg='6'>
                                                    <div className='displayedIn4'>Secret Bank</div>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col lg='6'>
                                                    <div className='detailsItem'>Content:</div>
                                                </Col>

                                                <Col lg='6'>
                                                    <div className='displayedIn4'>
                                                        {location.state.phone}-{bookingData.tourname}-{location.state.bookingDate}
                                                    </div>
                                                </Col>
                                            </Row>



                                            <button className='nextBtn' onClick={handleSubmitReceipt}>
                                                Next
                                            </button>

                                        </Col>
                                    </Row>

                                </div>


                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Payment
