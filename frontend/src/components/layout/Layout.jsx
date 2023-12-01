import React from 'react'
import Header from '../header/Header'
import Routers from '../../router/Routers'
import Footer from '../footer/Footer'
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Col, Row } from 'reactstrap'

const Layout = () => {
    const { pathname } = useLocation();

    if (pathname.includes("/dashboard")) {
        return <>
            <Row className='row g-0' style={{display: "flex", width: "100%"}}>
                <Col lg="2">
                    <Sidebar />
                </Col>
                <Col lg="10">
                    <Routers />
                </Col>
            </Row>
        </>
    }
    else {
        return <>
            <Header />
            <Routers />
            <Footer />
        </>
    }
}

export default Layout