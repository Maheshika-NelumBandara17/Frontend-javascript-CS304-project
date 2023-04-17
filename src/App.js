import React from "react";
import Home from "./components/Home";
import References from "./components/References";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Admin from "./components/AdminProfile";
import FineForm from "./components/FineForm";
import PaymentForm from "./components/PaymentForm";
import VideoUploadSuccess from "./components/UploadSuccess";
import SubmitSuccess from "./components/SubmitSuccess";
import DeleteSuccess from "./components/DeletedSuccessfully";
import ProfileEditStatus from "./components/ProfileEditStatus";
import Settings from "./components/Settings";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/References" element={<References />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UploadedSuccessfully" element={<VideoUploadSuccess />} />
        <Route path="/SubmittedSuccessFully" element={<SubmitSuccess />} />
        <Route path="/UpdatedSuccessfully" element={<ProfileEditStatus />} />
        <Route path="/DeletedSuccessfully" element={<DeleteSuccess />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/FineForm" element={<FineForm />} />
        <Route path="/PaymentForm" element={<PaymentForm />} />
        <Route path="/Profile/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
