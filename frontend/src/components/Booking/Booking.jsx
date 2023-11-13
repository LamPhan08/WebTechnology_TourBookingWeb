import React, { useState, useContext, useRef } from "react";
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const Booking = ({ tour, avgRating }) => {
    const fullNameRef = useRef('')
    const phoneRef = useRef('')
    const guestSizeRef = useRef('')

    const { price, reviews, title } = tour;

    const navigate = useNavigate();

    const { id } = useParams()

     //Hàm trả về ngày hôm nay
     const getDate = () => {
        let today = new Date();

        return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    }

    const [booking, setBooking] = useState({
        userEmail: '',
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: getDate(),
    })

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
        const _fullname = fullNameRef.current.value
        const _phone = phoneRef.current.value
        const _guestSize = guestSizeRef.current.value

        if (_fullname === '' || _phone === '' || _guestSize === '') {
            return alert('Please input full information!')
        }

    }

   

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>
                    ${price}
                    <span>/person</span>
                </h3>

                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})

                </span>
            </div>

            {/* booking form */}

            <div className="booking__form">
                <h5>Information</h5>

                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text"
                            placeholder="Full Name"
                            id="fullName"
                            ref={fullNameRef}
                            required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="tel"
                            className="phone__input"
                            placeholder="Phone"
                            id="phone"
                            ref={phoneRef}
                            required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        {/* <input type="date"
                            placeholder=""
                            // id="bookAt"
                            required onChange={handleChange}
                        /> */}

                        <input type="number"
                            placeholder="Guest"
                            id="guestSize"
                            ref={guestSizeRef}
                            required onChange={handleChange} 
                            // defaultValue={1}
                            min={1}/>
                    </FormGroup>
                </Form>
            </div>

            {/* booking form */}

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${price}

                            <i className="ri-close-line"></i>

                            1 person
                        </h5>

                        <span>${price}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0">
                        <h5>
                            Service charge
                        </h5>

                        <span> ${serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0 total">
                        <h5>
                            Total
                        </h5>

                        <span> ${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </div>
    )
}

export default Booking