import { TodoAction } from './../actions/todo';
import { SharedAction } from './../actions/shared';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return state.concat(action.todo);

    case TodoAction.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.todoId);

    case TodoAction.TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.todoId ? todo : { ...todo, done: !todo.done }
      );

    case SharedAction.RECEIVE_INITIAL_DATA:
      return action.todos;

    default:
      return state;
  }
};
