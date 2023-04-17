import {
  REGISTER_USER,
  SET_VIDEO_LIST,
  SET_FINES,
} from "../constants/actionTypes";

const usersList = [
  {
    userID: "967791202v",
    firstName: "Hasini",
    lastName: "Thilakarathna",
    userType: "police",
  },
  {
    userID: "967791201v",
    firstName: "Maheshika",
    lastName: "Bandara",
    userType: "citizen",
  },
];

const INITIAL_STATE = {
  currentUser: null,
  usersList: null,
  // listOfFinesPaid: [],
  // video: {},
};

export default function commonReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case SET_VIDEO_LIST:
      return {
        ...state,
        listOfVideos: payload,
      };
    // case SET_FINES:
    //   return {
    //     ...state,
    //     listOfFinesPaid: payload,
    //   };
    default:
      return state;
  }
}
