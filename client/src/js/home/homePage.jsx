import React, { Component } from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import images from '../../assets/games/*.png';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
		}
	}

	componentDidMount() {
		fetch('/api/Games')
			.then(res => res.json())
			.then(allGames => this.setState({ games: allGames }));
	}

	render() {
		let keyCounter = 0;

		return (
			<div className='home-container'>
				<Header />
				<div className='game-container'>
					{this.state.games.map(game => {
						keyCounter++;

						return (
							<div className='each-game-box' key={keyCounter}>
								<h3 className='each-game-title'>{game.title}</h3>
								<Link to={`/${game.title}`}>
									<img className='each-game' src={Object.values(images).filter(value => value.includes(game.image.toLowerCase()))[0]} />
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
