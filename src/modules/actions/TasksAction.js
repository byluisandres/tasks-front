// types
import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  START_DOWNLOAD_TASKS,
  DOWNLOAD_TASKS_SUCCESS,
  DOWNLOAD_TASKS_ERROR,
  START_CHANGE_DONE,
  START_CHANGE_DONE_SUCCESS,
  START_CHANGE_DONE_ERROR,
  START_CHANGE_TODO,
  START_CHANGE_TODO_SUCCESS,
  START_CHANGE_TODO_ERROR,
} from "../types/tasksTypes";

// Services
import { getTasks, createTasks } from "../../services/tasks";

// Crear un tarea
export function createNewTaskAction(task) {
  return async (dispatch) => {
    dispatch(addTask());
    try {
      const res = await createTasks(task);
      const response = await res.json();
      dispatch(addTaskSuccess(response));
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

const addTaskSuccess = (response) => ({
  type: ADD_TASK_SUCCESS,
  payload: response,
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
      const res = await getTasks();
      const response = await res.json();
      dispatch(downloadTasksSuccess(response));
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

const downloadTasksSuccess = (data) => ({
  type: DOWNLOAD_TASKS_SUCCESS,
  payload: data,
});

const downloadTasksError = () => ({
  type: DOWNLOAD_TASKS_ERROR,
  payload: true,
});

// Cambiar a hecho
export function startChangeDoneAction(task) {
  return async (dispatch) => {
    console.log(task);
    dispatch(startChangeDone());
    try {
      dispatch(startChangeDoneSuccess(task));
    } catch (error) {
      dispatch(startChangeDoneError());
    }
  };
}
const startChangeDone = () => ({
  type: START_CHANGE_DONE,
  payload: true,
});

const startChangeDoneSuccess = (task) => ({
  type: START_CHANGE_DONE_SUCCESS,
  payload: task,
});

const startChangeDoneError = () => ({
  type: START_CHANGE_DONE_ERROR,
  payload: true,
});

// Cambiar a to-do
export function startChangeTodoAction(task) {
  return async (dispatch) => {
    dispatch(startChangeTodo());
    try {
      dispatch(startChangeTodoSuccess(task));
    } catch (error) {
      dispatch(startChangeTodoError());
    }
  };
}
const startChangeTodo = () => ({
  type: START_CHANGE_TODO,
  payload: true,
});

const startChangeTodoSuccess = (task) => ({
  type: START_CHANGE_TODO_SUCCESS,
  payload: task,
});

const startChangeTodoError = () => ({
  type: START_CHANGE_TODO_ERROR,
  payload: true,
});
