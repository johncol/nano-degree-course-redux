import React from 'react';
import { connect } from 'react-redux';

import AddItemForm from './../shared/add-item-form/AddItemForm';
import Item from './../shared/item/Item';
import List from './../shared/list/List';
import { GoalApiActionCreator } from './../../actions/goal';

const Goals = props => {
  const { goals } = props;
  const { addGoal, removeGoal, toggleGoal } = props;
  return (
    <section>
      <h2>Goal List</h2>

      <AddItemForm
        onSubmit={addGoal}
        placeholder="Write a new goal"
        buttonLabel="Add goal"
      />

      <List>
        {goals.map(goal => (
          <Item
            key={goal.id}
            item={goal}
            itemDoneProp="achieved"
            onRemoveItem={removeGoal}
            onToggleItem={toggleGoal}
          />
        ))}
      </List>
    </section>
  );
};

export default connect(
  state => ({
    goals: state.goals
  }),
  dispatch => ({
    addGoal: goalName => dispatch(GoalApiActionCreator.addGoal(goalName)),
    removeGoal: goal => dispatch(GoalApiActionCreator.removeGoal(goal)),
    toggleGoal: goal => dispatch(GoalApiActionCreator.toggleGoal(goal.id))
  })
)(Goals);
