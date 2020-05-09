import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import HomePage from './home/HomePage'
import Sudoku from './games/sudoku/Game'
import Header from './header/Header'
import Checkers from './games/checkers/Game'

export default class App extends Component {
	render() {
		return (
			<Router basename="/">
				<Header />
				<Route exact path='/' component={HomePage} />
				<Route path='/sudoku' component={Sudoku} />
				<Route path='/checkers' component={Checkers} />
			</Router>
		)
	}
}
