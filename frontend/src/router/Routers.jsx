import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Tours from '../pages//Tours/Tours'
import About from "../pages/About/About";
import TourDetails from "../pages/TourDetails/TourDetails";
import Payment from "../pages/Payment/Payment";
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import SubmitReceipt from "../pages/SubmitReceipt/SubmitReceipt";
import ThankYou from "../pages/ThankYou/ThankYou";
import MyBookings from "../pages/MyBookings/MyBookings";
import MyProfile from "../pages/MyProfile/MyProfile";
import MyBookingDetails from "../pages/MyBookingDetails/MyBookingDetails";
import CustomerDetails from "../pages/Admin/Customers/CustomerDetail";
import CustomerEdit from "../pages/Admin/Customers/CustomerEdit";
import CustomerAdd from "../pages/Admin/Customers/CustomerAdd";
import CustomerList from "../pages/Admin/Customers/CustomerList";
import SearchResultList from "../pages/SearchResultList/SearchResultList"
import TourAdd from "../pages/Admin/Tours/TourAdd";
import TourEdit from "../pages/Admin/Tours/TourEdit";
import TourList from "../pages/Admin/Tours/TourList";
import DashboardTourDetails from "../pages/Admin/Tours/DashboardTourDetails";
import BookingList from "../pages/Admin/Bookings/BookingList";
import BookingDetails from "../pages/Admin/Bookings/BookingDetails";

// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import SearchResultList from '../pages/SearchResultList'
// import ThankYou from "../pages/ThankYou";
// import TourList from "../Management/Tours/TourList";
// import DashboardTourDetails from "../Management/Tours/DashboardTourDetails";
// import TourAdd from "../Management/Tours/TourAdd";
// import TourEdit from "../Management/Tours/TourEdit";
// import CustomerList from "../Management/Customers/CustomerList";
// import CustomerDetails from "../Management/Customers/CustomerDetails";
// import CustomerAdd from "../Management/Customers/CustomerAdd";
// import CustomerEdit from "../Management/Customers/CustomerEdit";
// import BookingList from "../Management/Bookings/BookingList";
// import BookingDetails from "../Management/Bookings/BookingDetails";
// import Profile from "../pages/Profile";
// import MyBookings from "../pages/MyBookings";
// import MyBookingDetails from "../pages/MyBookingDetails";
// import SubmitReceipt from "../pages/SubmitReceipt";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/tours/:id' element={<TourDetails/>} />
            <Route path='/tours/payment/:id' element={<Payment/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/tours/payment/receipt/:id' element={<SubmitReceipt/>} />
            <Route path='/about' element={<About/>}/> 
            <Route path='/thank-you' element={<ThankYou/>}/> 
            <Route path='/mybookings' element={<MyBookings/>}/>
            <Route path='/myprofile' element={<MyProfile/>}/>
            <Route path='/mybookings/:id' element={<MyBookingDetails/>}/>
            <Route path='/tours/search' element={<SearchResultList/>} />
            <Route path='/dashboard/customers/customerlist' element={<CustomerList/>}/>
            <Route path='/dashboard/customers/customerdetails/:id' element={<CustomerDetails/>}/>
            <Route path='/dashboard/customers/customeradd' element={<CustomerAdd/>}/>
            <Route path='/dashboard/customers/customeredit/:id' element={<CustomerEdit/>}/>
            <Route path='/dashboard/tours/tourlist' element={<TourList/>}/>
            <Route path='/dashboard/tours/tourdetails/:id' element={<DashboardTourDetails/>}/>
            <Route path='/dashboard/tours/touradd' element={<TourAdd/>}/>
            <Route path='/dashboard/tours/touredit/:id' element={<TourEdit/>}/>
            <Route path='/dashboard/bookings' element={<BookingList/>}/>
            <Route path='/dashboard/bookings/bookingdetails/:id' element={<BookingDetails/>}/>
            {/* <Route path='/thank-you' element={<ThankYou/>} />
            <Route path='/tours/search' element={<SearchResultList/>} />
            <Route path='/dashboard/tours/tourlist' element={<TourList/>}/>
            <Route path='/dashboard/tours/tourdetails/:id' element={<DashboardTourDetails/>}/>
            <Route path='/dashboard/tours/touradd' element={<TourAdd/>}/>
            <Route path='/dashboard/tours/touredit/:id' element={<TourEdit/>}/>
            <Route path='/dashboard/customers/customerlist' element={<CustomerList/>}/>
            <Route path='/dashboard/customers/customerdetails/:id' element={<CustomerDetails/>}/>
            <Route path='/dashboard/customers/customeradd' element={<CustomerAdd/>}/>
            <Route path='/dashboard/customers/customeredit/:id' element={<CustomerEdit/>}/>
            <Route path='/dashboard/bookings' element={<BookingList/>}/>
            <Route path='/dashboard/bookings/bookingdetails/:id' element={<BookingDetails/>}/>
            <Route path='/profile' element={<Profile/>}/>
            
            
            <Route path='/tours/payment/receipt/:id' element={<SubmitReceipt/>}/> */}
            
        </Routes>
    )
};

export default Routers;