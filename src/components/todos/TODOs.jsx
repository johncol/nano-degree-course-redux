import React from 'react';
import { connect } from 'react-redux';

import AddItemForm from './../shared/add-item-form/AddItemForm';
import Item from './../shared/item/Item';
import List from './../shared/list/List';
import { TodoApiActionCreator } from './../../actions/todo';

const TODOs = props => {
  const { todos } = props;
  const { addTodo, removeTodo, toggleTodo } = props;
  return (
    <section>
      <h2>TODO List</h2>

      <AddItemForm
        onSubmit={addTodo}
        placeholder="Write your new TODO"
        buttonLabel="Add TODO"
      />

      <List>
        {todos.map(todo => (
          <Item
            key={todo.id}
            item={todo}
            onRemoveItem={removeTodo}
            onToggleItem={toggleTodo}
          />
        ))}
      </List>
    </section>
  );
};

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    addTodo: todoName => dispatch(TodoApiActionCreator.addTodo(todoName)),
    removeTodo: todo => dispatch(TodoApiActionCreator.removeTodo(todo)),
    toggleTodo: todo => dispatch(TodoApiActionCreator.toggleTodo(todo.id))
  })
)(TODOs);
