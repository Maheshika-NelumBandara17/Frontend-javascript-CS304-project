import {
  SIGN_UP,
  ADD_VIDEO,
  SET_FINES,
  SET_PAYMENT,
  GET_VIDEOS,
  SET_VIDEO_LIST,
  UPDATE_USER_DETAILS,
} from "../constants/actionTypes";

export const addUser = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const addVideo = (payload) => ({
  type: ADD_VIDEO,
  payload,
});

export const addFines = (payload) => ({
  type: SET_FINES,
  payload,
});

export const addPayment = (payload) => ({
  type: SET_PAYMENT,
  payload,
});

export const getVideos = () => ({
  type: GET_VIDEOS,
});

export const setVideoList = () => ({
  type: SET_VIDEO_LIST,
});

export const updateUserDetails = (payload) => ({
  type: UPDATE_USER_DETAILS,
  payload,
});
