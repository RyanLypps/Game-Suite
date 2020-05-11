import React from 'react';

export default class Piece extends React.Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    return (
      <div className={this.props.playerOne == true ? 'player-one-piece' : this.props.playerTwo ? 'player-two-piece' : ''} id={this.props.id}>
      </div>
    );
  }
}