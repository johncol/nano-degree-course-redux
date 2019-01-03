const rootReducer = Redux.combineReducers({
  todos: todoReducer,
  goals: goalReducer
});

const middlewares = Redux.applyMiddleware(checkForBitcoin);

const store = Redux.createStore(rootReducer, middlewares);

const TodosUI = createTodosUI({
  onAddTodo: todoName => {
    store.dispatch(
      TodoActionCreator.addTodo({
        id: generateId(),
        name: todoName,
        done: false
      })
    );
    TodosUI.clearInput();
    TodosUI.focusInput();
  },

  onRemoveTodo: todo => store.dispatch(TodoActionCreator.removeTodo(todo.id)),

  onToggleTodo: todo => store.dispatch(TodoActionCreator.toggleTodo(todo.id))
});

store.subscribe(() => {
  const todos = store.getState().todos;
  TodosUI.updateUI(todos);
});
