import React from 'react'
import { MdCalendarToday, MdLocationSearching, MdMailOutline, MdPermIdentity, MdPhoneAndroid } from 'react-icons/md'
import './customeredit.css'
import customerData from '../../../assets/data/customers'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { BASE_URL } from '../../../utils/config'

const CustomerDetails = () => {
  const { id } = useParams();
  const { data: customer } = useFetch(`${BASE_URL}/users/${id}`);

  // const customer = customerData.find(customer => customer.id === id);
  console.log(customer);

  if (!customer) {
    // Handle the case when data is still loading or customer is not found
    return <div>Loading...</div>;
    
  }

  const { fullName, username, email, phoneNumber, address, dateOfBirth } = customer;
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Customer Details</h1>
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{fullName}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdPermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{username}</span>
            </div>
            <div className="userShowInfo">
              <MdCalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{dateOfBirth}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MdPhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{phoneNumber}</span>
            </div>
            <div className="userShowInfo">
              <MdMailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{email}</span>
            </div>
            <div className="userShowInfo">
              <MdLocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{address}</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Details</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Email</label>
                <span className="userUpdateInput">{email}</span>
              </div>

              <div className="userUpdateItem">
                <label>Username</label>
                <span className="userUpdateInput">{username}</span>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <span className="userUpdateInput">{fullName}</span>
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <span className="userUpdateInput">{phoneNumber}</span>

              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <span className="userUpdateInput">{address}</span>
              </div>
              <div className="userUpdateItem">
                <label>Date of Birth</label>
                <span className="userUpdateInput">{dateOfBirth}</span>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                {/* <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                
                <input type="file" id="file" style={{ display: "none" }} /> */}
              </div>
              <Link to={"/dashboard/customers/customeredit/" + id}>
                <button className="userUpdateButton">Edit</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails