import { useRef } from "react";
import useElementOnScreen from "../../../hooks/useElementOnScreen";
import SplitCard from "../../UI/SplitCard";
import classes from "./Prof.module.scss";

const Prof: React.FC = () => {
  const ref: any = useRef<HTMLDivElement>();
  const ref2: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useElementOnScreen<HTMLDivElement>(ref);
  const onScreen2: boolean = useElementOnScreen<HTMLDivElement>(ref2);
  return (
    <div className={classes.Container}>
      <div
        className={`${classes.Second} ${onScreen2 ? classes.Scale : ""}`}
        ref={ref2}
      >
        <h3 className="team-member">Prof. A.C. Otegulu</h3> is the Chairman of
        Research Advisory Board of Aimee Property Services. One time head of
        Department, Department of Estate Management. He obtained Bachelor of
        Science degree in Estate Management from the University of Nigeria, MSc
        Construction Management from the University of Lagos, and a Ph.D. in
        Environmental Management from the Enugu State University, Certificate
        Course in Environmental Valuation from Cranfield University, U.K,
        Certificate Course on Compensation/Resettlement from World Bank/Lamarta
        Training. He has authored/co-authored several research papers, journals
        and books on real estate economics, plant/equipment and environmental
        valuation, property valuation and real estate investment analysis. He is
        a member of the editorial board of several professional and academic
        journals. Prof. Otegbulu is a Fellow with Nigerian Institution of Estate
        Surveyor and Valuers (NIESV), Registered Surveyor with Estate Surveyor
        and Valuers Registration Board of Nigeria (ESVABON), Associate Member
        Institute of Construction Industry Arbitrators. He guides the research
        endeavors of Aimee Property Services, contributing his wealth of
        knowledge and experience in ensuring each research output is
        professionally and ethically executed and suitable for the use of the
        commissioners
      </div>
      <div
        className={`${classes.First} ${onScreen ? classes.Animate : ""}`}
        ref={ref}
      >
        <SplitCard
          src="./images/prof.png"
          alt="Prof. A.C. Otegulu"
          // classname={classes.Blur}
        />
      </div>
    </div>
  );
};

export default Prof;
