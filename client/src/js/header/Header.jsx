import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div>
        <Link to={'/'}>
          <img className='logo' src={Logo} />
        </Link>
        <div className='default-header'>
          <span>Affinity</span>
          <span>Gaming</span>
        </div>
        <div className='nav-bar'>
          <div className='nav-buttons home-button'>Home</div>
          <div className='nav-button-container'>
            <div className='nav-buttons'>Register</div>
            <div className='nav-buttons'>Login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
