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
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };

    case TodoAction.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todoId)
      };

    case TodoAction.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id !== action.todoId
            ? todo
            : { ...todo, completed: !todo.completed }
        )
      };

    default:
      return state;
  }
}

const store = createStore(todoReducer);
