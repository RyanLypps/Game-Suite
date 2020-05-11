import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.selectPiece = this.selectPiece.bind(this);
  }

  selectPiece(e) {
    this.props.selectPiece(e.target.id)
  }

  renderSquare() {
    let segment = [];
    let boardSize = 8;
    let count = 1;

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if ((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0)) {
          segment.push(<Square
            i={i}
            j={j}
            id={'' + i + j}
            background={'red'}
            playerOnePieces={this.props.playerOnePieces}
            playerTwoPieces={this.props.playerTwoPieces}
            selectPiece={this.selectPiece}
            playerOneTurn={this.props.playerOneTurn}
            selected={this.props.selected}
            key={count}
          />);
        } else {
          segment.push(<Square
            i={i}
            j={j}
            id={'' + i + j}
            background={'black'}
            key={count}
          />);
        }
        count++;
      }
    }
    return segment;
  }

  render() {
    return (
      <div className='checkers-board' >
        {this.renderSquare()}
      </div>
    )
  }
}
