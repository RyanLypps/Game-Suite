import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import HomePage from './home/HomePage'
import Sudoku from './games/sudoku/Game'

export default class App extends Component {
	render() {
		return (
			<Router basename="/">
				<Route exact path='/' component={ HomePage } />
				<Route path='/sudoku' component={ Sudoku } />
			</Router>
		)
	}
}
