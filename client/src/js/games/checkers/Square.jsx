import React from 'react';

export default (props) => (
	<div className={'checkers-square ' + props.background} id={props.id}>
		{props.id}
	</div >
);
