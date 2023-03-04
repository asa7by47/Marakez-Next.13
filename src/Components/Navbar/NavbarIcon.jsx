import React from 'react';
import styles from "./navbar.css";

const NavbarIcon = ({icon}) => {
    return (
        <li className="nav-item bg-icon rounded-circle mt-1 me-1 fs" >
        <a className="nav-link p-1 d-flex justify-content-center align-items-center" href="#">
          {icon}
        </a>
      </li>
     
    );
};

export default NavbarIcon;