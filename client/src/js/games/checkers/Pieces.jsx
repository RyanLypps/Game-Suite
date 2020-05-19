import React from 'react';

export default class Piece extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={this.props.playerOne == true && this.props.king == false 
      ? 'player-one-piece' 
      : this.props.playerTwo && this.props.king == false
      ? 'player-two-piece' 
      : this.props.playerOne == true && this.props.king == true
      ? 'player-one-piece-king'
      : this.props.playerTwo && this.props.king == true
      ? 'player-two-piece-king'
      : ''} id={this.props.id}>
        {this.props.king ? 'K' : ''}
      </div>
    );
  }
}
