import { Todo } from 'store/todo/models/todo.model';
import { TodoActionTypes } from 'store/todo/actions/todo.actions.types';
import { TODO_CONSTANTS } from 'store/todo/constants';

export const setSort = (payload: string): any => ({
  type: TODO_CONSTANTS.SORT,
  payload
});

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: TODO_CONSTANTS.ADD_TODO,
  payload: todo
});

export const removeTodo = (todo: Todo): TodoActionTypes => ({
  type: TODO_CONSTANTS.REMOVE_TODO,
  payload: todo
});

export const toggleTodoComplete = (todo: Todo): TodoActionTypes => ({
  type: TODO_CONSTANTS.TOGGLE_TODO_COMPLETED,
  payload: todo
});

export const toggleTodoPriority = (todo: Todo): TodoActionTypes => ({
  type: TODO_CONSTANTS.TOGGLE_TODO_PRIORITY,
  payload: todo
});
