import React from 'react';
import Pieces from './Pieces';

export default (props) => (
	<div className={'checkers-square ' + props.background} id={props.id}>
		{props.playerOnePieces != undefined && props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1)).length == 1 ? <Pieces playerOne={true}/> 
		: 
		props.playerTwoPieces != undefined && props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1)).length == 1 ? <Pieces playerTwo={true}/> 
		: ''}
	</div >
);
