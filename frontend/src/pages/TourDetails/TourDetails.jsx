import React from 'react'
import { useParams } from 'react-router-dom'


const TourDetails = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>

        </div>
    )
}

export default TourDetails
