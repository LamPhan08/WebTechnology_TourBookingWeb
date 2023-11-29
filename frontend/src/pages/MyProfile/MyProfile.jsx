import React, {useState, useRef} from 'react'
import './myProfile.css'
import userIcon from '../../assets/images/user.png'
import { Row, Col, Container } from 'reactstrap'

const profileData = {
    email: 'user@gmail.com',
    username: 'user',
    fullname: 'userFullName',
    phone: '0914123456',
    address: 'Somewhere',
    birthday: '2002-01-01'
  }

const MyProfile = () => {
    const usernameRef = useRef('');
  const fullnameRef = useRef('');
  const phoneRef = useRef('');
  const addressRef = useRef('');
  const birthdayRef = useRef('');

  const [update, setUpdate] = useState(false)

  const proceedUpdate = () => {
    setUpdate(!update);
    alert("Proceed Update!");
  }

  const updateHandler = () => {
    const username = usernameRef.current.value
    const fullname = fullnameRef.current.value
    const phone = phoneRef.current.value
    const address = addressRef.current.value
    const birthday = birthdayRef.current.value

    if (username === '' || fullname === '' || phone === '' || address === '' || birthday === '') {
      return alert('Please input full information!')
    }

    alert("Updated!");
    setUpdate(!update);

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
                        defaultValue={profileData.email}
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
                        defaultValue={profileData.username}
                        readOnly={update ? false : true}
                      />
                    </div>

                    <div className="profileUpdateItem">
                      <label className='displayLabel'>Full Name</label>
                      <input
                        type="text"
                        placeholder="Not updated yet"
                        className="profileUpdateInput"
                        ref={fullnameRef}
                        defaultValue={profileData.fullname}
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
                        defaultValue={profileData.phone}
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
                        defaultValue={profileData.address}
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
                        defaultValue={profileData.birthday}
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
