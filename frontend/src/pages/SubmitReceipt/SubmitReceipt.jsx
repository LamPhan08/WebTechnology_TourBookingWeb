import React, { useContext } from 'react'
import './submitReceipt.css'
import { Container, Col, Row } from 'reactstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Payment from '../Payment/Payment'
import { AuthContext } from '../../context/AuthContext'
import booking from '../../components/Booking/Booking'
import { BASE_URL } from '../../utils/config'

const SubmitReceipt = () => {
    const location = useLocation() //Nhận data booking

    const navigate = useNavigate()

    console.log(location.state)

    const { user } = useContext(AuthContext);

    const handleCreateBooking = async (e) => {
        //Backend insert booking vào csdl (dùng data từ location.state.thuộc tính)

        // booking gồm các trường: {
        //     tourname: "Westminister Bridge",
        //     total: 200,
        //     startDate: "2023-01-01",
        //     endDate: "2023-01-05",
        //     bookingDate: "2022-12-28", // => trường này giá trị là "ngày hôm nay"
        //     fullName: "Benjamin",
        //     email: "benjamin1234@gmail.com",
        //     phone: "0123456789",
        //     address: "Somewhere",
        //     guestSize: 8,
        //     paymentStatus: '', // => trường này có 3 trạng thái là Pending, Approved và Invalid Receipt. Khi insert vào csdl thì cho trường này là Pending
        //     receiptImage: '' // => trường này lấy ảnh mới upload bỏ vào
        // }

        e.preventDefault();

        console.log();

        try {
            if(!user || user === undefined || user === null) {
                return alert('Please sign in to continue!');
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(
                    location.state
                ),
            });

            const result = await res.json();
            if(!res.ok) {
                return alert(result.message);
            }
            navigate('/thank-you');
        } catch (err) {
            alert(err.message);
        }

        // Insert rồi navigate qua trang Thank You
        navigate('/thank-you')
    }

    //Upload hình
    const [file, setFile] = useState()

    const uploadImage = async (files) => {
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('upload_preset', 'travel-booking-system')
        formData.append('cloud_name', 'doancloud')
    
        const res = await fetch('https://api.cloudinary.com/v1_1/doancloud/image/upload', {
            method: 'post',
            body: formData
        })
    
        const data = await res.json()
        // setPhoto(data.secure_url)
        // console.log(photo)
        location.state.receiptImage = data.secure_url
        setFile(location.state.receiptImage)
        console.log(location.state.receiptImage)
        return data
      }

    const handleUpload = (e) => {
        // console.log(e.target.files);
        // setFile(URL.createObjectURL(e.target.files[0]));
        // const imagePath = `/receipt-images/${e.target.files[0].name}`
        // console.log(imagePath)
        // location.state.receiptImage = imagePath
        uploadImage(e.target.files)
    }

    return (
        <Container className='submit_receipt_container'>
            <Row className='submit'>
                <Col lg='12'>
                    <div>
                        <div className="insideSubmitReceiptContainer">
                            <div className='notice mb-3'>Please provide a photo proof after the transfer</div>

                            <div className='divideLine mb-3'></div>



                            <div className='receiptImage mb-3'>
                                <img src={file} alt="" />
                            </div>

                            <div className='btnZone'>
                                <div>
                                    <label className='chooseFileBtn' htmlFor='file'>Choose File</label>
                                    <input type="file" id="file" style={{ display: "none" }} accept="image/jpg, image/jpeg, image/png" onChange={handleUpload} />
                                </div>

                                <button className='submitBtn mb-3' onClick={handleCreateBooking}>
                                    Submit
                                </button>
                            </div>

                            <div className='afterSubmittingNotice'>
                                * Please wait for the verification process after submitting the photo proof.
                                This could take up to couple days. You can check the status of submission from "My Bookings" page.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SubmitReceipt
