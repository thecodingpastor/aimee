import dynamic from "next/dynamic";

import classes from "./SplitCard.module.scss";

type Props = {
  src: string;
  alt: string;
  classname?: string;
};

const BlurCircle = dynamic(
  () => {
    return import("./BlurCircle");
  },
  { ssr: false }
);

const SplitCard: React.FC<Props> = ({ src, alt, classname }) => {
  return (
    <div className={classes.Container}>
      {typeof window !== "undefined" &&
        window.navigator.platform !== "iPhone" && (
          <BlurCircle classname={classname ? classname : ""} />
        )}
      <div className={classes.ImageDiv}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default SplitCard;
