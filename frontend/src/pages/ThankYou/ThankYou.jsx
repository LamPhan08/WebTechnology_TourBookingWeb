import React from 'react'
import './thankYou.css'
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section id="thankyou">
            <Container>
                <Row>
                    <Col lg = '12' className="pt-5 text-center">
                        <div className="thank__you">
                            <span>
                                <i className="ri-checkbox-circle-line"></i>
                            </span>

                            <h1 className="mb-3 fw-semibold">Thank You!</h1>

                            <h3 className="mb-4">Your tour is booked!</h3>

                            <h3 className="mb-4">You can check your bookings from "My Bookings" page</h3>

                            <Button className="btn primary__btn w-25">
                                <Link to = '/home'>Back to Home</Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ThankYou
