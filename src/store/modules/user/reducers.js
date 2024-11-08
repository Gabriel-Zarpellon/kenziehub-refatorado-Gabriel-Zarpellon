import {
  GET_USER,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "./actionTypes";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;

    case USER_LOGOUT:
      return action.user;

    case USER_REGISTER:
      return action.user;

    case GET_USER:
      return action.user;

    default:
      return state;
  }
};
