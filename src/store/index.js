import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { userReducer } from "./modules/user/reducers";
import { thunk } from "redux-thunk";
import { techReducer } from "./modules/tech/reducers";

const reducers = combineReducers({ user: userReducer, techs: techReducer });
export const store = createStore(reducers, applyMiddleware(thunk));
