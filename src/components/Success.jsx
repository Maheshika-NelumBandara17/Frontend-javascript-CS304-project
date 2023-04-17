import React from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar, BackButton } from "react-onsenui";
import { useSelector } from "react-redux";
import ProfileNavBar from "./ProfileNavBar";

const Success = ({msg, path}) => {
  const navigate = useNavigate();
  // const video = useSelector((state) => state?.common?.video?.video);

  return (
    <>
      <ProfileNavBar/>
      <div className="success-container">
        <div className="video-container">
        <div className="success-message">
          <span>{msg}</span>
          
          {/* <video width="750" height="500" controls>
              <source src={video} type="video/mp4" />
            </video>   */}
        </div>

        <div className="backButton-container">
          <Toolbar modifier="material" className="back-button">
            <BackButton
              onClick={() => {
                navigate(path);
              }}
              modifier="material"
            ></BackButton>
            <span>Back</span>
          </Toolbar>
        </div>
        </div>
      </div>
    </>
  );
};

export default Success;
