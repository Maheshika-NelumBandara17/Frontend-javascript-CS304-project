import React, { useEffect } from "react";
import ProfileNavBar from "./ProfileNavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../common/actions/common.action";

const AdminProfile = () => {
   const videos = useSelector((state) => state?.common?.listOfVideos);

  const navigate = useNavigate();
  return (
    <div className="admin-profile-container">
      <ProfileNavBar />
      <div className="admin-header">
        {videos !== undefined ? (
          <>
            <h2>Videos for you</h2>

            {videos.map((item, index) => {
              return (
                <div className="video-container" key={index}>
                  <div>
                    <video width="750" height="500" controls>
                      <source
                        src={`data:video/mp4;base64,${item.video}`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div>
                    <button
                      className="primary-btn"
                      style={{ marginLeft: "10px", backgroundColor: "red" }}
                      onClick={() => navigate("/DeletedSuccessfully")}
                    >
                      Delete Video
                    </button>
                  </div>
                  <div style={{ color: "black" }}>
                    Uploaded by: {item.lastName}
                  </div>
                  <div style={{ color: "black" }}>
                    Reporter's phone number, NIC and district: {item.phone},{" "}
                    {item.nic_num} and {item.district}
                  </div>
                  <button
                    className="primary-btn"
                    style={{ marginRight: "10px" }}
                    onClick={() => navigate("/")}
                  >
                    License Details
                  </button>
                  <button
                    className="primary-btn"
                    style={{ marginRight: "10px" }}
                    onClick={() => navigate("/FineForm")}
                  >
                    Add Fine
                  </button>
                  <button
                    className="primary-btn"
                    onClick={() => navigate("/PaymentForm")}
                  >
                    Add payment
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <div className="admin-profile">
            <div style={{ color: "red", fontWeight: "bold" }}>
              No videos at the moment
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
