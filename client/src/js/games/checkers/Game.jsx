import React from 'react';
import Board from './Board';

class Checkers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Play Checkers!</h1>
        <Board />
      </div >
    )
  }
}

export default Checkers;
