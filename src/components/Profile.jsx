import React from "react";
import ProfileNavBar from "./ProfileNavBar";
import VideoUpload from './VideoUpload';

const Profile = () => {

  return(
  <div className="profile-container">
    <ProfileNavBar/>
    <VideoUpload />
   </div>
  );
};

export default Profile;
