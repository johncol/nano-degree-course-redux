const store = Redux.createStore(
  Redux.combineReducers({
    todos: todoReducer,
    goals: goalReducer
  })
);

const TodosUI = createTodosUI({
  onAddTodo: todoName => {
    checkAndDispatch(
      TodoActionCreator.addTodo({
        id: generateId(),
        name: todoName,
        done: false
      })
    );
    TodosUI.clearInput();
    TodosUI.focusInput();
  },

  onRemoveTodo: todo => checkAndDispatch(TodoActionCreator.removeTodo(todo.id)),

  onToggleTodo: todo => checkAndDispatch(TodoActionCreator.toggleTodo(todo.id))
});

store.subscribe(() => {
  const todos = store.getState().todos;
  TodosUI.updateUI(todos);
});
