import React from 'react'
import tourData from '../../../assets/data/tours'
import { useParams, Link } from 'react-router-dom'
import calculateAvgRating from '../../../utils/avgRating'
import './dashboardtourdetails.css'

const DashboardTourDetails = () => {
  const { id } = useParams();

  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

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

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis error ut, sit nam dicta soluta, id doloribus doloremque consectetur sint hic tenetur aspernatur iure aliquid, ratione recusandae sequi omnis facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem cumque voluptate! Libero consequatur natus cumque adipisci velit, voluptas, blanditiis est maxime ut rerum maiores, distinctio et aperiam dolor nihil?4
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis doloremque commodi assumenda placeat alias perspiciatis exercitationem quos suscipit quae nihil, expedita quaerat aperiam provident quo architecto corrupti doloribus cupiditate.
      </div>
    </div>
  )
}

export default DashboardTourDetails
