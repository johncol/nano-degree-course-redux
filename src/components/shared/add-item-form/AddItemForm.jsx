import React from 'react';

class AddItemForm extends React.Component {
  addTodo = event => {
    event.preventDefault();
    const item = this.todoNameInput.value.trim();
    if (item !== '') {
      this.props.onSubmit(item);
      this.todoNameInput.value = '';
    }
  };

  render() {
    const { placeholder, buttonLabel } = this.props;
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          placeholder={placeholder}
          ref={todoNameInput => (this.todoNameInput = todoNameInput)}
        />
        <button type="submit">{buttonLabel}</button>
      </form>
    );
  }
}

export default AddItemForm;
