import { alertError } from './../utils/utils';

export const TodoAction = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

export const TodoActionCreator = {
  addTodo: todo => ({ type: TodoAction.ADD_TODO, todo }),
  removeTodo: todoId => ({ type: TodoAction.REMOVE_TODO, todoId }),
  toggleTodo: todoId => ({ type: TodoAction.TOGGLE_TODO, todoId })
};

export const TodoApiActionCreator = {
  addTodo: todoName => dispatch => {
    return window.API.saveTodo(todoName)
      .then(todo => {
        dispatch(TodoActionCreator.addTodo(todo));
      })
      .catch(alertError);
  },

  removeTodo: todo => dispatch => {
    dispatch(TodoActionCreator.removeTodo(todo.id));
    return window.API.deleteTodo(todo.id).catch(() => {
      alertError();
      dispatch(TodoActionCreator.addTodo(todo));
    });
  },

  toggleTodo: todoId => dispatch => {
    dispatch(TodoActionCreator.toggleTodo(todoId));
    return window.API.saveTodoToggle(todoId).catch(() => {
      alertError();
      dispatch(TodoActionCreator.toggleTodo(todoId));
    });
  }
};
