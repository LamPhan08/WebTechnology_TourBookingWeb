import React, {useState} from 'react'
import './touradd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import tourData from '../../../assets/data/tours'
import useFetch from '../../../hooks/useFetch';
import { BASE_URL } from '../../../utils/config';

const TourEdit = () => {
  const {id} = useParams();
  // const tour = tourData.find(tour => tour.id === id)
  const navigate = useNavigate();

  const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);
  // Use the || operator to provide default values if the data is not available
  const [description, setDescription] = useState(tour?.desc || "");
  const [_itinerary, setItinerary] = useState(tour?.itinerary || "");
  const [file, setFile] = useState(tour?.photo || "");

  if (!tour) {
    return <div>Loading...</div>;
  }

  const {
    title,
    price,
    address,
    city,
    distance,
    maxGroupSize,
    startDate,
    endDate,
    featured,
  } = tour;

  function handleUpload(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="newTour">
      <h1 className="newTourTitle">Edit Tour</h1>
      <form className="newTourForm">
        <div className="newTourItem">
          <label>City</label>
          <input type="text" placeholder="Enter City" defaultValue={city}/>
        </div>
        <div className="newTourItem">
          <label>Title</label>
          <input type="text" placeholder="Enter Title" defaultValue={title}/>
        </div>
        <div className="newTourItem">
          <label>Address</label>
          <input type="email" placeholder="Enter Address" defaultValue={address}/>
        </div>
        <div className="newTourItem">
          <label>Distance</label>
          <input type="text" placeholder="Enter Distance" defaultValue={distance}/>
        </div>
        <div className="newTourItem">
          <label>Maximum Number of People</label>
          <input type="text" placeholder="Enter Number" defaultValue={maxGroupSize}/>
        </div>
        <div className="newTourItem">
          <label>Price</label>
          <input type="text" placeholder="Enter Price" defaultValue={price}/>
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

        <div className="newTourItem">
          <label>Start Date</label>
          <input type="date" defaultValue={startDate}/>
        </div>
        <div className="newTourItem">
          <label>End Date</label>
          <input type="date" defaultValue={endDate}/>
        </div>
        <div className="newTourItem">
          <label>Featured</label>
          <select className="newTourSelect">
            <option value="yes" selected={featured === true ? true : false}>Yes</option>
            <option value="no" selected={featured === false ? true : false}>No</option>
          </select>
        </div>

        <div className="newTourItem">
          <label>Upload Tour Photo</label>
          <label className='uploadTourPhotoButton' htmlFor='file'>Choose File</label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleUpload}/>
        </div>
      </form>

      <div>
        <img className='tour__img' src={file} alt="" />
      </div>

      <div>
        <label style={{color: "#000"}}>Description</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={description} 
                    onChange={setDescription}
                    placeholder="Enter Description"/>
      </div>

      <div>
        <label style={{color: "#000"}}>Tour Itinerary</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={_itinerary} 
                    onChange={setItinerary}
                    placeholder="Enter Itinerary"/>
      </div>

      <div className='btn_zone'>
        
        <button className="newTourButton">Update</button>
      </div>
     
    </div>
  )
}

export default TourEdit
