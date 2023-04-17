import NavBar from './ProfileNavBar';
import { useNavigate } from 'react-router-dom';
import { Form, Field, ErrorMessage, Formik} from 'formik';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../common/actions/common.action';

const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = { firstName: '', lastName: '', email: '', mobile: '', district: '', address: ''};

    const onSubmit = (values) => {
        dispatch(updateUserDetails(values));
        navigate("/UpdatedSuccessfully");
    }
    return (
        <div className="profile-container">
                <NavBar />
                <h2 style={{ color: "gray", fontWeight: "bold" }}>Edit Profile Details</h2>

                <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values)}>
                {({handleChange}) => (
                      <Form>

                      <div className="edit-form">
                        <div className="edit-field">
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
                        <div className="edit-field">
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
                        
                        <div className="edit-field">
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
      
                        <div className="edit-field">
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
      
                        <div className="edit-field">
                          Phone Number:
                          <Field
                            type="text"
                            name="mobile"
                            onChange={handleChange("mobile")}
                            // validate={mobileValidator}
                          />
                        </div>
                        <ErrorMessage name="mobile">
                          {(msg) => <p className="text-danger text-left">{msg}</p>}
                        </ErrorMessage>
                        
      
                        <div className="edit-field">
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
    
                        <div className="field submit">
                          <button className="primary-btn" type="submit">
                            Save
                          </button>
                        </div>
                      </div>
                    </Form>
                    
                )}
                </Formik>
              
        </div>
    );
}

export default Settings;