import React, { Component } from 'react';
import Board from './board';
import Header from './header';
import NumberButton from './number';
import {
	getSudoku
} from 'fake-sudoku-puzzle-generator';
import sudokus from 'sudokus';

class Sudoku extends Component {
	constructor(props) {
		super(props);

		this.state = {
			puzzle: [],
			numberToEnter: null,
			testPuzzle: [],
			correct: null
		};

		this.generatePuzzle = this.generatePuzzle.bind(this);
		this.enterNumber = this.enterNumber.bind(this);
		this.getNumber = this.getNumber.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.getSolution = this.getSolution.bind(this);
	}

	getSolution() {
	    let testSolution = [...this.state.testPuzzle]

	    for(let i = 0; i < 9; i++){
	        for(let j = 0; j < 9; j++) {
	            if(testSolution[i][j] == null || testSolution[i][j] == '') {
	                testSolution[i][j] = 0;
	            }
	        }
	    }

	    let solution = sudokus.solve(testSolution);
	    this.setState({ testPuzzle: solution });
	}

	checkAnswer() {
		var finished = true;
		if (this.state.testPuzzle.length > 1) {
			for (let y = 0; y < 9; ++y) {
				for (let x = 0; x < 9; ++x) {
					let value = this.state.testPuzzle[y][x];

					if (value) {
						// Check the line
						for (var x2 = 0; x2 < 9; ++x2) {
							if (x2 != x && this.state.testPuzzle[y][x2] == value) {
								this.setState({ correct: false });
								finished = false;
							}
						}

						// Check the column
						for (var y2 = 0; y2 < 9; ++y2) {
							if (y2 != y && this.state.testPuzzle[y2][x] == value) {
								this.setState({ correct: false });
								finished = false;
							}
						}

						// Check the square
						let startY = Math.floor(y / 3) * 3;
						for (let y2 = startY; y2 < startY + 3; ++y2) {
							let startX = Math.floor(x / 3) * 3;
							for (x2 = startX; x2 < startX + 3; ++x2) {
								if ((x2 != x || y2 != y) && this.state.testPuzzle[y2][x2] == value) {
									this.setState({ correct: false });
									finished = false;
								}
							}
						}
					} else if (!value) {
						this.setState({ correct: 'Incomplete' });
						return;
					}
				}
			}
			if (finished == true) {
				this.setState({ correct: true });
			}
		}
	}

	getNumber(e) {
		this.setState({ numberToEnter: e });
	}

	enterNumber(e) {
		let updatedPuzzle = [...this.state.testPuzzle];

		if (this.state.numberToEnter == null) {
			return;
		} else {
			updatedPuzzle[e.charAt(0)][e.charAt(1)] = parseInt(this.state.numberToEnter);
			this.setState({ testPuzzle: updatedPuzzle });
		}
	}

	generatePuzzle(e) {
		let puzzle = [];
		let testPuzzle = [];
		switch (e) {
			case ('getVeryEasySudoku'):
				puzzle = getSudoku('VeryEasy')
				break;
			case ('getEasySudoku'):
				puzzle = getSudoku('Easy')
				break;
			case ('getMediumSudoku'):
				puzzle = getSudoku('Medium')
				break;
			case ('getHardSudoku'):
				puzzle = getSudoku('Hard')
				break;
		}
		testPuzzle = puzzle.map(function (arr) {
			return arr.slice();
		});

		this.setState({
			puzzle: puzzle,
			testPuzzle: testPuzzle
		});
	}

	render() {
		return (
			<div className='sudokuContainer'>
				<Header
					generatePuzzle={this.generatePuzzle}
				/>
				<br />
				<Board
					testPuzzle={this.state.testPuzzle}
					puzzle={this.state.puzzle}
					enterNumber={this.enterNumber}
				/>
				<br />
				<NumberButton
					getNumber={this.getNumber} />
				<br />
				<div className='sudokuSubmit'>
					<button onClick={this.checkAnswer}>Submit</button>
					<button onClick={this.getSolution}>Solution</button>
					<br />
					<h2>{this.state.correct == true ? 'Great Job!' :
						this.state.correct == false ? 'Try Again?' :
							this.state.correct == 'Incomplete' ? 'Incomplete' :
								''}</h2>
				</div>
			</div>
		);
	}
}

export default Sudoku;
