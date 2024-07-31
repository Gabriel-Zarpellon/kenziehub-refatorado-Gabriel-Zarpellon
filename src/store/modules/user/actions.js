import { USER_LOGIN, USER_LOGOUT } from "./actionTypes";

export const userLogin = (user) => ({
  type: USER_LOGIN,
  user: user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
  user: null,
});
