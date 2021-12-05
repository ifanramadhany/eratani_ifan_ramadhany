import { combineReducers } from "redux";
import userReducer from "./userReducer"
import erataniReducer from "./erataniReducer"

const reducers = combineReducers({
  userState: userReducer,
  erataniState: erataniReducer
})

export default reducers;