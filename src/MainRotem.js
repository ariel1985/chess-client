import React, { Component } from 'react';

import WithMoveValidation from './integrations/WithMoveValidation';

class MainRotem extends Component {
  state = {
    showWithMoveValidation: true,
  };
  render() {
    return (
      <div>
        <div style={boardsContainer}>
          {this.state.showWithMoveValidation && <WithMoveValidation />}
        </div>
      </div>
    );
  }
}

export default MainRotem;

const boardsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100vw',
  marginTop: 30,
  marginBottom: 50
};
