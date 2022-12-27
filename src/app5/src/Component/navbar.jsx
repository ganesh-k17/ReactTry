import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#test">Navbar : Count {this.props.TotalCount}</a>
            </nav>
        );
    }
}
 
export default Navbar;
