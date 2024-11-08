import { GET_USER, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "./actionTypes";

export const userLogin = (data) => ({
  type: USER_LOGIN,
  user: data.user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
  user: null,
});

export const userRegister = (user) => ({
  type: USER_REGISTER,
  user: user,
});


export const getUser = (data) => ({
  type: GET_USER,
  user: data
})