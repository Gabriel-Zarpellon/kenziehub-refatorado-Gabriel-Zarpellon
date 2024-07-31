import { ADD_TECH, DELETE_TECH, GET_TECHS, UPDATE_TECH } from "./actionTypes";

export const techReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TECHS:
      return action.techs;

    case ADD_TECH:
      return [...state, tech];

    case DELETE_TECH:
      return state.filter((tech) => tech.id != action.id);

    case UPDATE_TECH:
      return state.map((tech) => {
        if (tech.id == action.tech.id) {
          return action.tech;
        } else {
          return tech;
        }
      });

    default:
      return state;
  }
};
