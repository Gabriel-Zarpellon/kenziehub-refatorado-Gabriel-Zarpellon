import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { userLogin, userLogout } from "./actions";
import { toast } from "react-toastify";

const navigate = useNavigate();

export const userLoginThunk = (formData) => async (dispatch) => {
  try {
    let { data } = await api.post("/sessions", formData);
    dispatch(userLogin(data));
    localStorage.setItem("@USERID", data.user.id);
    localStorage.setItem("@TOKEN", data.token);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    toast.error("E-mail ou senha incorretos!");
  }
};

export const userLogoutThunk = () => (dispatch) => {
  localStorage.removeItem("@TOKEN");
  localStorage.removeItem("@USERID");
  dispatch(userLogout);
  navigate("/");
};

export const userRegisterThunk = async (formData) => {
  try {
    await api.post("/users", formData);
    toast.success("Cadastro efetuado com sucesso!");
    navigate("/");
  } catch (error) {
    console.log(error);
    if (error.response.status == 400) {
      toast.error("A senha deve conter no mínimo 6 caracteres!");
    } else {
      toast.error("E-mail já cadastrado!");
    }
  }
};
