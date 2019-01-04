const GeneralAction = {
  RECEIVE_INITIAL_DATA: 'RECEIVE_INITIAL_DATA'
};

const TodoAction = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

const GoalAction = {
  ADD_GOAL: 'ADD_GOAL',
  REMOVE_GOAL: 'REMOVE_GOAL',
  TOGGLE_GOAL: 'TOGGLE_GOAL'
};

const GeneralActionCreator = {
  receiveInitialData: (todos, goals) => ({
    type: GeneralAction.RECEIVE_INITIAL_DATA,
    todos,
    goals
  })
};

const GeneralApiActionCreator = {
  receiveInitialData: () => dispatch => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(GeneralActionCreator.receiveInitialData(todos, goals));
      }
    );
  }
};

const TodoActionCreator = {
  addTodo: todo => ({ type: TodoAction.ADD_TODO, todo }),
  removeTodo: todoId => ({ type: TodoAction.REMOVE_TODO, todoId }),
  toggleTodo: todoId => ({ type: TodoAction.TOGGLE_TODO, todoId })
};

const TodoApiActionCreator = {
  addTodo: todoName => dispatch => {
    return API.saveTodo(todoName)
      .then(todo => {
        dispatch(TodoActionCreator.addTodo(todo));
      })
      .catch(alertError);
  },

  removeTodo: todo => dispatch => {
    dispatch(TodoActionCreator.removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      alertError();
      dispatch(TodoActionCreator.addTodo(todo));
    });
  },

  toggleTodo: todoId => dispatch => {
    dispatch(TodoActionCreator.toggleTodo(todoId));
    return API.saveTodoToggle(todoId).catch(() => {
      alertError();
      dispatch(TodoActionCreator.toggleTodo(todoId));
    });
  }
};

const GoalActionCreator = {
  addGoal: goal => ({ type: GoalAction.ADD_GOAL, goal }),
  removeGoal: goalId => ({ type: GoalAction.REMOVE_GOAL, goalId }),
  toggleGoal: goalId => ({ type: GoalAction.TOGGLE_GOAL, goalId })
};

const GoalApiActionCreator = {
  addGoal: goalName => dispatch => {
    return API.saveGoal(goalName)
      .then(goal => {
        dispatch(GoalActionCreator.addGoal(goal));
      })
      .catch(alertError);
  },

  removeGoal: goal => dispatch => {
    dispatch(GoalActionCreator.removeGoal(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      alertError();
      dispatch(GoalActionCreator.addGoal(goal));
    });
  },

  toggleGoal: goalId => dispatch => {
    dispatch(GoalActionCreator.toggleGoal(goalId));
    return API.saveGoalToggle(goalId).catch(() => {
      alertError();
      dispatch(GoalActionCreator.toggleGoal(goalId));
    });
  }
};

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case GeneralAction.RECEIVE_INITIAL_DATA:
      return false;
    default:
      return state;
  }
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

    case GeneralAction.RECEIVE_INITIAL_DATA:
      return action.todos;

    default:
      return state;
  }
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

    case GeneralAction.RECEIVE_INITIAL_DATA:
      return action.goals;

    default:
      return state;
  }
};

const checkForBitcoin = store => next => action => {
  if (
    action.type === TodoAction.ADD_TODO &&
    action.todo.name.indexOf('bitcoin') !== -1
  ) {
    return alert("Can't add bitcoin related TODOs");
  }
  return next(action);
};

const logger = store => next => action => {
  console.group(action.type);
  console.log('Action: ', action);
  const result = next(action);
  console.log('New state: ', store.getState());
  console.groupEnd();
  return result;
};

// NOT REQUIRED ANYMORE, as this can be done with ReduxThunk
const asyncActions = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};

// NOT REQUIRED ANYMORE, as this can be done with Redux.combineReducers
const appReducer = (state = {}, action) => {
  return {
    todos: todoReducer(state.todos, action),
    goals: goalReducer(state.goals, action),
    loading: loadingReducer(state.loading, action)
  };
};

const createStore = () => {
  const rootReducer = Redux.combineReducers({
    todos: todoReducer,
    goals: goalReducer,
    loading: loadingReducer
  });

  const middlewares = Redux.applyMiddleware(
    ReduxThunk.default,
    checkForBitcoin,
    logger
  );

  return Redux.createStore(rootReducer, middlewares);
};
