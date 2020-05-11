import React from 'react';
import Board from './Board';

class Checkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTwoPieces: [],
      playerOnePieces: [],
      playerOneTurn: true,
      selected: { selected: false, x: -1, y: -1 },
      selectedPiece: {},
      moveableSquares: []
    }

    this.startNewGame = this.startNewGame.bind(this);
    this.selectPiece = this.selectPiece.bind(this);
    this.checkPlayerOneMovement = this.checkPlayerOneMovement.bind(this);
    this.submitMove = this.submitMove.bind(this);
  }

  startNewGame() {
    this.setState({
      playerOnePieces: [
        { king: false, x: 7, y: 0 }, { king: false, x: 7, y: 2 }, { king: false, x: 7, y: 4 }, { king: false, x: 7, y: 6 },
        { king: false, x: 6, y: 1 }, { king: false, x: 6, y: 3 }, { king: false, x: 6, y: 5 }, { king: false, x: 6, y: 7 },
        { king: false, x: 5, y: 0 }, { king: false, x: 5, y: 2 }, { king: false, x: 5, y: 4 }, { king: false, x: 5, y: 6 }
      ],
      playerTwoPieces: [
        { king: false, x: 0, y: 1 }, { king: false, x: 0, y: 3 }, { king: false, x: 0, y: 5 }, { king: false, x: 0, y: 7 },
        { king: false, x: 1, y: 0 }, { king: false, x: 1, y: 2 }, { king: false, x: 1, y: 4 }, { king: false, x: 1, y: 6 },
        { king: false, x: 2, y: 1 }, { king: false, x: 2, y: 3 }, { king: false, x: 2, y: 5 }, { king: false, x: 2, y: 7 }
      ],
      selected: {
        selected: false,
        x: -1,
        y: -1
      }
    })
  }

  selectPiece(e) {
    this.setState({
      selected: {
        selected: !this.state.selected.selected,
        x: e.charAt(0),
        y: e.charAt(1)
      }
    })

    if (this.state.playerOneTurn) {
      this.setState({
        selectedPiece: this.state.playerOnePieces.find(a => a.x == e.charAt(0) && a.y == e.charAt(1))
      }, this.checkPlayerOneMovement);
    } else {
      this.setState({
        selectedPiece: this.state.playerOnePieces.find(a => a.x == e.charAt(0) && a.y == e.charAt(1))
      }, this.checkPlayerTwoMovement);
    }
  }

  submitMove(e) {
    if (this.state.playerOneTurn) {
      let updatedPieces = [...this.state.playerOnePieces]

      updatedPieces = updatedPieces.map(a => a == this.state.selectedPiece && e.charAt(0) != 0 ? a = {king: false, x: parseInt(e.charAt(0)), y: parseInt(e.charAt(1))} : a == this.state.selectedPiece && e.charAt(0) == 0 ? a = {king: true, x: parseInt(e.charAt(0)), y: parseInt(e.charAt(1))} : a);
      this.setState({
        playerOnePieces: updatedPieces,
        selected: !this.state.selected.selected
      })
    }  
  }

  checkPlayerOneMovement() {
    let checkX = this.state.selectedPiece.x - 1;
    let checkYLeft = this.state.selectedPiece.y - 1;
    let checkYRight = this.state.selectedPiece.y + 1;
    let moveableSquares = [...this.state.moveableSquares];

    while(moveableSquares.length > 0) {
      moveableSquares.pop();
    }

    if (this.state.selected.selected) {
      if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 0) {
        moveableSquares.push({ x: checkX, y: checkYLeft })
      }
      if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 0) {
        moveableSquares.push({ x: checkX, y: checkYRight })
      }
    }

    this.setState({
      moveableSquares: moveableSquares
    })
  }

  checkPlayerTwoMovement() {
    let checkX = this.state.selectedPiece.x + 1;
    let checkYLeft = this.state.selectedPiece.y - 1;
    let checkYRight = this.state.selectedPiece.y + 1;
    let moveableSquares = [];

    if (this.state.selected.selected) {
      if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 0) {
        moveableSquares.push({ x: checkX, y: checkYLeft })
      }
      if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 0) {
        moveableSquares.push({ x: checkX, y: checkYRight })
      }
    }

    this.setState({
      moveableSquares: moveableSquares
    })
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Play Checkers!</h1>
        <Board
          playerOnePieces={this.state.playerOnePieces}
          playerTwoPieces={this.state.playerTwoPieces}
          selectPiece={this.selectPiece}
          playerOneTurn={this.state.playerOneTurn}
          selected={this.state.selected}
          moveableSquares={this.state.moveableSquares}
          submitMove={this.submitMove}
        />
        <button onClick={this.startNewGame}>Two Player Game</button>
      </div >
    )
  }
}

export default Checkers;
