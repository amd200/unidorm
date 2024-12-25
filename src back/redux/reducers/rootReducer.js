import { combineReducers } from "redux";
import authReducer from "./authReducer";
import propertiesReducer from "./propertiesReducer";

export default combineReducers({
  authReducer: authReducer,
  properties: propertiesReducer,
});
