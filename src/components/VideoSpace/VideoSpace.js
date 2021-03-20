import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./VideoSpace.module.css";
import VideoBg from "../../assets/video/SpaceX.mp4";

function VideoSpace() {
  return (
    <Aux>
      <section className={classes.VideoSpace}>
        <div className={classes.videoPlace}>
          <video
            src={VideoBg}
            autoPlay
            muted
            loop
            className={classes.VideoSection}
          ></video>
        </div>
        <div className={classes.VideoOverlay}></div>
        <div className={classes.VideoContent}>
          <div className={classes.Container}>
            <p>FLIGHT TEST</p>
            <h1>Starship SN10 High- Altitude Flight Test</h1>
            <div>
              <button className={classes.Btn}>REPLAY</button>
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
}
export default VideoSpace;
