import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addVideo } from "../common/actions/common.action";

export default function VideoUpload() {
  const [selectedVideo, setSelectedVideo] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const fileToDataUri = (file) => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     resolve(event.target.result)
  //   };
  //   reader.readAsDataURL(file);
  //   })
    
  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    // console.log(file);
    // fileToDataUri(file)
    // .then((data) => {

      // var byteString = atob(data.split(',')[1]);
      // var arrayBuffer = new ArrayBuffer(byteString.length);
      // var intArray = new Uint8Array(arrayBuffer);
      // for (var i = 0; i < byteString.length; i++) {
      //   intArray[i] = byteString.charCodeAt(i);
      // }
    //   var blob = new Blob([arrayBuffer]);
    //     setSelectedVideo(blob);
    //   })
    // .catch((err) => {console.error(err)});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("lastName", '');
    formData.append("nic_num", '');
    formData.append("phone", '');
    formData.append("district", '');
    formData.append("video", selectedVideo);
    dispatch(addVideo(formData));
    console.log('WWW', selectedVideo);
    navigate("/UploadedSuccessfully");
  };

  return (
    <div className="video-container">
      <form onSubmit={handleSubmit}>
        <div className="video-label">
          Upload Your video here --{'>'}
          </div>
          <input type="file" name="file" onChange={onChangeHandler} />    
        <div><button className="primary-btn" type="submit">Upload</button></div>
      </form>
    </div>
  );
}
