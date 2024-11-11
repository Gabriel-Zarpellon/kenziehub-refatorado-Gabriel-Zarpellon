import { api } from "../../../services/api";
import { getTechsThunk } from "../tech/thunks";
import { getUser, userLogin, userLogout, userRegister } from "./actions";
import { toast } from "react-toastify";

export const userLoginThunk = (formData, navigate) => async (dispatch) => {
  try {
    let { data } = await api.post("/sessions", formData);
    dispatch(userLogin(data));
    localStorage.setItem("@TOKEN", data.token);
    localStorage.setItem("@USERID", data.user.id);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    alert("E-mail ou senha incorretos!");
    //toast.error("E-mail ou senha incorretos!");
  }
};

export const userLogoutThunk = (navigate) => (dispatch) => {
  localStorage.removeItem("@TOKEN");
  localStorage.removeItem("@USERID");
  dispatch(userLogout);
  navigate("/");
};

export const userRegisterThunk = (formData, navigate) => async (dispatch) => {
  try {
    await api.post("/users", formData);
    dispatch(userRegister(formData));
    alert("Cadastro efetuado com sucesso!");
    //toast.success("Cadastro efetuado com sucesso!");
    navigate("/");
  } catch (error) {
    console.log(error);
    if (error.response.status == 400) {
      alert("A senha deve conter no mínimo 6 caracteres!");
      //toast.error("A senha deve conter no mínimo 6 caracteres!");
    } else {
      alert("E-mail já cadastrado!");
      //toast.error("E-mail já cadastrado!");
    }
  }
};

export const getUserThunk = (navigate) => async (dispatch) => {
  const userId = localStorage.getItem("@USERID");
  const token = localStorage.getItem("@TOKEN");
  if (userId && token) {
    try {
      let { data } = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(getUser(data));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
    }
  }
};
