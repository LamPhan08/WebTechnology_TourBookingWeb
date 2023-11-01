import React from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import person from '../../assets/images/person.png'


const About = () => {
  return (
    <Container className='aboutContainer'>
        <div className='copyrightContainer mb-5'>
            <div>This website is designed and developed by Nguyen Cong Doan, Phan Nhat Lam and Nguyen Tan Huy.</div>
        </div>

        <Row>
            <Col lg = '4'>
                <div className='developerContainer'>
                    <div className='userIcon mb-4'>
                        <img src={person} alt="" />
                    </div>

                    <div className='developerName'>NGUYEN CONG DOAN</div>

                    <div className='developerID'>Student ID: 20520447</div>

                    <div className='developerUniversity'>University of Information Technology</div>

                    <div className='line'></div>

                    <div className='contactTitle'>Contact:</div>

                    <div className='contactContainer'>
                      <i class="ri-mail-fill"></i>
                        <div>20520447@gm.uit.edu.vn</div>
                    </div>

                </div>
            </Col>

            <Col lg = '4'>
                <div className='developerContainer'>
                    <div className='userIcon mb-4'>
                        <img src={person} alt="" />
                    </div>

                    <div className='developerName'>PHAN NHAT LAM</div>

                    <div className='developerID'>Student ID: 20520608</div>

                    <div className='developerUniversity'>University of Information Technology</div>

                    <div className='line'></div>

                    <div className='contactTitle'>Contact:</div>

                    <div className='contactContainer'>
                        <i class="ri-mail-fill"></i>
                        <div>20520608@gm.uit.edu.vn</div>
                    </div>

                </div>
            </Col>
            <Col lg = '4'>
                <div className='developerContainer'>
                    <div className='userIcon mb-4'>
                        <img src={person} alt="" />
                    </div>

                    <div className='developerName'>NGUYEN TAN HUY</div>

                    <div className='developerID'>Student ID: 20520204</div>

                    <div className='developerUniversity'>University of Information Technology</div>

                    <div className='line'></div>

                    <div className='contactTitle'>Contact:</div>

                    <div className='contactContainer'>
                        <i class="ri-mail-fill"></i>
                        <div>20520204@gm.uit.edu.vn</div>
                    </div>

                </div>
            </Col>
        </Row>
    </Container>
)
}

export default About
