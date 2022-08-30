import React from "react";
import classes from "./Spin.module.scss";

type IProps = {
  white?: boolean;
  style?: object;
};
const Spin: React.FC<IProps> = (props) => (
  <div
    className={props.white ? classes.White : classes.Loader}
    style={props.style}
  ></div>
);

export default Spin;
