store.dispatch(
  TodoActionCreator.addTodo({
    id: 1,
    name: 'Check tattoos',
    done: false
  })
);

store.dispatch(
  TodoActionCreator.addTodo({
    id: 2,
    name: 'Complete first nano-degree project',
    done: true
  })
);

store.dispatch(
  TodoActionCreator.addTodo({
    id: 3,
    name: 'Complete first lesson in chaptor 4 of nano-degree',
    done: false
  })
);

store.dispatch(TodoActionCreator.toggleTodo(3));

store.dispatch(TodoActionCreator.removeTodo(2));

store.dispatch(
  GoalActionCreator.addGoal({
    id: 1,
    name: 'Finish nano-degree',
    achieved: false
  })
);

store.dispatch(
  GoalActionCreator.addGoal({
    id: 2,
    name: 'Learn to drive',
    achieved: false
  })
);

store.dispatch(
  GoalActionCreator.addGoal({
    id: 3,
    name: 'Run half-marathon',
    achieved: true
  })
);

store.dispatch(GoalActionCreator.toggleGoal(2));

store.dispatch(GoalActionCreator.removeGoal(2));
