import React from 'react';
import Square from './square';

export default class Board extends React.Component {
	constructor() {
		super();

		this.enterNumber = this.enterNumber.bind(this);
	}

	enterNumber(e) {
		this.props.enterNumber(e.target.id)
	}

	renderSquare() {
		let segment = [];
		let boardsize = 9
		let count = 1;

		for (let i = 0; i < boardsize; i++) {
			for (let j = 0; j < boardsize; j++) {
				segment.push(<Square
					i={i}
					j={j}
					id={'' + i + j}
					key={count}
					puzzle={this.props.puzzle}
					testPuzzle={this.props.testPuzzle}
					enterNumber={this.enterNumber}
				/>);
				count++;
			}
		}
		return segment;
	}

	render() {
		return (
			<div className='sudokuBoard'>
				{this.renderSquare()}
			</div>
		);
	};
};
