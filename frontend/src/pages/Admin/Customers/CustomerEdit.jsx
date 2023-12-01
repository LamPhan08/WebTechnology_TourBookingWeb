import React from 'react'
import { MdCalendarToday, MdLocationSearching, MdMailOutline, MdPermIdentity, MdPhoneAndroid } from 'react-icons/md'
import './customeredit.css'
import customerData from '../../../assets/data/customers'
import { useParams, Link } from 'react-router-dom'

const CustomerEdit = () => {
  const { id } = useParams();

  const customer = customerData.find(customer => customer.id === id);

  const { fullname, username, email, phone, address, dateofbirth } = customer;

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Customer</h1>
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
              <span className="userShowUsername">{fullname}</span>
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
              <span className="userShowInfoTitle">{dateofbirth}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MdPhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{phone}</span>
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
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={fullname}
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={phone}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={address}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="date"
                  defaultValue={dateofbirth}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              {/* <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <MdPublish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div> */}

              <Link to={"/dashboard/customers/customerdetails/" + id}>
                <button className="userUpdateButton">Update</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerEdit