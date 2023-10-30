import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const quick_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
    {
        path: '/about',
        display: 'About'
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg = '4'>
                        <div className="logo">
                            <img src={logo} alt="" />

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, dolores vero eum delectus velit quos nisi, a necessitatibus explicabo dicta quidem doloremque nulla optio. Quae fugiat maiores ad soluta at!</p>

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'>
                                        <i className="ri-youtube-line"></i>
                                    </Link>
                                </span>
            
                                <span>  
                                    <Link to='#'>
                                        <i className="ri-facebook-circle-line"></i>
                                    </Link>
                                </span>

                                <span>
                                    <Link to='#'>
                                        <i className="ri-instagram-line"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg = '4' >
                        <h5 className="footer__link-title">Discover</h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick_links.map((item, index) => (
                                    <ListGroupItem key={index} className = "ps-0 border-0">
                                        <Link to = {item.path}>
                                            {item.display}
                                            {window.scrollTo(80,0)}
                                        </Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>


                    <Col lg='4' >
                        <h5 className="footer__link-title">Contact</h5>

                        <ListGroup className="footer__quick-links">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-map-pin-line"></i>
                                    </span>
                                    
                                    Address:
                                </h6>

                                <p className="mb-0">Thu Duc, Ho Chi Minh City</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-mail-line"></i>
                                    </span>
                                    
                                    Email:
                                </h6>

                                <p className="mb-0">20520447@gm.uit.edu.vn</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-phone-fill"></i>
                                    </span>
                                    
                                    Phone:
                                </h6>

                                <p className="mb-0">0123456789</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg = '12' className="text-center pt-5">
                        <p className="copyright">Copyright 2023, designed and developed by
                        Nguyen Cong Doan, Phan Nhat Lam and Nguyen Tan Huy.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer