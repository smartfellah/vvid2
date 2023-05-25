import { combineReducers } from "redux";
import constructorReducer from "./constructor-reducer";
import authReducer from "./auth-reducer";

export const rootReducer = combineReducers({
  constructor: constructorReducer,
  auth: authReducer,
});
