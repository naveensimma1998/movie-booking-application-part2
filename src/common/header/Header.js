import './Header.css';
import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() { 

        const size = { width : 15 , height :35}
        return ( <div className="header">
            <img style={size} src={logo} className="App-logo" alt="logo" />
        </div> );
    }
}
 
export default Header;