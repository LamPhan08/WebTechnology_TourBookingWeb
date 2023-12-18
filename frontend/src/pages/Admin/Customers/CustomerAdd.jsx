import React, { useState } from 'react'
import './customeradd.css'
import {BASE_URL} from '../../../utils/config';
import { useNavigate } from 'react-router-dom';

const CustomerAdd = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  const displayInfo = () => {
    alert(`${username}\n${fullName}\n${email}\n${password}\n${phoneNumber}\n${address}\n${dob}`);
  }

  const navigate = useNavigate();

  const handleClick = async e => {
    e.preventDefault();

    try {
        const res = await fetch(`${BASE_URL}/users`, {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
              username,
              fullName,
              email,
              password,
              phoneNumber,
              address,
              dob
            })
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
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter Username"
            value={username}
            onChange={(text) => {
              setUsername(text.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name" 
            value={fullName}
            onChange={(text) => {
              setFullName(text.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" 
            value={email}
            onChange={(text) => {
              setEmail(text.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" 
            value={password}
            onChange={(text) => {
              setPassword(text.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter Phone Number" 
            value={phoneNumber}
            onChange={(text) => {
              setPhoneNumber(text.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" 
            value={address}
            onChange={(text) => {
              setAddress(text.target.value);
            }}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <div className="newUserItem">
          <label>Date of birth</label>
          <input type="date"
            value={dob}
            onChange={(text) => {
              setDOB(text.target.value);
            }}
          />
        </div>
      </form>

      <button className="newUserButton" onClick={handleClick}>Create</button>
     
    </div>
  )
}

export default CustomerAdd