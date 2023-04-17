import { USER_LOGIN, GET_TOKEN } from "../constants/actionTypes";

const INITIAL_STATE = {
  isLogged: false,
  user: null,
  token: null,
};

export default function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case GET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
}
