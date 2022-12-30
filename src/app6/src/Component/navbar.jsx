// import React, { Component } from 'react';

// class Navbar extends Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-primary bg-light">
//                 <a className="navbar-brand" href="#">
//                     Total Counters 
//                     <span className="badge badge-pill bg-secondary">{this.props.TotalCount}</span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
// export default Navbar;

import React  from 'react';

// Stateless functional components
// ```````````````````````````````

// function Navbar(props) {
//     return (
//         <nav className="navbar navbar-primary bg-light">
//                 <a className="navbar-brand" href="#">
//                     Total Counters 
//                     <span className="badge badge-pill bg-secondary">{props.TotalCount}</span>
//                 </a>
//             </nav>
//     );    
// }

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-primary bg-light">
                <a className="navbar-brand" href="#">
                    Total Counters 
                    <span className="badge badge-pill bg-secondary">{props.TotalCount}</span>
                </a>
            </nav>
    );    
    
}

export default Navbar;

