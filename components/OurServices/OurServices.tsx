import React, { useRef } from "react";

import useElementOnScreen from "../../hooks/useElementOnScreen";
import Parallax from "../Parallax/Parallax";

import classes from "./OurServices.module.scss";

const OurServices: React.FC = () => {
  const ref: any = useRef<HTMLDivElement>();
  const ref2: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useElementOnScreen<HTMLDivElement>(ref);
  const onScreen2: boolean = useElementOnScreen<HTMLDivElement>(ref2);

  return (
    <div className={classes.Container} id="services">
      <div style={{ textAlign: "right" }}>
        <h1 className="head">Our Services</h1>
      </div>
      <div>
        <h2 className="funky text-center text-pry">Facilities Management</h2>
        <div className={classes.Text}>
          Our Facilities management services provide a wholistic approach to
          quality and cost-effective support services to our clients – both
          individuals and corporations. Scope of Services under facilities
          management include the following:
          <div className={classes.SoftAndHard}>
            <div
              className={`${classes.Left} ${onScreen ? classes.Slide : ""}`}
              ref={ref}
            >
              <h2 className="text-center">Soft Services</h2>
              <div className={classes.Soft}>
                <p>Security</p>
                <p>Landscaping</p>
                <p>Cleaning</p>
                <p>Waste Management</p>
                <p>Health & Safety Services</p>
                <p>Fumigation and pest control</p>
              </div>
            </div>
            <div
              className={`${classes.Right} ${onScreen2 ? classes.Slide : ""}`}
              ref={ref2}
            >
              <h2 className="text-center">Hard Services </h2>
              <div className={classes.Hard}>
                <p>Generator maintenance</p>
                <p>Electrical services</p>
                <p>Building inspections</p>
                <p>General building maintenance</p>
                <p>Fire and emergency equipment</p>
                <p>Air conditioning services (common areas)</p>
                <p>Water treatment and borehole services (Plumbing)</p>
              </div>
            </div>
          </div>
        </div>
        <Parallax img="./images/bg2.jpg" />

        <h2
          className="funky text-center text-pry"
          style={{ marginTop: "2rem" }}
        >
          Property Management
        </h2>
        <div>
          Aimee Property Services offers full property management services on
          different property types namely; retail, commercial and residential.
          Our approach adopts a proactive strategy to unlock the latent and
          sustainable values of our clients’ properties. Scope of Services under
          property management include the following:
          <div className={classes.Scope}>
            <p>Operational Management</p>
            <p>Client Reporting and Meetings</p>
            <p>Tenant Liaison and Administration</p>
            <p>Lease Management and Administration</p>
            <p>General Building Maintenance Management</p>
            <p>Property Accounting, Financial Reporting and Administration</p>
          </div>
        </div>

        <h2
          className="funky text-center text-pry"
          style={{ marginTop: "2rem" }}
        >
          Property Letting & Sales
        </h2>
        <p className="mt-2">
          Given our knowledge of the property market, coupled with our network
          of agents, we are strategically positioned to assist our clients in
          acquiring or disposing their properties. Our letting and sales
          strategy are property specific as we ensure clients’ satisfaction via
          cutting edge innovations.
        </p>
      </div>
      <div className={classes.StandOut}>
        <h1 className="text-center">Why We Stand Out</h1>
        <p>Well established and enduring track record</p>
        <p>
          Best of Breed Systems, Processes and Procedures (IFMA & RICS standard)
        </p>
        <p>Full-service offering</p>
        <p>Transparent processes and procedures</p>
      </div>
      <Parallax img="./images/bg1.jpeg" />
    </div>
  );
};

export default OurServices;
