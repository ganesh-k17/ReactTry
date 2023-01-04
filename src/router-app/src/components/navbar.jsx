import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;



// import React from "react";

// const NavBar = () => {
//   return (
//     <ul>
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//         <a href="/products">Products</a>
//       </li>
//       <li>
//         <a href="/posts/2018/06">Posts</a>
//       </li>
//       <li>
//         <a href="/admin">Admin</a>
//       </li>
//     </ul>
//   );
// };

// export default NavBar;
