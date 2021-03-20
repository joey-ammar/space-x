import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <Aux>
      <section className={classes.Footer}>
        <div className={classes.Container}>
          <div className={classes.InsideFooter}>
            <ul>
              <li>
                <a className={classes.Special}>SPACEX © 2021</a>
              </li>
              <li>
                <a>TWITTER</a>
              </li>
              <li>
                <a>YOUTUBE</a>
              </li>
              <li>
                <a>INSTAGRAM</a>
              </li>
              <li>
                <a>FLICKER</a>
              </li>
              <li>
                <a>LINKEDIN</a>
              </li>
              <li>
                <a>PRIVACY POLICY</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Aux>
  );
}
export default Footer;
