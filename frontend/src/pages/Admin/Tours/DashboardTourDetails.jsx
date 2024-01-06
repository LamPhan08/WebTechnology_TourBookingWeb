import React from 'react'
import tourData from '../../../assets/data/tours'
import { useParams, Link } from 'react-router-dom'
import calculateAvgRating from '../../../utils/avgRating'
import './dashboardtourdetails.css'
import useFetch from '../../../hooks/useFetch'
import { BASE_URL } from '../../../utils/config'

const scheduleDetails = [
  {
    day: 'Ngày 1',
    activities: ['Đến điểm xuất phát', 'Check-in khách sạn'],
  },
  {
    day: 'Ngày 2',
    activities: ['Thăm địa điểm A', 'Dùng trưa tại nhà hàng địa phương', 'Tham quan điểm B'],
  },
  {
    day: 'Ngày 3',
    activities: ['Khám phá địa điểm B', 'Mua sắm tại thị trấn', 'Dùng tối tại nhà hàng'],
  },
  // Thêm các ngày và hoạt động khác nếu cần
];

const DashboardTourDetails = () => {
  const { id } = useParams();

  // const tour = tourData.find(tour => tour.id === id)

  // const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);

  // const customer = customerData.find(customer => customer.id === id);
  console.log(tour);

  if (!tour) {
    // Handle the case when data is still loading or customer is not found
    return <div>Loading...</div>;
    
  }

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize, itinerary } = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  return (
    <div className="tour__content">
      <h1 className="title">Tour Details</h1>
      <img src={photo} alt="" />

      <div className="tour__info">
        <div className='edit__zone'>
          <h2>
            {title}
          </h2>

          <Link to={"/dashboard/tours/touredit/" + id}>
            <button className='edit__btn'>Edit</button>
          </Link>
        </div>

        <div className="d-flex align-items-center gap-5">

          <span className="tour__rating d-flex align-items-center gap-1">
            <i className="ri-star-fill" style={{ 'color': "var(--secondary-color)" }}></i>
            {avgRating === 0 ? null : avgRating}

            {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
          </span>

          <span>
            <i className="ri-map-pin-user-fill"></i> {address}
          </span>


        </div>

        <div className="tour__extra-details">
          <span>
            <i className="ri-map-pin-2-line"></i>
            {city}
          </span>
          <span>
            <i className="ri-money-dollar-circle-line"></i>
            ${price}/person
          </span>
          <span>
            <i class="ri-map-pin-time-line"></i>
            {distance} km
          </span>
          <span>
            <i className="ri-group-line"></i>
            {maxGroupSize} people
          </span>
        </div>

        <h5>Description</h5>

        <p>{desc}</p>
      </div>

      <div className='tour__itinerary'>
        <h2>
          Tour Itinerary
        </h2>
        {itinerary}<br/>
        
        <ul>
                                            {scheduleDetails.map((dayDetail, index) => (
                                                <li key={index}>
                                                    <span className="day">{dayDetail.day}:</span>
                                                    <ul>
                                                        {dayDetail.activities.map((activity, activityIndex) => (
                                                            <li key={activityIndex}>{activity}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
      </div>
    </div>
  )
}

export default DashboardTourDetails
