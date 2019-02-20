import React, {Component} from 'react';
import logo from '../commonimg/logo.png';

class Header extends Component {
    render() {
        return (
            <>
             <header>
                 <img src="logo" alt="logo"/>
                 <span>App Management</span>
                 <button>logout</button>
             </header>
            </>
        );
    }
}

export default Header;