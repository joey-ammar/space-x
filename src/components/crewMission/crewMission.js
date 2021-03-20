import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./crewMission.module.css";

function crewMission() {
  return (
    <Aux>
      <section className={classes.CrewMission}>
        <div className={classes.Container}>
          <div className={classes.Crew}>
            <h1>CREW-1 MISSION</h1>
            <p>Watch the Crew-1 mission from the beginning.</p>
            <div>
              <button className={classes.Btn}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
}
export default crewMission;
