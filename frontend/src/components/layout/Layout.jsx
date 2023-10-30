import React from 'react'
import Header from '../header/Header'
import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <Routers/>
            <Footer></Footer>
        </>
    )
}

export default Layout
