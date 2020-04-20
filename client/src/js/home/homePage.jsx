import React, { Component } from 'react';
import Header from '../header/Header';
import sudoku from '../../assets/sudoku.png'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
	render() {
		return (
			<div className='home-container'>
				<Header />
				<div className='game-container'>
					<div className='each-game-box'>
						<h3 className='each-game-title'>Sudoku</h3>
						<Link to={'/sudoku'}>
							<img className='each-game' src={sudoku}/>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}
