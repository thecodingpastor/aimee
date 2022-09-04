import classes from "./Test.module.scss";

// const Parallax: React.FC<IProps> = ({ img }) => {
const Test: React.FC = () => {
  return (
    <div className={classes.Container} id="test">
      <div
        className={classes.sticky}
        style={{ backgroundImage: "url(/images/bg2.jpg)" }}
        //  backgroundImage: `url(${img})`,
      ></div>
      <div className="section-header">
        <div className="header-text">
          <h2>USES POSITION:STICKY</h2>
          <h3>on images which are hidden behind the solid panels</h3>
        </div>
      </div>
      <div className="section dark">
        <h2>By spite about do of do allow blush</h2>

        <p>
          Unpleasant nor diminution excellence apartments imprudence the met
          new. Draw part them he an to he roof only. Music leave say doors him.
          Tore bred form if sigh case as do. Staying he no looking if do
          opinion. Sentiments way understood end partiality and his.
        </p>

        <p>
          She literature discovered increasing how diminution understood. Though
          and highly the enough county for man. Of it up he still court alone
          widow seems. Suspected he remainder rapturous my sweetness. All vanity
          regard sudden nor simple can. World mrs and vexed china since after
          often.
        </p>

        <p>
          We diminution preference thoroughly if. Joy deal pain view much her
          time. Led young gay would now state. Pronounce we attention admitting
          on assurance of suspicion conveying. That his west quit had met till.
          Of advantage he attending household at do perceived. Middleton in
          objection discovery as agreeable. Edward thrown dining so he my around
          to.
        </p>

        <p>
          On no twenty spring of in esteem spirit likely estate. Continue new
          you declared differed learning bringing honoured. At mean mind so upon
          they rent am walk. Shortly am waiting inhabit smiling he chiefly of
          in. Lain tore time gone him his dear sure. Fat decisively estimating
          affronting assistance not. Resolve pursuit regular so calling me. West
          he plan girl been my then up no.
        </p>

        <p>
          Put all speaking her delicate recurred possible. Set indulgence
          inquietude discretion insensible bed why announcing. Middleton fat two
          satisfied additions. So continued he or commanded household smallness
          delivered. Door poor on do walk in half. Roof his head the what.
        </p>
      </div>
    </div>
  );
};

export default Test;
