import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./HeaderSyntax.module.css";
function HeaderSyntax() {
  return (
    <Aux>
      <div className={classes.HeaderSyntax}>
        <div className={classes.Container}>
          <div className={classes.HeaderSyntacInside}>
            <p>RECENT LAUNCH</p>
            <h1>STARLINK MISSION</h1>
            <div className={classes.BtnContainer}>
              <button className={classes.Btn}>REPLAY</button>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
}
export default HeaderSyntax;
