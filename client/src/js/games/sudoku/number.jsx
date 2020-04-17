import React from 'react';

export default class NumberButton extends React.Component {
	constructor(props) {
		super(props);

		this.getNumber = this.getNumber.bind(this);
	}

	getNumber(e) {
		this.props.getNumber(e.target.value)
	}

	render() {
		return (
			<div className='sudokuNumbers'>
				<button value='1' onClick={this.getNumber}>1</button>
				<button value='2' onClick={this.getNumber}>2</button>
				<button value='3' onClick={this.getNumber}>3</button>
				<button value='4' onClick={this.getNumber}>4</button>
				<button value='5' onClick={this.getNumber}>5</button>
				<button value='6' onClick={this.getNumber}>6</button>
				<button value='7' onClick={this.getNumber}>7</button>
				<button value='8' onClick={this.getNumber}>8</button>
				<button value='9' onClick={this.getNumber}>9</button>
				<button value='' onClick={this.getNumber}>Erase</button>
			</div>
		)
	}
}
