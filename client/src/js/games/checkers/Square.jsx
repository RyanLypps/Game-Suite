import React from 'react';
import Pieces from './Pieces';

export default (props) => (
	<div 
	className={ 
		props.selected &&
		props.selected.selected == true && 
		props.playerOnePieces != undefined &&
		props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1))[0] != undefined &&
		props.selected.x == props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1))[0].x &&
		props.selected.y == props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1))[0].y
			? 'checkers-square ' + 'selected' : 
		props.selected &&
		props.selected.selected == true && 
		props.playerTwoPieces != undefined &&
		props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1))[0] != undefined &&
		props.selected.x == props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1))[0].x &&
		props.selected.y == props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1))[0].y	
			? 
		'checkers-square ' + 'selected' :
		props.selected &&
		props.selected.selected == true &&
		props.moveableSquares != undefined &&
		props.moveableSquares.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1)).length == 1
		?
		'checkers-square ' + 'moveable':
		'checkers-square ' + props.background} 
	id={props.id}
	onClick={
		props.playerOneTurn && props.playerOnePieces != undefined && props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1)).length == 1 ?
		props.selectPiece : 
		props.playerOneTurn == false && props.playerTwoPieces != undefined && props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1)).length == 1 ?
		props.selectPiece :
		props.selected &&
		props.selected.selected == true &&
		props.moveableSquares != undefined &&
		props.moveableSquares.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1)).length == 1 ?
		props.submitMove :
		null
		}
	>
		{props.playerOnePieces != undefined && props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1) && a.king == false).length == 1 
		? <Pieces playerOne={true} id={props.id} king={false}/> 
		: 
		props.playerOnePieces != undefined && props.playerOnePieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1) && a.king == true).length == 1 
		? <Pieces playerOne={true} id={props.id} king={true}/>
		:
		props.playerTwoPieces != undefined && props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1) && a.king == false).length == 1 
		? <Pieces playerTwo={true} id={props.id} king={false}/>
		:
		props.playerTwoPieces != undefined && props.playerTwoPieces.filter(a => a.x == props.id.charAt(0) && a.y == props.id.charAt(1) && a.king == true).length == 1 
		? <Pieces playerTwo={true} id={props.id} king={true} /> 
		: ''}
	</div >
);
