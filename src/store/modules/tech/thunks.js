import { toast } from "react-toastify";
import { addTech, deleteTech, getTechs, updateTech } from "./actions";
import { api } from "../../../services/api";

const token = localStorage.getItem("@TOKEN");

export const getTechsThunk = () => async (dispatch) => {
  if (token) {
    try {
      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getTechs(data.techs));
    } catch (error) {
      console.log(error);
    }
  } else {
    dispatch(getTechs([]));
  }
};

export const addTechThunk = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/users/techs", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addTech(data));
    //alert("Tecnologia adicionada!");
    toast.success("Tecnologia adicionada!");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTechThunk = (deleteId) => async (dispatch) => {
  try {
    await api.delete(`/users/techs/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(deleteTech(deleteId));
    alert("Tecnologia excluída!");
    //toast.success("Tecnologia excluída!");
  } catch (error) {
    console.log(error);
  }
};

export const updateTechThunk = (editTech, formData) => async (dispatch) => {
  try {
    const { data } = await api.put(`/users/techs/${editTech.id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(updateTech(editTech));
    alert("Tecnologia atualizada!");
    dispatch(getTechsThunk());

    //toast.success("Tecnologia atualizada!");
  } catch (error) {
    console.log(error);
  }
};
