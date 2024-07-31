import { ADD_TECH, DELETE_TECH, GET_TECHS, UPDATE_TECH } from "./actionTypes";

export const getTechs = (techs) => ({
  type: GET_TECHS,
  techs: techs,
});

export const addTech = (tech) => ({
  type: ADD_TECH,
  tech: tech,
});

export const deleteTech = (deletingId) => ({
  type: DELETE_TECH,
  id: deletingId,
});

export const updateTech = (editingTech) => ({
  type: UPDATE_TECH,
  tech: editingTech,
});
