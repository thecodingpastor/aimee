import classes from "./Parallax.module.scss";

const Parallax: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div
      className={classes.Parallax}
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></div>
  );
};

export default Parallax;
