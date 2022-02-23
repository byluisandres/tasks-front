// Types
import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  START_DOWNLOAD_TASKS,
  DOWNLOAD_TASKS_SUCCESS,
  DOWNLOAD_TASKS_ERROR,
  START_DOWNLOAD_TASKS_DONE,
  DOWNLOAD_TASKS_SUCCESS_DONE,
  DOWNLOAD_TASKS_ERROR_DONE,
  START_CHANGE_DONE,
  START_CHANGE_DONE_SUCCESS,
  START_CHANGE_DONE_ERROR,
  START_CHANGE_TODO,
  START_CHANGE_TODO_SUCCESS,
  START_CHANGE_TODO_ERROR,
} from "../types/tasksTypes";
// Initial state
const initialState = {
  tasks: [],
  tasksdone: [],
  error: null,
  loading: false,
  message: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
    case START_CHANGE_DONE:
    case START_CHANGE_TODO:
    case START_DOWNLOAD_TASKS:
    case START_DOWNLOAD_TASKS_DONE:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload.data],
        message: action.payload.message,
      };
    case DOWNLOAD_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tasks: action.payload,
      };
    case DOWNLOAD_TASKS_SUCCESS_DONE:
      return {
        ...state,
        loading: false,
        error: null,
        tasksdone: action.payload,
      };

    case START_CHANGE_DONE_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
        tasksdone: [...state.tasksdone, action.payload],
      };
    }
    case START_CHANGE_TODO_SUCCESS: {
      return {
        ...state,
        tasksdone: state.tasksdone.filter(
          (task) => task._id !== action.payload._id
        ),
        tasks: [...state.tasks, action.payload],
      };
    }
    case ADD_TASK_ERROR:
    case START_CHANGE_DONE_ERROR:
    case START_CHANGE_TODO_ERROR:
    case DOWNLOAD_TASKS_ERROR:
    case DOWNLOAD_TASKS_ERROR_DONE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
