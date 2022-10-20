import React  from "react";
import { Link } from "react-router-dom";


function Navbar(props) {
   
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <input
              type="search"
              placeholder="Search News "
              onChange={(e) => {
                props.getfun(e.target.value);
              }}
            />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/Headlines">Headlines</Link>
          </li>
        </ul>
      </div>
     
    </>
  );
}

export default Navbar;
