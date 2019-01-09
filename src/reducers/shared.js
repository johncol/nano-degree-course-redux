import { SharedAction } from './../actions/shared';

export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SharedAction.RECEIVE_INITIAL_DATA:
      return false;
    default:
      return state;
  }
};
