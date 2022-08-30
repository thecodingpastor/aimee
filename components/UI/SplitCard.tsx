import BlurCircle from "./BlurCircle";

import classes from "./SplitCard.module.scss";

type Props = {
  src: string;
  alt: string;
  classname?: string;
};

const SplitCard: React.FC<Props> = ({ src, alt, classname }) => {
  return (
    <div className={classes.Container}>
      <BlurCircle classname={classname ? classname : ""} />
      <div className={classes.ImageDiv}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default SplitCard;
