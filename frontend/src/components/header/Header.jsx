import React, { useEffect, useRef, useContext, useState } from "react";

import { Container, Row, Button } from 'reactstrap';
import { NavLink, useNavigate, Link } from "react-router-dom";

import logo from '../../assets/images/logo.png';
import './header.css';

import { AuthContext } from "../../context/AuthContext";

import userIcon from '../../assets/images/user.png'
import person from '../../assets/images/person.png'
import log_out from '../../assets/images/logout.png'
import booking from '../../assets/images/booking.png'
import tableGrid from '../../assets/images/table-grid.png'

const nav_links = [
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

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    let [openMenu, setOpenMenu] = useState(false);
    // const [user, setUser] = useState(true)

    const logout = () => {
        setOpenMenu(!openMenu);
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };


    const navigateProfile = () => {
        setOpenMenu(!openMenu)
        navigate('/myprofile')
    }

    const navigateBookings = () => {
        setOpenMenu(!openMenu)
        navigate(`/myBookings/${user._id}`)
    }

    const navigateDashboard = () => {
        setOpenMenu(!openMenu)
        navigate('/dashboard/customers/customerlist')
    }

    // const stickyHeaderFunc = () => {
    //     window.addEventListener('scroll', () => {
    //         if (
    //             document.body.scrollTop > 80 ||
    //             document.documentElement.scrollTop > 80
    //         ) {
    //             // headerRef.current.classList.add("sticky__header");
    //         }
    //         else {
    //             // headerRef.current.classList.remove("sticky__header");
    //         }
    //     });
    // };

    // useEffect(() => {
    //     stickyHeaderFunc();

    //     return window.removeEventListener('scroll', stickyHeaderFunc);
    // });

    // const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    // const navigateHome = () => {
    //     navigate('/home');
    // }

    // const navigateDashboard = () => {
    //     setOpenMenu(!openMenu)
    //     navigate('/dashboard')
    // }

    // const navigateProfile = () => {
    //     setOpenMenu(!openMenu)
    //     navigate('/profile')
    // }

    // const navigateBookings = () => {
    //     setOpenMenu(!openMenu)
    //     navigate('/mybookings')
    // }



    // https://cdn-icons-png.flaticon.com/512/2815/2815428.png"

    return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center 
                justify-content-between">
                    {/* {logo} */}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    {/* {menu} */}
                    <div className="navigation" ref={menuRef} >
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={navClass =>
                                            navClass.isActive
                                                ? "active__link"
                                                : ""}>{item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-4">
                        <div className="nav__btns d-flex align-items-center gap-4">

                            {user ? <>

                                <div className="menu__container">
                                    <div className="menu__trigger d-flex" onClick={() => { setOpenMenu(!openMenu) }}>
                                        <img src={userIcon} alt="" />
                                        <h5>{user.username}</h5>
                                        {/* <h5>Username</h5> */}
                                    </div>

                                    <div className={`dropdown__menu ${openMenu ? 'active' : 'inactive'}`}>
                                        <div className="avatar__menu__container">
                                            <img src={userIcon} className="avatar__menu" alt="" />
                                            {/* <h5>Username</h5> */}
                                            <h5>{user.username}</h5>
                                        </div>



                                        <ul>

                                            {user.email === "admin@gmail.com"
                                                    ? <>
                                                        <DropDownItem img={tableGrid} text="Dashboard" onclick={navigateDashboard} />
                                                        <DropDownItem img={log_out} text="Logout" onclick={logout}/>
                                                    </>
                                                    : <>
                                                        <DropDownItem img={person} text="My Profile" onclick={navigateProfile} />
                                                        <DropDownItem img={booking} text="My Bookings" onclick={navigateBookings} />
                                                        <DropDownItem img={log_out} text="Logout" onclick={logout}/>
                                                    </>}

                                            {/* <DropDownItem img={person} text="My Profile" onclick={navigateProfile}/>
                                            <DropDownItem img={booking} text="My Bookings" onclick={navigateBookings}/>
                                            <DropDownItem img={log_out} text="Logout" onclick={logout}/> */}
                                        </ul>
                                    </div>
                                </div>

                            </> : <>
                                <Button className="btn secondary__btn">
                                    <Link to='/login'>Login</Link>
                                </Button>

                                <Button className="btn primary__btn">
                                    <Link to='/register'>Register</Link>
                                </Button>
                            </>
                            }




                            {/* <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span> */}
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
};

const DropDownItem = (props) => {
    return (
        <li className="dropdownItem" onClick={props.onclick}>
            <div className="item__container">
                <img src={props.img} alt="" />
                <text>{props.text}</text>
            </div>
        </li>
    )
}

export default Header;