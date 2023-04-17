import { Formik, Form, Field, ErrorMessage } from 'formik';
import NavBar from './ProfileNavBar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPayment } from '../common/actions/common.action';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {date: '', firstName: '', lastName: '', payment: '', NIC: ''};

    const onSubmit = (values) => {
      const paymentDetails = {
        date: values.date,
        firstName: values.firstName,
        lastName: values.lastName,
        nic_num: values.NIC,
        amount: values.payment
      }
      dispatch(addPayment(paymentDetails));
      navigate("/SubmittedSuccessFully");

    }
    return(
        <>
      <NavBar />
      <div className="sign-up">
        <h2 style={{ color: "gray", fontWeight: "bold" }}>Add Payment Details</h2>

        <section>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ handleChange }) => (
              <Form>
                <div className="form-body">
                <div className="form-field">
                    <div className="label">Date:</div>
                    <Field
                      type="date"
                      name="date"
                      onChange={handleChange("date")}
                    />
                  </div>
                  <ErrorMessage name="date">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>
                  <div className="form-field">
                    <div className="label">Payee's First Name:</div>
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
                  Payee's Last Name:
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
                  Payee's NIC Number:
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
                    <div className="label">Total Payment Amount:</div>
                    <Field
                      type="text"
                      name="payment"
                      onChange={handleChange("payment")}
                    />
                  </div>
                  <ErrorMessage name="payment">
                    {(msg) => <p className="text-danger text-left">{msg}</p>}
                  </ErrorMessage>
                  <div className="field submit">
                    <button className="primary-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
    );
}

export default PaymentForm;