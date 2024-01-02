import React, {useState, useRef, useContext, useEffect} from 'react'
import './myProfile.css'
import userIcon from '../../assets/images/user.png'
import { Row, Col, Container } from 'reactstrap'
import { AuthContext } from '../../context/AuthContext'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import { useNavigate } from 'react-router-dom'

const profileData = {
    email: 'user@gmail.com',
    username: 'user',
    fullname: 'userFullName',
    phone: '0914123456',
    address: 'Somewhere',
    birthday: '2002-01-01'
  }

const MyProfile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { data: singleUser } = useFetch(`${BASE_URL}/users/${user._id}`);
  console.log(singleUser)
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    email: ''
  })

  useEffect(() => {
    setFormData({
      fullName: singleUser.fullName,
      username: singleUser.username,
      phoneNumber: singleUser.phoneNumber,
      address: singleUser.address,
      dateOfBirth: singleUser.dateOfBirth,
      email: singleUser.email
    })
  }, [singleUser])

  const handleInputChange = (e, fieldName) => {
    setFormData({...formData, [fieldName]: e.target.value})
  }

  const navigate = useNavigate()
    const usernameRef = useRef('');
  const fullNameRef = useRef('');
  const phoneRef = useRef('');
  const addressRef = useRef('');
  const birthdayRef = useRef('');

  const [update, setUpdate] = useState(false)

  const proceedUpdate = () => {
    setUpdate(!update);
    alert("Proceed Update!");
  }

  const updateHandler = async e => {
    // const username = usernameRef.current.value
    // const fullName = fullNameRef.current.value
    // const phone = phoneRef.current.value
    // const address = addressRef.current.value
    // const birthday = birthdayRef.current.value
    const username = formData.username
    const fullName = formData.fullName
    const phone = formData.phoneNumber
    const address = formData.address
    const birthday = formData.dateOfBirth

    // if (username === '' || fullName === '' || phone === '' || address === '' || birthday === '') {
    //   return alert('Please input full information!')
    // }

    e.preventDefault();

    try {
      if (username === '' || fullName === '' || phone === '' || address === '' || birthday === '') {
        return alert('Please input full information!')
      }
        const res = await fetch(`${BASE_URL}/users/${user._id}`, {
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
          setUpdate(!update);      
        }
    } catch (err) {
        alert(err.message);
    }
    // alert("Updated!");
    // setUpdate(!update);
    
  }

  const displayInfo = () => {
    alert(`${formData.username}\n${formData.fullName}\n${formData.email}\n${formData.phoneNumber}\n${formData.address}\n${formData.dateOfBirth}`);
  }

  return (
    <Container className='profile__container'>
      <Row>
        <Col lg='12'>
          <div className="profile">
            <div className="profileTitleContainer">
              <h4 className="profileTitle">Personal Information</h4>
            </div>
            <div className="profileContainer">
              {/*  */}
              <div className="profileUpdate">
                <div className="profileIconContainer">
                  <img
                    src={userIcon}
                    alt=""

                  />
                </div>

                <div className="profileUpdateForm">
                  <div className="profileUpdateLeft">
                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Email</label>
                      <input
                        type="text"
                        className="profileUpdateInput"
                        defaultValue={formData.email}
                        readOnly={true}
                      />
                    </div>

                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Username</label>
                      <input
                        type="text"
                        placeholder="Not updated yet"
                        className="profileUpdateInput"
                        ref={usernameRef}
                        value={formData.username}
                        onChange={(e) => handleInputChange(e, 'username')}
                        readOnly={update ? false : true}
                      />
                    </div>

                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Full Name</label>
                      <input
                        type="text"
                        placeholder="Not updated yet"
                        className="profileUpdateInput"
                        ref={fullNameRef}
                        value={formData.fullName}
                        onChange={(e) => handleInputChange(e, 'fullName')}
                        readOnly={update ? false : true}
                      />
                    </div>

                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Phone</label>
                      <input
                        type="text"
                        placeholder="Not updated yet"
                        className="profileUpdateInput"
                        ref={phoneRef}
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange(e, 'phoneNumber')}
                        readOnly={update ? false : true}
                      />
                    </div>

                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Address</label>
                      <input
                        type="text"
                        placeholder="Not updated yet"
                        className="profileUpdateInput"
                        ref={addressRef}
                        value={formData.address}
                        onChange={(e) => handleInputChange(e, 'address')}
                        readOnly={update ? false : true}
                      />
                    </div>

                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Date of Birth</label>
                      <input
                        type="date"
                        // defaultValue={getDate()}
                        className="profileUpdateInput"
                        ref={birthdayRef}
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange(e, 'dateOfBirth')}
                        readOnly={update ? false : true}
                      />
                    </div>
                  </div>

                  <div className="profileUpdateRight">
                    <button className="profileUpdateButton" onClick={update ? updateHandler : proceedUpdate}>{update ? 'Update' : 'Update Information'}</button>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MyProfile
