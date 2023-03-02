import { combineReducers } from "redux";
import { constructorReducer } from "./constructor-reducer";

export const rootReducer = combineReducers({
  constructorReducer,
});
