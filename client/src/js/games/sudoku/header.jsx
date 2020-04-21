import React from 'react';

export default class SudokuHeader extends React.Component {
	constructor(props) {
		super(props);

		this.getButtonValue = this.getButtonValue.bind(this);
	}

	getButtonValue(e) {
		this.props.generatePuzzle(e.target.value);
	}

	render() {
		return (
			<div className='sudokuHeader'>
				<h1>Play Sudoku!</h1>
				<button className='very-easy' value='getVeryEasySudoku' onClick={this.getButtonValue}>very easy</button>
				<button className='easy' value='getEasySudoku' onClick={this.getButtonValue}>easy</button>
				<button className='medium' value='getMediumSudoku' onClick={this.getButtonValue}>medium</button>
				<button className='hard' value='getHardSudoku' onClick={this.getButtonValue}>hard</button>
			</div>
		);
	}
}
