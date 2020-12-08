import { TODO_CONSTANTS } from 'store/todo/constants';
import { Todo } from 'store/todo/models/todo.model';

interface SortAction {
  type: typeof TODO_CONSTANTS.SORT;
  payload: any;
}

interface AddTodoAction {
  type: typeof TODO_CONSTANTS.ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TODO_CONSTANTS.TOGGLE_TODO_COMPLETED;
  payload: Todo;
}

interface ToggleTodoPriorityAction {
  type: typeof TODO_CONSTANTS.TOGGLE_TODO_PRIORITY;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof TODO_CONSTANTS.REMOVE_TODO;
  payload: Todo;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoPriorityAction
  | RemoveTodoAction
  | ToggleTodoAction
  | SortAction ;
