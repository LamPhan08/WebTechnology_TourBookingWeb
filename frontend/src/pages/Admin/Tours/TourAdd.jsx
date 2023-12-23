import React, {useState} from 'react';
import './touradd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import landscape from '../../assets/images/landscape.png'
import {BASE_URL} from '../../../utils/config';
import { useNavigate } from 'react-router-dom';

const TourAdd = () => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [distance, setDistance] = useState('');
  const [photo, setPhoto] = useState('');
  const [desc, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [maxGroupSize, setMaxGroupSize] = useState('');
  const [featured, setFeatured] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [itinerary, setItinerary] = useState('');
  
  const [file, setFile] = useState();
  function handleUpload(e) {
        // console.log(e.target.files);
        // setFile(URL.createObjectURL(e.target.files[0]));
        // setPhoto(URL.createObjectURL(e.target.files[0]))
        const imagePath = `/tour-images/${e.target.files[0].name}`
        // photo.value = imagePath;
        setPhoto(imagePath)
        console.log(photo);
        
  }

  const navigate = useNavigate();

  const displayInfo = () => {
    alert(`${title}\n${city}\n${address}\n${distance}\n${photo}\n${desc}\n${price}\n${maxGroupSize}\n${featured}\n${startDate}\n${endDate}\n${itinerary}`);
  }

  const handleClick = async e => {
    e.preventDefault();

    try {
        const res = await fetch(`${BASE_URL}/tours`, {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
              title,
              city,
              address,
              distance,
              photo,
              desc,
              price,
              maxGroupSize,
              featured,
              startDate,
              endDate,
              itinerary
            })
        });
        const result = await res.json();
        console.log(result);

        if(!res.ok) {
            alert(result.message);
            // navigate('/dashboard/tours/tourlist');
        }
    } catch (err) {
        alert(err.message);
    }
  }

  return (
    <div className="newTour">
      <h1 className="newTourTitle">New Tour</h1>
      <form className="newTourForm">
        <div className="newTourItem">
          <label>City</label>
          <input type="text" placeholder="Enter City" 
            value={city}
            onChange={(text) => {
              setCity(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem">
          <label>Title</label>
          <input type="text" placeholder="Enter Title" 
            value={title}
            onChange={(text) => {
              setTitle(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" 
            value={address}
            onChange={(text) => {
              setAddress(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem">
          <label>Distance</label>
          <input type="number" placeholder="Enter Distance" 
            value={distance}
            onChange={(text) => {
              setDistance(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem">
          <label>Maximum Number of People</label>
          <input type="number" placeholder="Enter Number" 
            value={maxGroupSize}
            onChange={(text) => {
              setMaxGroupSize(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem">
          <label>Price</label>
          <input type="number" placeholder="Enter Price" 
            value={price}
            onChange={(text) => {
              setPrice(text.target.value);
            }}
          />
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
          <input type="date"
            value={startDate}
            onChange={(text) => {
              setStartDate(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem">
          <label>End Date</label>
          <input type="date"
            value={endDate}
            onChange={(text) => {
              setEndDate(text.target.value);
            }}
          />
        </div>
        <div className="newTourItem"
          value={featured}
          onChange={(text) => {
            setFeatured(text.target.value);
          }}
        >
          <label>Featured</label>
          <select className="newTourSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="newTourItem">
          <label>Upload Tour Photo</label>
          <label className='uploadTourPhotoButton' htmlFor='file'>Choose File</label>
          <input type="file" id="file" style={{ display: "none" }} accept="image/jpg, image/jpeg, image/png" onChange={handleUpload}/>
        </div>
      </form>

      <div>
        <img id='tourPhoto' className='tour__img' src={photo} alt="" />
      </div>

      <div>
        <label style={{color: "#000"}}>Description</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={desc} 
                    // onChange={setDescription}
                    onChange={(content, delta, source, editor) => {
                      // Update the state with only the plain text content
                      setDescription(editor.getText().trim());
                    }}
                    placeholder="Enter Description"/>
      </div>

      <div>
        <label style={{color: "#000"}}>Tour Itinerary</label>
        <ReactQuill className='description_input_zone' 
                    theme='snow' 
                    value={itinerary} 
                    // onChange={setItinerary}
                    onChange={(content, delta, source, editor) => {
                      // Update the state with only the plain text content
                      setItinerary(editor.getText().trim());
                    }}
                    placeholder="Enter Itinerary"/>
      </div>

      <div className='btn_zone'>

        <button className="newTourButton" onClick={displayInfo}>Create</button>
      </div>
     
    </div>
  )
}

export default TourAdd
