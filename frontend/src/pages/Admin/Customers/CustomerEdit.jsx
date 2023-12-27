import React, { useEffect, useState } from 'react'
import { MdCalendarToday, MdLocationSearching, MdMailOutline, MdPermIdentity, MdPhoneAndroid } from 'react-icons/md'
import './customeredit.css'
import customerData from '../../../assets/data/customers'
import { useParams, Link, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { BASE_URL } from '../../../utils/config'

const CustomerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  

  // const customer = customerData.find(customer => customer.id === id);

  // const { fullname, username, email, phone, address, dateofbirth } = customer;
  const { data: customer } = useFetch(`${BASE_URL}/users/${id}`);

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: ''
  })

  useEffect(() => {
    setFormData({
      fullName: customer.fullName,
      username: customer.username,
      phoneNumber: customer.phoneNumber,
      address: customer.address,
      dateOfBirth: customer.dateOfBirth
    })
  }, [customer])

  const handleInputChange = (e, fieldName) => {
    setFormData({...formData, [fieldName]: e.target.value})
  }

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target;
  //   return setFormData({...formData, [name]: value})
  // }

  // const customer = customerData.find(customer => customer.id === id);
  console.log(customer);

  if (!customer) {
    // Handle the case when data is still loading or customer is not found
    return <div>Loading...</div>;
    
  }

  const { fullName, username, email, phoneNumber, address, dateOfBirth } = customer;

  const handleClick = async e => {
    e.preventDefault();

    try {
        const res = await fetch(`${BASE_URL}/users/${id}`, {
            method: 'put',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(
              formData
            )
        });
        const result = await res.json();

        if(res.ok) {
            alert(result.message);
            navigate('/dashboard/customers/customerlist');
        }
    } catch (err) {
        alert(err.message);
    }
  }

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
                  readOnly
                />
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="abc"
                  className="userUpdateInput"
                  value={formData.username}
                  onChange={(e) => handleInputChange(e, 'username')}
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={fullName}
                  className="userUpdateInput"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange(e, 'fullName')}
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={phoneNumber}
                  className="userUpdateInput"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e, 'phoneNumber')}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={address}
                  className="userUpdateInput"
                  value={formData.address}
                  onChange={(e) => handleInputChange(e, 'address')}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="date"
                  defaultValue={dateOfBirth}
                  className="userUpdateInput"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange(e, 'dateOfBirth')}
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
                <button className="userUpdateButton" onClick={handleClick}>Update</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerEdit