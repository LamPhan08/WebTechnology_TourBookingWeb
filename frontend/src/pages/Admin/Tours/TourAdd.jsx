import React, {useState} from 'react';
import './touradd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import landscape from '../../assets/images/landscape.png'

const TourAdd = () => {
  const [description, setDescription] = useState('');
  const [itinerary, setItinerary] = useState('');
  
  const [file, setFile] = useState();
  function handleUpload(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="newTour">
      <h1 className="newTourTitle">New Tour</h1>
      <form className="newTourForm">
        <div className="newTourItem">
          <label>City</label>
          <input type="text" placeholder="Enter City" />
        </div>
        <div className="newTourItem">
          <label>Title</label>
          <input type="text" placeholder="Enter Title" />
        </div>
        <div className="newTourItem">
          <label>Address</label>
          <input type="email" placeholder="Enter Address" />
        </div>
        <div className="newTourItem">
          <label>Distance</label>
          <input type="password" placeholder="Enter Distance" />
        </div>
        <div className="newTourItem">
          <label>Maximum Number of People</label>
          <input type="text" placeholder="Enter Number" />
        </div>
        <div className="newTourItem">
          <label>Price</label>
          <input type="text" placeholder="Enter Price" />
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
          <input type="date"/>
        </div>
        <div className="newTourItem">
          <label>End Date</label>
          <input type="date"/>
        </div>
        <div className="newTourItem">
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
        <img id='tourPhoto' className='tour__img' src={file} alt="" />
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
                    value={itinerary} 
                    onChange={setItinerary}
                    placeholder="Enter Itinerary"/>
      </div>

      <div className='btn_zone'>

        <button className="newTourButton">Create</button>
      </div>
     
    </div>
  )
}

export default TourAdd
