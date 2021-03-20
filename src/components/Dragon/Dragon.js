import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Dragon.module.css";

function Dragon() {
  return (
    <Aux>
      <section className={classes.Dragon}>
        <div className={classes.Container}>
          <div className={classes.InsideDragon}>
            <h1>DRAGON DOCKING SIMULATOR</h1>
            <p>
              Dragon is designed to autonomously dock and undock with the
              International Space Station. However, the crew can take manual
              control of the spacecraft if necessary.
            </p>
            <div>
              <button className={classes.Btn}>TRY NOW</button>
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
}
export default Dragon;
