import { GoalAction } from './../actions/goal';
import { SharedAction } from './../actions/shared';

export const goalReducer = (state = [], action) => {
  switch (action.type) {
    case GoalAction.ADD_GOAL:
      return state.concat(action.goal);

    case GoalAction.REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.goalId);

    case GoalAction.TOGGLE_GOAL:
      return state.map(goal =>
        goal.id !== action.goalId ? goal : { ...goal, achieved: !goal.achieved }
      );

    case SharedAction.RECEIVE_INITIAL_DATA:
      return action.goals;

    default:
      return state;
  }
};
