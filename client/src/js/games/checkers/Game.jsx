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
      moveableSquares: [],
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
      },
      playerOneTurn: true
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
        selectedPiece: this.state.playerTwoPieces.find(a => a.x == e.charAt(0) && a.y == e.charAt(1))
      }, this.checkPlayerTwoMovement);
    }
  }

  submitMove(e) {
    if (this.state.playerOneTurn) {
      let updatedPieces = [...this.state.playerOnePieces];
      let updatedPlayerTwoPieces = [...this.state.playerTwoPieces];

      if (parseInt(e.charAt(0)) - this.state.selectedPiece.x == -2 && e.charAt(1) - this.state.selectedPiece.y == -2) {
        updatedPlayerTwoPieces = updatedPlayerTwoPieces.map(a => a.x == this.state.selectedPiece.x - 1 && a.y == this.state.selectedPiece.y - 1 ? '' : a);
        this.setState({
          playerTwoPieces: updatedPlayerTwoPieces
        });
      } else if (parseInt(e.charAt(0)) - this.state.selectedPiece.x == -2 && e.charAt(1) - this.state.selectedPiece.y == 2) {
        updatedPlayerTwoPieces = updatedPlayerTwoPieces.map(a => a.x == this.state.selectedPiece.x - 1 && a.y == this.state.selectedPiece.y + 1 ? '' : a);
        this.setState({
          playerTwoPieces: updatedPlayerTwoPieces
        });
      }

      updatedPieces = updatedPieces.map(a => a == this.state.selectedPiece && e.charAt(0) != 0 ? a = { king: false, x: parseInt(e.charAt(0)), y: parseInt(e.charAt(1)) } : a == this.state.selectedPiece && e.charAt(0) == 0 ? a = { king: true, x: parseInt(e.charAt(0)), y: parseInt(e.charAt(1)) } : a);

      this.setState({
        playerOnePieces: updatedPieces,
        selected: !this.state.selected.selected,
        playerOneTurn: !this.state.playerOneTurn
      })
    }

    if (this.state.playerOneTurn == false) {
      let updatedPieces = [...this.state.playerTwoPieces]
      let updatedPlayerOnePieces = [...this.state.playerOnePieces]

      if (parseInt(e.charAt(0)) - this.state.selectedPiece.x == 2 && e.charAt(1) - this.state.selectedPiece.y == -2) {
        updatedPlayerOnePieces = updatedPlayerOnePieces.map(a => a.x == this.state.selectedPiece.x + 1 && a.y == this.state.selectedPiece.y - 1 ? '' : a);
        this.setState({
          playerOnePieces: updatedPlayerOnePieces
        });
      } else if (parseInt(e.charAt(0)) - this.state.selectedPiece.x == 2 && e.charAt(1) - this.state.selectedPiece.y == 2) {
        updatedPlayerOnePieces = updatedPlayerOnePieces.map(a => a.x == this.state.selectedPiece.x + 1 && a.y == this.state.selectedPiece.y + 1 ? '' : a);
        this.setState({
          playerOnePieces: updatedPlayerOnePieces
        });
      }

      updatedPieces = updatedPieces.map(a => a == this.state.selectedPiece && e.charAt(0) != 7 ? a = { king: false, x: parseInt(e.charAt(0)), y: parseInt(e.charAt(1)) } : a == this.state.selectedPiece && e.charAt(0) == 7 ? a = { king: true, x: parseInt(e.charAt(0)), y: parseInt(e.charAt(1)) } : a);

      this.setState({
        playerTwoPieces: updatedPieces,
        selected: !this.state.selected.selected,
        playerOneTurn: !this.state.playerOneTurn
      })
    }
  }

  checkPlayerOneMovement() {
    let checkX = this.state.selectedPiece.x - 1;
    let checkXHop = this.state.selectedPiece.x - 2;
    let checkYLeft = this.state.selectedPiece.y - 1;
    let checkYRight = this.state.selectedPiece.y + 1;
    let checkYLeftHop = this.state.selectedPiece.y - 2;
    let checkYRightHop = this.state.selectedPiece.y + 2;

    let moveableSquares = [];

    if (this.state.selected.selected) {
      // checks if any piece occupies left
      if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 0 && this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 0 && checkYLeft >= 0 && checkX >= 0) {
        moveableSquares.push({ x: checkX, y: checkYLeft, firstMove: true })
      }
      //checks if any piece occupies right
      if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 0 && this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 0 && checkYRight <= 7 && checkX >= 0) {
        moveableSquares.push({ x: checkX, y: checkYRight, firstMove: true })
      }
      // checks if any enemy piece occupies left
      if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 1) {
        // checks if open square past enemy piece to left
        if (this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop >= 0 && checkYLeftHop >= 0).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop >= 0 && checkYLeftHop >= 0).length == 0 && checkYLeftHop >= 0 && checkXHop >= 0) {
          moveableSquares.push({ x: checkXHop, y: checkYLeftHop, firstMove: false })
        }
      }
      // checks if any enemy piece occupies right
      if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 1) {
        // checks if open square past enemy piece to right
        if (this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkX >= 0 && checkYRightHop <= 7).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkXHop >= 0 && checkYRightHop <= 7).length == 0 && checkYRightHop <= 7 && checkXHop >= 0) {
          moveableSquares.push({ x: checkXHop, y: checkYRightHop, firstMove: false })
        }
      }

      if(moveableSquares.length > 0) {
        let finished = false
        while(!finished) {
          finished = true;
          for(let i = 0; i < moveableSquares.length; i++) {
            if(moveableSquares[i].firstMove == true) continue;
            checkX = moveableSquares[i].x - 1;
            checkXHop = moveableSquares[i].x - 2;
            checkYLeft = moveableSquares[i].y - 1;
            checkYRight = moveableSquares[i].y + 1;
            checkYLeftHop = moveableSquares[i].y - 2;
            checkYRightHop = moveableSquares[i].y + 2;

            if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 1) {
              // checks if open square past enemy piece to left
              if (this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop >= 0 && checkYLeftHop >= 0).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop >= 0 && checkYLeftHop >= 0).length == 0 && checkXHop >= 0 && checkYLeftHop >= 0) {
                if(moveableSquares.filter(a => a.x == checkXHop && a.y == checkYLeftHop).length == 1) {
                  
                } else {
                  moveableSquares.push({ x: checkXHop, y: checkYLeftHop, firstMove: false });
                  finished = false;
                }
              }
            }
            // checks if any enemy piece occupies right
            if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 1) {
              // checks if open square past enemy piece to right
              if (this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkX >= 0 && checkYRightHop <= 7).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkXHop >= 0 && checkYRightHop <= 7).length == 0 && checkXHop >= 0 && checkYRightHop <= 7) {
                if(moveableSquares.filter(a => a.x == checkXHop && a.y == checkYRightHop).length == 1) {
                  continue;
                } else {
                  moveableSquares.push({ x: checkXHop, y: checkYRightHop, firstMove: false });
                  finished = false;
                }
              }
            }
          } 
        }
      }
    }

    this.setState({
      moveableSquares: moveableSquares
    })
  }

  checkPlayerTwoMovement() {
    let checkX = this.state.selectedPiece.x + 1;
    let checkXHop = this.state.selectedPiece.x + 2;
    let checkYLeft = this.state.selectedPiece.y - 1;
    let checkYRight = this.state.selectedPiece.y + 1;
    let checkYLeftHop = this.state.selectedPiece.y - 2;
    let checkYRightHop = this.state.selectedPiece.y + 2;

    let moveableSquares = [];

    if (this.state.selected.selected) {
      // checks if any piece occupies left
      if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX <= 7 && checkYLeft >= 0).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX <= 7 && checkYLeft >= 0).length == 0 && checkX <= 7 && checkYLeft >= 0) {
        moveableSquares.push({ x: checkX, y: checkYLeft, firstMove: true })
      }
      //checks if any piece occupies right
      if (this.state.playerTwoPieces.filter(a => a.x == checkX && a.y == checkYRight && checkX <= 7 && checkYRight <= 7).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYRight && checkX <= 7 && checkYRight <= 7).length == 0 && checkX <= 7 && checkYRight <= 7 ) {
        moveableSquares.push({ x: checkX, y: checkYRight, firstMove: true })
      }
      // checks if any enemy piece occupies left
      if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX <= 7 && checkYLeft >= 0).length == 1) {
        // checks if open square past enemy piece to left
        if (this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop <= 7 && checkYLeftHop >= 0).length == 0 && this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop <= 7 && checkYLeftHop >= 0).length == 0 && checkXHop <= 7 && checkYLeftHop >= 0) {
          moveableSquares.push({ x: checkXHop, y: checkYLeftHop, firstMove: false });
        }
      }
      // checks if any enemy piece occupies right
      if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYRight && checkX <= 7 && checkYRight <= 7).length == 1) {
        // checks if open square past enemy piece to right
        if (this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkXHop <= 7 && checkYRightHop <= 7).length == 0 && this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkXHop <= 7 && checkYRightHop <= 7).length == 0 && checkXHop <= 7 && checkYRightHop <= 7) {
          moveableSquares.push({ x: checkXHop, y: checkYRightHop, firstMove: false })
        }
      }

      if(moveableSquares.length > 0) {
        let finished = false
        while(!finished) {
          finished = true;
          for(let i = 0; i < moveableSquares.length; i++) {
            if(moveableSquares[i].firstMove == true) continue;
            checkX = moveableSquares[i].x + 1;
            checkXHop = moveableSquares[i].x + 2;
            checkYLeft = moveableSquares[i].y - 1;
            checkYRight = moveableSquares[i].y + 1;
            checkYLeftHop = moveableSquares[i].y - 2;
            checkYRightHop = moveableSquares[i].y + 2;

            if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYLeft && checkX >= 0 && checkYLeft >= 0).length == 1) {
              // checks if open square past enemy piece to left
              if (this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop >= 0 && checkYLeftHop >= 0).length == 0 && this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYLeftHop && checkXHop <= 7 && checkYLeftHop >= 0).length == 0 && checkXHop <= 7 && checkYLeftHop >= 0) {
                if(moveableSquares.filter(a => a.x == checkXHop && a.y == checkYLeftHop).length == 1) {
                  
                } else {
                  moveableSquares.push({ x: checkXHop, y: checkYLeftHop, firstMove: false });
                  finished = false;
                }
              }
            }
            // checks if any enemy piece occupies right
            if (this.state.playerOnePieces.filter(a => a.x == checkX && a.y == checkYRight && checkX >= 0 && checkYRight <= 7).length == 1) {
              // checks if open square past enemy piece to right
              if (this.state.playerOnePieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkX >= 0 && checkYRightHop <= 7).length == 0 && this.state.playerTwoPieces.filter(a => a.x == checkXHop && a.y == checkYRightHop && checkXHop <= 7 && checkYRightHop <= 7).length == 0 && checkXHop <= 7 && checkYRightHop <= 7) {
                if(moveableSquares.filter(a => a.x == checkXHop && a.y == checkYRightHop).length == 1) {
                  continue;
                } else {
                  moveableSquares.push({ x: checkXHop, y: checkYRightHop, firstMove: false });
                  finished = false;
                }
              }
            }
          } 
        }
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
