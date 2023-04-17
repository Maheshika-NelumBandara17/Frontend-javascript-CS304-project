import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth.reducer";
import commonReducer from "./common.reducer";

const AuthPersistConfig = {
  storage,
  key: "auth",
  blacklist: ["token"],
};

const CommonPersistConfig = {
  storage,
  key: "common",
};

export default combineReducers({
  auth: persistReducer(AuthPersistConfig, authReducer),
  common: persistReducer(CommonPersistConfig, commonReducer),
});
