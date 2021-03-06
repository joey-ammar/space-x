import React from "react";
import classes from "./Nav.module.css";
import Aux from "../../hoc/Aux";
import logo from "./logo.png";
const Nav = (props) => {
  return (
    <Aux>
      {/* STARTING THE NAVIGATION */}
      <nav className={classes.Navbar}>
        {/* CONTAINER NOT WORKING ! */}
        <div className={classes.Container}>
          {/* SETTING THE FLEXBOX */}
          <div className={classes.NavbarInside}>
            {/* LEFT SIDE OF THE NAVIGATION */}
            <div className={classes.NavbarInsideLeft}>
              <img
                className={classes.ImageSize}
                src={logo}
                alt="the logo of the website"
              />
              <ul>
                <li>
                  <a src="">Falcon 9</a>
                </li>
                <li>
                  <a src="">Falcon Heavy</a>
                </li>
                <li>
                  <a src="">Dragon</a>
                </li>
                <li>
                  <a src="">STARSHIP</a>
                </li>
                <li>
                  <a src="">HUMAN SPACEFLIGHT</a>
                </li>
                <li>
                  <a src="">RIDESHARE</a>
                </li>
              </ul>
            </div>
            {/* RIGHT SIDE OF THE NAVIGATION */}
            <div className={classes.NavbarInsideRight}>
              <ul>
                <li>
                  <a src="">SHOP</a>
                </li>
                <li>
                  <a className={classes.NoEffect} src="">
                    <i class="lni lni-menu"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Aux>
  );
};
export default Nav;
