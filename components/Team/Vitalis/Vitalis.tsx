import { useRef } from "react";
import useElementOnScreen from "../../../hooks/useElementOnScreen";
import SplitCard from "../../UI/SplitCard";
import classes from "./Vitalis.module.scss";

const Vitalis: React.FC = () => {
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
          src="./images/vitalis.png"
          alt="Anieze Vitalis"
          // classname={classes.Blur}
        />
      </div>
      <div
        className={`${classes.Second} ${onScreen2 ? classes.Scale : ""}`}
        ref={ref2}
      >
        <h3 className="team-member">Vitalis Anieze</h3> is a Stockbroker and a
        professional accountant with expertise in strategic financial
        management, corporate reporting, treasury management, re-structuring,
        recapitalization, investment banking, taxation, budgeting and budgetary
        controls of over 20 years professional experience. He joined Aviation
        Development Company PLC, in 2005,as an accountant,a position he held
        till he left in 2007. In 2007 he was engaged by Adonai Stockbrokers
        limited as an accountant to restructure and manage all group financial
        operations. In 2009, he moved to propertygate Development and Investment
        PLC as Senior finance officer, where he rose to the position of Head of
        finance and Accounts within an interval of 13 years. In 2022, he moved
        to Enugu state water corporation as Executive Director Finance and
        Accounts. He is a graduate of Accountancy, University of Lagos Nigeria.
        He is a member of Institute of chartered Accountants of Nigeria, an
        associate member of the chartered institute of stockbrokers and an
        Authorized dealing clerk of the Nigerian Stock Exchange. He is happily
        married with children. He enjoys intellectual engagements. He currently
        serves as a financial advisor (non- executive) to Aimee property
        services, where he provides, financial, tax, management advisory
        services to the firm.
      </div>
    </div>
  );
};

export default Vitalis;
