import { TodoAction } from '../actions/todo';

export const checkForBitcoin = store => next => action => {
  if (
    action.type === TodoAction.ADD_TODO &&
    action.todo.name.indexOf('bitcoin') !== -1
  ) {
    return alert("Can't add bitcoin related TODOs");
  }
  return next(action);
};
