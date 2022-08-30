import { useRef } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import classes from "./Core.module.scss";

const Core = () => {
  const ref: any = useRef<HTMLDivElement>();
  const ref2: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useElementOnScreen<HTMLDivElement>(ref);
  const onScreen2: boolean = useElementOnScreen<HTMLDivElement>(ref2);
  return (
    <div className={classes.Container} id="core">
      <h1 className="head">Our Core Values</h1>
      <div className={classes.Info}>
        <div
          ref={ref}
          className={`${classes.Left} ${onScreen ? classes.ScrollRight : ""}`}
        >
          <h2 className="funky">Professionalism</h2>
          <p>
            We respect our clients and do our work holding on to the highest
            level of ethics.
          </p>
        </div>
        <div
          ref={ref2}
          className={`${classes.Right} ${onScreen2 ? classes.ScrollLeft : ""}`}
        >
          <h2 className="funky">Excellence</h2>
          <p>
            We ensure we get it right the first time, then we improve every
            other time because we want to be the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Core;
