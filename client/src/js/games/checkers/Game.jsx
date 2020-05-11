import React from 'react';
import Board from './Board';

class Checkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTwoPieces: [
        {king: false, x: 0, y: 1}, {king: false, x: 0, y: 3}, {king: false, x: 0, y: 5}, {king: false, x: 0, y: 7},
        {king: false, x: 1, y: 0}, {king: false, x: 1, y: 2}, {king: false, x: 1, y: 4}, {king: false, x: 1, y: 6},
        {king: false, x: 2, y: 1}, {king: false, x: 2, y: 3}, {king: false, x: 2, y: 5}, {king: false, x: 2, y: 7}
       ],
      playerOnePieces: [
        {king: false, x: 7, y: 0}, {king: false, x: 7, y: 2}, {king: false, x: 7, y: 4}, {king: false, x: 7, y: 6},
        {king: false, x: 6, y: 1}, {king: false, x: 6, y: 3}, {king: false, x: 6, y: 5}, {king: false, x: 6, y: 7},
        {king: false, x: 5, y: 0}, {king: false, x: 5, y: 2}, {king: false, x: 5, y: 4}, {king: false, x: 5, y: 6}
      ]  
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Play Checkers!</h1>
        <Board 
          playerOnePieces={this.state.playerOnePieces}
          playerTwoPieces={this.state.playerTwoPieces}
        />
      </div >
    )
  }
}

export default Checkers;
