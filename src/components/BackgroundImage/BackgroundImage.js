import React from "react";
import classes from "./BackgroundImage.module.css";
import Aux from "../../hoc/Aux";
function BackgroundImage(props) {
  return (
    <Aux>
      <header className={classes.MainHeader}>{props.children}</header>
    </Aux>
  );
}
export default BackgroundImage;
