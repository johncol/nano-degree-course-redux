const TodoAction = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

const TodoActionCreator = {
  addTodo: todo => ({ type: TodoAction.ADD_TODO, todo }),
  removeTodo: todoId => ({ type: TodoAction.REMOVE_TODO, todoId }),
  toggleTodo: todoId => ({ type: TodoAction.TOGGLE_TODO, todoId })
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

const GoalActionCreator = {
  addGoal: goal => ({ type: GoalAction.ADD_GOAL, goal }),
  removeGoal: goalId => ({ type: GoalAction.REMOVE_GOAL, goalId }),
  toggleGoal: goalId => ({ type: GoalAction.TOGGLE_GOAL, goalId })
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
