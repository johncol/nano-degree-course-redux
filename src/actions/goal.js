import { alertError } from './../utils/utils';

export const GoalAction = {
  ADD_GOAL: 'ADD_GOAL',
  REMOVE_GOAL: 'REMOVE_GOAL',
  TOGGLE_GOAL: 'TOGGLE_GOAL'
};

export const GoalActionCreator = {
  addGoal: goal => ({ type: GoalAction.ADD_GOAL, goal }),
  removeGoal: goalId => ({ type: GoalAction.REMOVE_GOAL, goalId }),
  toggleGoal: goalId => ({ type: GoalAction.TOGGLE_GOAL, goalId })
};

export const GoalApiActionCreator = {
  addGoal: goalName => dispatch => {
    return window.API.saveGoal(goalName)
      .then(goal => {
        dispatch(GoalActionCreator.addGoal(goal));
      })
      .catch(alertError);
  },

  removeGoal: goal => dispatch => {
    dispatch(GoalActionCreator.removeGoal(goal.id));
    return window.API.deleteGoal(goal.id).catch(() => {
      alertError();
      dispatch(GoalActionCreator.addGoal(goal));
    });
  },

  toggleGoal: goalId => dispatch => {
    dispatch(GoalActionCreator.toggleGoal(goalId));
    return window.API.saveGoalToggle(goalId).catch(() => {
      alertError();
      dispatch(GoalActionCreator.toggleGoal(goalId));
    });
  }
};
