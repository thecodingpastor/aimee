import classes from "./BlurCircle.module.scss";

type Props = {
  classname?: string;
};

// Must be placed inside a parent of position relative
const BlurCircle: React.FC<Props> = ({ classname }) => {
  if (window.navigator.platform === "iPhone") return null;

  return (
    <div className={`${classes.Container} ${classname ? classname : ""}`}></div>
  );
};

export default BlurCircle;
