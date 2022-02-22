// Types
import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
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
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
    case START_CHANGE_DONE:
    case START_CHANGE_TODO:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    case START_CHANGE_DONE_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload.id
        ),
        tasksdone: [...state.tasksdone, action.payload],
      };
    }
    case START_CHANGE_TODO_SUCCESS: {
      return {
        ...state,
        tasksdone: state.tasks.filter(
          (task) => task.id !== action.payload.id
        ),
        tasks: [...state.tasks, action.payload],
      };
    }
    case ADD_TASK_ERROR:
    case START_CHANGE_DONE_ERROR:
    case START_CHANGE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
