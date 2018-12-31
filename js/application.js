const store = createStore(appReducer);

store.subscribe(() => console.log('state: ', store.getState()));

const inputTodo = document.getElementById('input-todo');
const buttonAddTodo = document.getElementById('button-add-todo');
const listTodos = document.getElementById('list-todos');

const generateId = () => Date.now() + String(Math.round(Math.random() * 10000));

const saveNewTodo = () => {
  const validInputValue = inputTodo.value && inputTodo.value.trim() !== '';
  if (validInputValue) {
    store.dispatch(
      TodoActionCreator.addTodo({
        id: generateId(),
        name: inputTodo.value.trim(),
        done: false
      })
    );
    inputTodo.value = '';
    inputTodo.focus();
  }
};

const removeButtonFor = todo => {
  const button = document.createElement('button');
  button.innerHTML = 'X';
  button.classList = 'button-remove';
  button.addEventListener('click', event => {
    event.preventDefault();
    store.dispatch(TodoActionCreator.removeTodo(todo.id));
  });
  return button;
};

const addTodoToDOM = todo => {
  const listItem = document.createElement('li');

  const removeButton = removeButtonFor(todo);

  const todoName = document.createElement('span');
  todoName.classList = todo.done ? 'item-name item-done' : 'item-name';
  todoName.appendChild(document.createTextNode(todo.name));

  listItem.appendChild(removeButton);
  listItem.appendChild(todoName);

  todoName.addEventListener('click', () =>
    store.dispatch(TodoActionCreator.toggleTodo(todo.id))
  );
  listTodos.append(listItem);
};

const addTodostoDOM = () => {
  listTodos.innerHTML = '';
  store.getState().todos.forEach(addTodoToDOM);
};

const keyPressedIsEnter = event => event.keyCode === 13;

buttonAddTodo.addEventListener('click', saveNewTodo);
inputTodo.addEventListener('keypress', event => {
  if (keyPressedIsEnter(event)) saveNewTodo(event);
});

store.subscribe(addTodostoDOM);
