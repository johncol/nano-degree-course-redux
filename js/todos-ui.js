const keyPressedIsEnter = event => event.keyCode === 13;

const createTodosUI = ({ onAddTodo, onRemoveTodo, onToggleTodo }) => {
  const inputTodo = document.getElementById('input-todo');
  const buttonAddTodo = document.getElementById('button-add-todo');
  const listTodos = document.getElementById('list-todos');

  const todoSubmitEventHandler = () => {
    const validInputValue = inputTodo.value && inputTodo.value.trim() !== '';
    if (validInputValue) {
      onAddTodo(inputTodo.value.trim());
    }
  };

  buttonAddTodo.addEventListener('click', todoSubmitEventHandler);
  inputTodo.addEventListener('keypress', event => {
    if (keyPressedIsEnter(event)) {
      todoSubmitEventHandler();
    }
  });

  const removeButtonFor = todo => {
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.classList = 'button-remove';
    button.addEventListener('click', () => onRemoveTodo(todo));
    return button;
  };

  const addTodoToDOM = todo => {
    const removeButton = removeButtonFor(todo);

    const todoName = document.createElement('span');
    todoName.classList = todo.done ? 'item-name item-done' : 'item-name';
    todoName.appendChild(document.createTextNode(todo.name));
    todoName.addEventListener('click', () => onToggleTodo(todo));

    const listItem = document.createElement('li');
    listItem.appendChild(removeButton);
    listItem.appendChild(todoName);

    listTodos.append(listItem);
  };

  const updateUI = todos => {
    listTodos.innerHTML = '';
    todos.forEach(addTodoToDOM);
  };

  const clearInput = () => (inputTodo.value = '');

  const focusInput = () => inputTodo.focus();

  return {
    updateUI,
    clearInput,
    focusInput
  };
};
