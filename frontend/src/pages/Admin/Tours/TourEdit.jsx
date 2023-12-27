import React, {useEffect, useState} from 'react'
import './touradd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
// import tourData from '../../../assets/data/tours'
import useFetch from '../../../hooks/useFetch';
import { BASE_URL } from '../../../utils/config';

const TourEdit = () => {
  const {id} = useParams();
  // const tour = tourData.find(tour => tour.id === id)
  const navigate = useNavigate();

  const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);

  // const {
  //   title,
  //   city,
  //   address,
  //   distance,
  //   photo,
  //   desc,
  //   price,
  //   maxGroupSize,
  //   featured,
  //   startDate,
  //   endDate,
  //   itinerary,
  // } = tour;

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    address: '',
    city: '',
    distance: '',
    maxGroupSize: '',
    startDate: '',
    endDate: '',
    featured: '',
    desc: '',
    itinerary: '',
    photo: '',
  })
  // const [photo, setFile] = useState(tour?.photo || "");

  useEffect(() => {
    setFormData({
      title: tour.title,
      price: tour.price,
      address: tour.address,
      city: tour.city,
      distance: tour.distance,
      maxGroupSize: tour.maxGroupSize,
      startDate: tour.startDate,
      endDate: tour.endDate,
      featured: tour.featured,
      desc: tour.desc,
      itinerary: tour.itinerary,
      photo: tour.photo,
    })
  }, [tour])

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e });
  }

  const handleQuillChange = (value, fieldName) => {
    // setFormData({ ...formData, [fieldName]: value });
    setFormData(prevFormData => ({ ...prevFormData, [fieldName]: value }));
  };
  

  // Use the || operator to provide default values if the data is not available
  // const [desc, setDescription] = useState(tour.desc);
  // const [itinerary, setItinerary] = useState(tour.itinerary);
  

  if (!tour) {
    return <div>Loading...</div>;
  }

  function handleUpload(e) {
    // console.log(e.target.files);
    // setFile(URL.createObjectURL(e.target.files[0]));
    const imagePath = `/tour-images/${e.target.files[0].name}`
    formData.photo = imagePath
  }

  const displayInfo = () => {
    alert(`${formData.title}\n${formData.city}\n${formData.address}\n${formData.distance}\n${formData.photo}\n${formData.desc}\n${formData.price}\n${formData.maxGroupSize}\n${formData.featured}\n${formData.startDate}\n${formData.endDate}\n${formData.itinerary}`);
  }

  const handleClick = async e => {
    e.preventDefault();

    try {
        const res = await fetch(`${BASE_URL}/tours/${id}`, {
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
            navigate('/dashboard/tours/tourlist');
        }
    } catch (err) {
        alert(err.message);
        console.log(err.message)
    }
  }

  return (
    <div className="newTour">
      <h1 className="newTourTitle">Edit Tour</h1>
      <form className="newTourForm">
        <div className="newTourItem">
          <label>City</label>
          <input type="text" placeholder="Enter City" defaultValue={formData.city} onChange={(e) => handleInputChange(e, 'city')}/>
        </div>
        <div className="newTourItem">
          <label>Title</label>
          <input type="text" placeholder="Enter Title" defaultValue={formData.title} onChange={(e) => handleInputChange(e, 'title')}/>
        </div>
        <div className="newTourItem">
          <label>Address</label>
          <input type="email" placeholder="Enter Address" defaultValue={formData.address} onChange={(e) => handleInputChange(e, 'address')}/>
        </div>
        <div className="newTourItem">
          <label>Distance</label>
          <input type="text" placeholder="Enter Distance" defaultValue={formData.distance} onChange={(e) => handleInputChange(e, 'distance')}/>
        </div>
        <div className="newTourItem">
          <label>Maximum Number of People</label>
          <input type="text" placeholder="Enter Number" defaultValue={formData.maxGroupSize} onChange={(e) => handleInputChange(e, 'maxGroupSize')}/>
        </div>
        <div className="newTourItem">
          <label>Price</label>
          <input type="text" placeholder="Enter Price" defaultValue={formData.price} onChange={(e) => handleInputChange(e, 'price')}/>
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
          <input type="date" defaultValue={formData.startDate} onChange={(e) => handleInputChange(e, 'startDate')}/>
        </div>
        <div className="newTourItem">
          <label>End Date</label>
          <input type="date" defaultValue={formData.endDate} onChange={(e) => handleInputChange(e, 'endDate')}/>
        </div>
        <div className="newTourItem">
          <label>Featured</label>
          <select className="newTourSelect">
            <option value="yes" selected={formData.featured === true ? true : false} onChange={(e) => handleInputChange(e, 'featured')}>Yes</option>
            <option value="no" selected={formData.featured === false ? true : false} onChange={(e) => handleInputChange(e, 'featured')}>No</option>
          </select>
        </div>

        <div className="newTourItem">
          <label>Upload Tour Photo</label>
          <label className='uploadTourPhotoButton' htmlFor='file'>Choose File</label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleUpload}/>
        </div>
      </form>

      <div>
        <img className='tour__img' src={formData.photo} alt="" />
      </div>

      <div>
        <label style={{color: "#000"}}>Description</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={formData.desc} 
                    // onChange={setDescription}
                    // onChange={(content, delta, source, value) => handleQuillChange(value.getText().trim(), 'desc')}
                    placeholder="Enter Description"/>
      </div>

      <div>
        <label style={{color: "#000"}}>Tour Itinerary</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={formData.itinerary} 
                    // onChange={setItinerary}
                    // onChange={(content, delta, source, value) => handleQuillChange(value.getText().trim(), 'itinerary')}
                    placeholder="Enter Itinerary"/>
      </div>

      <div className='btn_zone'>
        
        <button className="newTourButton" onClick={displayInfo}>Update</button>
      </div>
     
    </div>
  )
}

export default TourEdit
