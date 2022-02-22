// types
import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  START_DOWNLOAD_TASKS,
  DOWNLOAD_TASKS_SUCCESS,
  DOWNLOAD_TASKS_ERROR,
} from "../types/tasksTypes";

export function createNewTaskAction(task) {
  return async (dispatch) => {
    dispatch(addTask());
    try {
      dispatch(addTaskSuccess(task));
    } catch (error) {
      console.log(error);
      dispatch(addTaskError());
    }
  };
}
const addTask = () => ({
  type: ADD_TASK,
  payload: true,
});

const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});
const addTaskError = () => ({
  type: ADD_TASK_ERROR,
  payload: true,
});

// Obtener las tareas
export function getTasksAction() {
  return async (dispatch) => {
    dispatch(downloadTasks());
    try {
      dispatch(downloadTasksSuccess());
    } catch (error) {
      console.log(error);
      dispatch(downloadTasksError());
    }
  };
}
const downloadTasks = () => ({
  type: START_DOWNLOAD_TASKS,
  payload: true,
});

const downloadTasksSuccess = () => ({
  type: DOWNLOAD_TASKS_SUCCESS,
  payload: "",
});

const downloadTasksError = () => ({
  type: DOWNLOAD_TASKS_ERROR,
  payload: true,
});
