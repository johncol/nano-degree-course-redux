export const SharedAction = {
  RECEIVE_INITIAL_DATA: 'RECEIVE_INITIAL_DATA'
};

export const SharedActionCreator = {
  receiveInitialData: (todos, goals) => ({
    type: SharedAction.RECEIVE_INITIAL_DATA,
    todos,
    goals
  })
};

export const SharedApiActionCreator = {
  receiveInitialData: () => dispatch => {
    return Promise.all([window.API.fetchTodos(), window.API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(SharedActionCreator.receiveInitialData(todos, goals));
      }
    );
  }
};
