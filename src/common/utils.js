import * as Yup from "yup";
import { phone } from 'phone';

const userIDRegex = /^[0-9]{9}[vVxX]$/;

export const userLoginSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8, "password must have at least 8 characters"),
  userID: Yup.string()
    .required("Required")
    .matches(userIDRegex, "Not a valid NIC"),
});

export const userSignUpSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "password must have at least 8 characters"),
  NIC: Yup.string().required("Required").matches(userIDRegex, "Not Valid NIC"),
  confirmPassword: Yup.string().required("Confirm password"),
  email: Yup.string().required('Required').email('Email is not valid'),

});


export const createPhoneValidator =
  (countryCode = '+94', errorMessage = 'Invalid mobile number') =>
  (value) => {
    if (value && !phone(`${countryCode}${value}`).isValid) {
      return errorMessage;
    }
    return null;
  };