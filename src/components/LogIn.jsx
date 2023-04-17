import React from "react";
import "../App.css";
import "./form.css";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./Navigation";
import { CITIZEN } from "../common/types";

function LogIn() {
  const navigate = useNavigate();
  // const token = useSelector((state) => state?.auth?.token);
  const initialValues = { userID: "", password: "" };

  const onSubmit = (values) => {
    console.log({ nic: values.userID, password: values.password });

    // dispatch(userLogin({nic: values.userID, password: values.password}));

    if(  values.role === CITIZEN
      ){
      navigate("/Profile");
    }else{
     navigate("/Admin");
    }
  };

  return (
    <>
      <NavBar />
      <section className="backlogin">
        <div
          className="color-overlay d-flex
      justify-content-center allign-items-center"
        >
          <Formik
            initialValues={initialValues}
            // validationSchema={userSignUpSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ handleChange }) => (
              <Form>
                <div>
                  <div className="form">
                    <label>user role: </label>
                    <select
                      type="text"
                      name="role"
                      onChange={handleChange("role")}
                    >
                      <option value="default">Choose a type</option>
                      <option value="citizen">Citizen</option>
                      <option value="policeOfficer">Police Officer</option>
                    </select>
                    <label>userID: </label>
                    <Field
                      type="text"
                      name="userID"
                      onChange={handleChange("userID")}
                      placeholder="Enter userID"
                      id="userID"
                      className="form-control inp_text"
                    />
                    <label>Password: </label>
                    <Field
                      type="password"
                      name="password"
                      onChange={handleChange("password")}
                      placeholder="Enter password"
                      className="form-control"
                    />

                    <button className="primary-btn" type="submit">
                      Log In
                    </button>
                    <div>
                      <span>
                        Don't have an account?
                        <Link to="/SignUp">SignUp</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}

export default LogIn;
