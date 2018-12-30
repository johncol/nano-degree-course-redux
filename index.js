function createStore(reducer) {
  let state;
  const listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return {
      unsubscribe: () => {
        listeners = listeners.filter(
          listenerInArray => listenerInArray !== listener
        );
      }
    };
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

const TodoAction = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
};

function todoReducer(state = { todos: [] }, action) {
  if (action.type === TodoAction.ADD_TODO) {
    return {
      todos: state.todos.concat(action.todo)
    };
  } else if (action.type === TodoAction.REMOVE_TODO) {
    return {
      todos: state.todos.filter(todo => todo !== action.todo)
    };
  }

  return state;
}

const store = createStore(todoReducer);
