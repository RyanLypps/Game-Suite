import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import HomePage from './home/homePage'
import Sudoku from './games/sudoku/game'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={ HomePage } />
				<Route path='/sudoku' component={ Sudoku } />
			</Router>
		)
	}
}
