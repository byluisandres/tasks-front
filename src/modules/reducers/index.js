import { combineReducers } from "redux";
import TasksReducer from "./TasksReducers";

export default combineReducers({
  tasks: TasksReducer,
});
