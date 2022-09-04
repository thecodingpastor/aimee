import { useRef } from "react";
import useElementOnScreen from "../../../hooks/useElementOnScreen";

import SplitCard from "../../UI/SplitCard";
import classes from "./Iheoma.module.scss";

const Iheoma: React.FC = () => {
  const ref: any = useRef<HTMLDivElement>();
  const ref2: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useElementOnScreen<HTMLDivElement>(ref);
  const onScreen2: boolean = useElementOnScreen<HTMLDivElement>(ref2);

  return (
    <div className={classes.Container}>
      <div
        className={`${classes.First} ${onScreen ? classes.Animate : ""}`}
        ref={ref}
      >
        <SplitCard
          src="./images/ihy.png"
          alt="Precious Amanze"
          // classname={classes.Blur}
        />
      </div>
      <div
        className={`${classes.Second} ${onScreen2 ? classes.Scale : ""}`}
        ref={ref2}
      >
        <h3 className="team-member">Precious Amanze</h3> is a surveyor with
        several years experience in both Commercial and Residential Real Estate.
        She is a graduate of Estate Management from the University of Lagos,
        Nigeria. She holds an MBA in Business Administration from the National
        Open University of Nigeria. She joined Oludemi Jagun Dosumu & co as a
        Real Estate Broker, she moved to Northcourt Real Estate Ltd where she
        held the position of Facilities Manager until the year 2019, when she
        formed Aimee Properties Services. She is an associate member of Nigerian
        Institution of Estate Surveyors and Valuers (NIESV), a Registered
        Surveyor with Estate Surveyors and Valuers Registration Board of Nigeria
        (ESVABON). Precious, is an astute real estate valuer, an entrepreneur
        per excellent, a passionate Real Estate enthusiast. In her spare time
        she enjoys listening to soothing music.
      </div>
    </div>
  );
};

export default Iheoma;
