import { TODO_CONSTANTS } from 'store/todo/constants';
import { Todo } from 'store/todo/models/todo.model';
import { TodoActionTypes } from 'store/todo/actions/todo.actions.types';
import { v4 } from 'uuid';

interface TodoReducerInterface {
  sort: string
  todos: Todo[];
}

const initialState: TodoReducerInterface = {
  sort: 'name',
  todos: []
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case TODO_CONSTANTS.SORT:
      return {
        ...state,
        sort: action.payload,
      }
    case TODO_CONSTANTS.ADD_TODO:
      return Object.assign({}, state, {
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: v4()
          }
        })
      });

    case TODO_CONSTANTS.TOGGLE_TODO_COMPLETED:
      return Object.assign({}, state, {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      });

    case TODO_CONSTANTS.TOGGLE_TODO_PRIORITY:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, priority: !todo.priority }
            : todo
        )
      };

    case TODO_CONSTANTS.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};
