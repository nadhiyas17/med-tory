import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({
  home,
  userTitle,
  inventoryTitle,
  inventoryTitle1,
  supplierTitle,
  orderTitle,
  viewerTitle,
}) => {
  const customnavbar = {

    
title:"",
url:""
  };
  return (
    <div className="navbarr">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  ">
            <li className="nav-item ">
              <NavLink to={home} className="nav-link">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/superadmin" className="nav-link">
                {userTitle}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/inventorystaff" className="nav-link">
                {inventoryTitle}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/inventorystaff" className="nav-link">
                {inventoryTitle1}
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink to="/order" className="nav-link">
                {orderTitle}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/suppliercomp" className="nav-link">
                {supplierTitle}
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="superadmin/viewer" className="nav-link">
                {viewerTitle}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
