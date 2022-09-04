import Parallax from "../Parallax/Parallax";
import Iheoma from "./Iheoma/Iheoma";
import Prof from "./Prof/Prof";
import Vitalis from "./Vitalis/Vitalis";

const About = () => {
  return (
    <div>
      <Parallax img="./images/bg3.jpg" />
      <div id="about"></div>
      <div style={{ backgroundColor: "white", paddingBottom: "2rem" }}>
        <h1 className="head">Our Team</h1>
        <Iheoma />
        <Prof />
        <Vitalis />
      </div>
    </div>
  );
};

export default About;
