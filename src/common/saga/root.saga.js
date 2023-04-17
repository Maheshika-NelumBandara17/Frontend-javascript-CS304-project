import { all } from "redux-saga/effects";
// import AuthSaga from "./auth.saga";
import CommonSaga from "./common.saga";
import AuthSaga from "./auth.saga";

export default function* rootSaga() {
  yield all([CommonSaga(), AuthSaga()]);
}
