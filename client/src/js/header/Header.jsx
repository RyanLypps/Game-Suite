import React, { Component } from 'react';
import Logo from '../../assets/logo.png';

class Header extends Component {

  render() {
    return (
      <div>
        <img className='logo' src={Logo} />
        <div className='default-header pulse'>
          <span>Affinity</span>
          <span>Gaming</span>
        </div>
      </div >
    );
  }
}

export default Header;
