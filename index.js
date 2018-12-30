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

const TodoAction = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return state.concat(action.todo);

    case TodoAction.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.todoId);

    case TodoAction.TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.todoId ? todo : { ...todo, done: !todo.done }
      );

    default:
      return state;
  }
};

const GoalAction = {
  ADD_GOAL: 'ADD_GOAL',
  REMOVE_GOAL: 'REMOVE_GOAL',
  TOGGLE_GOAL: 'TOGGLE_GOAL'
};

const goalReducer = (state = [], action) => {
  switch (action.type) {
    case GoalAction.ADD_GOAL:
      return state.concat(action.goal);

    case GoalAction.REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.goalId);

    case GoalAction.TOGGLE_GOAL:
      return state.map(goal =>
        goal.id !== action.goalId ? goal : { ...goal, achieved: !goal.achieved }
      );

    default:
      return state;
  }
};

const appReducer = (state = {}, action) => {
  return {
    todos: todoReducer(state.todos, action),
    goals: goalReducer(state.goals, action)
  };
};

const store = createStore(appReducer);
store.subscribe(() => console.log('state: ', store.getState()));

store.dispatch({
  type: TodoAction.ADD_TODO,
  todo: {
    id: 1,
    name: 'Check tattoos',
    done: false
  }
});

store.dispatch({
  type: TodoAction.ADD_TODO,
  todo: {
    id: 2,
    name: 'Complete first nano-degree project',
    done: true
  }
});

store.dispatch({
  type: TodoAction.ADD_TODO,
  todo: {
    id: 3,
    name: 'Complete first lesson in chaptor 4 of nano-degree',
    done: false
  }
});

store.dispatch({
  type: TodoAction.TOGGLE_TODO,
  todoId: 3
});

store.dispatch({
  type: TodoAction.REMOVE_TODO,
  todoId: 2
});

store.dispatch({
  type: GoalAction.ADD_GOAL,
  goal: {
    id: 1,
    name: 'Finish nano-degree',
    achieved: false
  }
});

store.dispatch({
  type: GoalAction.ADD_GOAL,
  goal: {
    id: 2,
    name: 'Learn to drive',
    achieved: false
  }
});

store.dispatch({
  type: GoalAction.ADD_GOAL,
  goal: {
    id: 3,
    name: 'Run half-marathon',
    achieved: true
  }
});

store.dispatch({
  type: GoalAction.TOGGLE_GOAL,
  goalId: 2
});

store.dispatch({
  type: GoalAction.REMOVE_GOAL,
  goalId: 2
});
