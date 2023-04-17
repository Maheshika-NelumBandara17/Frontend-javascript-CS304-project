import { put, call, takeLeading } from "redux-saga/effects";
import CommonAPI from "../api/common.api";
import {
  SIGN_UP,
  ADD_VIDEO,
  SET_FINES,
  GET_VIDEOS,
  SET_VIDEO_LIST,
  SET_PAYMENT,
  UPDATE_USER_DETAILS,
} from "../constants/actionTypes";

function* addUser({ payload }) {
  try {
    yield put({ type: "REGISTER_USER", payload: payload });
    yield call(CommonAPI.addUser, payload);
  } catch (error) {}
}

function* addVideo({ payload }) {
  try {
    yield call(CommonAPI.postVideos, payload);
  } catch (error) {
    console.log("API ERROR", error);
  }
}

function* submitFines({ payload }) {
  try {
    yield call(CommonAPI.postFines, payload);
  } catch (error) {}
}

function* submitPayment({ payload }) {
  try {
    yield call(CommonAPI.postPayments, payload);
  } catch (error) {}
}

function* getVideos() {
  try {
    const listOfVideos = yield call(CommonAPI.getVideos);
    yield put({ type: SET_VIDEO_LIST, payload: listOfVideos });
  } catch (error) {}
}

function* updateUserDetails({ payload }) {
  try {
    yield call(CommonAPI.putUserDetails, payload);
  } catch (error) {}
}

export default function* commonSaga() {
  yield takeLeading(SIGN_UP, addUser);
  yield takeLeading(ADD_VIDEO, addVideo);
  yield takeLeading(SET_FINES, submitFines);
  yield takeLeading(GET_VIDEOS, getVideos);
  yield takeLeading(SET_PAYMENT, submitPayment);
  yield takeLeading(UPDATE_USER_DETAILS, updateUserDetails);
}
