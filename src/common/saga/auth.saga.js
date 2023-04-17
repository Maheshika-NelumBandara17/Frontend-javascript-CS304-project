import { put, call, takeLeading } from "redux-saga/effects";
import AuthAPI from "../api/auth.api";
import CommonAPI from "../api/common.api";
import { USER_LOGIN } from "../constants/actionTypes";
import { getToken } from "../actions/auth.action";

function* userLogin({ payload }) {
  try {
    // const token = "1212121";
    // const token = yield call(AuthAPI.userLogin, payload);
    // yield put(getToken(token));
    yield call(CommonAPI.getVideos);
  } catch (e) {}
}

export default function* authSaga() {
  yield takeLeading(USER_LOGIN, userLogin);
}
