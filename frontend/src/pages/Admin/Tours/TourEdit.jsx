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

  // const handleInputChange = (e, fieldName) => {
  //   setFormData({ ...formData, [fieldName]: e });
  // }

  const handleChange = e => {
    console.log(e.target.name)
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleDesc = e => {
    setFormData({...formData, [formData.desc]: e.target.value});
  };

  const handleItinerary = e => {
    setFormData({...formData, [formData.itinerary]: e.target.value});
  };

  const handleQuillChangeDesc = (content, delta, source, editor) => {    
    setFormData({ ...formData, desc: editor.getText() });   
  };

  const handleQuillChangeItinerary = (content, delta, source, editor) => {    
    setFormData({ ...formData, itinerary: editor.getText() });   
  };

  // const handleQuillChange = (value, fieldName) => {
  //   setFormData({ ...formData, [fieldName]: value });
  //   // setFormData(prevFormData => ({ ...prevFormData, [fieldName]: value }));
  // };

  const handleQuillEditDesc = (value) => {
    setFormData((prev) => {
      return {
        ...prev,
        desc: value
      }
    })
  }

  const handleQuillEditItinerary = (value) => {
    setFormData((prev) => {
      return {
        ...prev,
        itinerary: value
      }
    })
  }
  

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
    console.log(formData.photo)
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
    displayInfo()
  }

  return (
    <div className="newTour">
      <h1 className="newTourTitle">Edit Tour</h1>
      <form className="newTourForm">
        <div className="newTourItem">
          <label>City</label>
          <input type="text" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>Title</label>
          <input type="text" name="title" placeholder="Enter Title" value={formData.title} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>Address</label>
          <input type="email" name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>Distance</label>
          <input type="text" name="distance" placeholder="Enter Distance" value={formData.distance} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>Maximum Number of People</label>
          <input type="text" name="maxGroupSize" placeholder="Enter Number" value={formData.maxGroupSize} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>Price</label>
          <input type="text" name="price" placeholder="Enter Price" value={formData.price} onChange={handleChange}/>
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
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>End Date</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange}/>
        </div>
        <div className="newTourItem">
          <label>Featured</label>
          {/* <select className="newTourSelect" name="featured">
            <option value="yes" selected={formData.featured === true ? true : false} onChange={handleChange}>Yes</option>
            <option value="no" selected={formData.featured === false ? true : false} onChange={handleChange}>No</option>
          </select> */}
          <select className="newTourSelect" name="featured" value={formData.featured} onChange={handleChange}>
              <option value="yes" selected={formData.featured === true ? true : false}>Yes</option>
              <option value="no" selected={formData.featured === false ? true : false}>No</option>
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
                    defaultValue=''
                    // name='desc'
                    // onChange={setDescription}
                    // onChange={(content, delta, source, value) => handleQuillChange(value.getText().trim(), 'desc')}
                    // onChange={(e) => handleInputChange(e, 'desc')}
                    // onChange={handleQuillChangeDesc}
                    // onChange={handleDesc}
                    // onChange={(e) => setFormData({...formData, desc: e.target.value})}
                    placeholder="Enter Description"/>
      </div>

      <div>
        <label style={{color: "#000"}}>Tour Itinerary</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={formData.itinerary} 
                    defaultValue=''
                    // name='itinerary'
                    // onChange={setItinerary}
                    // onChange={(content, delta, source, value) => handleQuillChange(value.getText().trim(), 'itinerary')}
                    // onChange={(e) => handleInputChange(e, 'itinerary')}
                    // onChange={handleItinerary}
                    // onChange={(e) => setFormData({...formData, itinerary: e.target.value})}
                    // onChange={handleQuillEditItinerary}
                    placeholder="Enter Itinerary"/>
      </div>
      <div className='btn_zone'>
        
        <button className="newTourButton" onClick={handleClick}>Update</button>
      </div>
     
    </div>
  )
}

export default TourEdit
