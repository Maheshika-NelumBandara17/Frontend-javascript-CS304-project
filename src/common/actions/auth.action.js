import { USER_LOGIN, GET_TOKEN } from "../constants/actionTypes";

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload: payload,
});

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload: payload,
});
