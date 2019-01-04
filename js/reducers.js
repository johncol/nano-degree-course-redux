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

const TodoActionCreator = {
  addTodo: todo => ({ type: TodoAction.ADD_TODO, todo }),
  removeTodo: todoId => ({ type: TodoAction.REMOVE_TODO, todoId }),
  toggleTodo: todoId => ({ type: TodoAction.TOGGLE_TODO, todoId })
};

const GoalActionCreator = {
  addGoal: goal => ({ type: GoalAction.ADD_GOAL, goal }),
  removeGoal: goalId => ({ type: GoalAction.REMOVE_GOAL, goalId }),
  toggleGoal: goalId => ({ type: GoalAction.TOGGLE_GOAL, goalId })
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

// NOT REQUIRED ANYMORE, as this can be done with Redux.combineReducers
// const appReducer = (state = {}, action) => {
//   return {
//     todos: todoReducer(state.todos, action),
//     goals: goalReducer(state.goals, action)
//   };
// };
