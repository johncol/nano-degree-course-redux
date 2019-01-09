import React from 'react';
import { connect } from 'react-redux';

import TODOs from './todos/TODOs';
import Goals from './goals/Goals';
import Loading from './shared/loading/Loading';
import { SharedApiActionCreator } from './../actions/shared';

class App extends React.Component {
  componentDidMount() {
    this.props.receiveInitialData();
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <h1>UI + Redux</h1>
        {loading && <Loading />}
        {!loading && (
          <React.Fragment>
            <TODOs />
            <Goals />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.loading
  }),
  dispatch => ({
    receiveInitialData: () => {
      dispatch(SharedApiActionCreator.receiveInitialData());
    }
  })
)(App);
