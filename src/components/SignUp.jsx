import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./Navigation";
import { userSignUpSchema } from "../common/utils";
import { useDispatch } from "react-redux";
import { addUser } from "../common/actions/common.action";
import { createPhoneValidator} from '../common/utils';

const SignUp = () => {
  const initialValues = { firstName: "", lastName: "", NIC: "", email: "", NIC: '', mobile: '', district: "", address: '',password:'', confirmPassword:'',};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobileValidator = createPhoneValidator();

  const onSubmit = (values) => {
    const registerUserValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      role: values.accountType,
      nic_num: values.NIC,
      password: values.password,
      phone: values.mobile,
      district: values.district,
      email: values.email
    }
    console.log(registerUserValues);
    dispatch(addUser(registerUserValues));
    if (values["confirmPassword"] === values["password"]) {
      navigate("/LogIn");
    } else {
      alert("Password do not match.Re-enter!");
    }
  };

  return (
    <>
      <NavBar />
      <div className="sign-up">
        <h2 style={{ color: "gray", fontWeight: "bold" }}>Create An Account</h2>

        <section>
          <Formik
            initialValues={initialValues}
            validationSchema={userSignUpSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ handleChange }) => (
              <Form>
                <div className="form-body">
                  <div className="form-field">
                    <div className="label">Account type:</div>
                    <select
                      type="text"
                      name="accountType"
                      onChange={handleChange("accountType")}
                    >
                      <option value="default">Choose a type</option>
                      <option value="citizen">Citizen</option>
                      <option value="policeOfficer">Police Officer</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <div className="label">First Name:</div>
                    <Field
                      type="text"
                      name="firstName"
                      onChange={handleChange("firstName")}
                    />
                  </div>
                  <ErrorMessage name="firstName">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>
                  <div className="form-field">
                    Last Name:
                    <Field
                      type="text"
                      name="lastName"
                      onChange={handleChange("lastName")}
                      //   onClick={}
                      //   validate={}
                    />
                  </div>
                  <ErrorMessage name="lastName">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="form-field">
                    NIC Number:
                    <Field
                      type="text"
                      name="NIC"
                      onChange={handleChange("NIC")}
                      //   onClick={}
                      //   validate={}
                    />
                  </div>
                  <ErrorMessage name="NIC">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="form-field">
                    Email Address:
                    <Field
                      type="email"
                      name="email"
                      onChange={handleChange("email")}
                    />
                  </div>
                  <ErrorMessage name="email">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="form-field">
                    Address:
                    <Field
                      type="text"
                      name="address"
                      onChange={handleChange("address")}
                    />
                  </div>
                  <ErrorMessage name="address">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="form-field">
                    Phone Number:
                    <Field
                      type="text"
                      name="mobile"
                      onChange={handleChange("mobile")}
                      validate={mobileValidator}
                    />
                  </div>
                  <ErrorMessage name="mobile">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>
                  

                  <div className="form-field">
                    District:
                    <Field
                      type="text"
                      name="district"
                      onChange={handleChange("district")}
                    />
                  </div>
                  <ErrorMessage name="district">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="form-field">
                    Password:
                    <Field
                      type="password"
                      name="password"
                      onChange={handleChange("password")}
                      //   onClick={}
                      //   validate={}
                    />
                  </div>
                  <ErrorMessage name="password">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="form-field">
                    Confirm Password:
                    <Field
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange("confirmPassword")}
                      //   onClick={}
                      //   validate={}
                    />
                  </div>
                  <ErrorMessage name="confirmPassword">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>

                  <div className="field submit">
                    <button className="primary-btn" type="submit">
                      Submit
                    </button>
                    <div>
                      <span>
                        Or do you have already have an account?
                        <Link to="/LogIn">Login</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
  );
};

export default SignUp;
