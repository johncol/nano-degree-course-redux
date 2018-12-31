const createStore = reducer => {
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
};
