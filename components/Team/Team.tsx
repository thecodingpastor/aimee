import Parallax from "../Parallax/Parallax";
import Iheoma from "./Iheoma/Iheoma";
import Prof from "./Prof/Prof";
import Vitalis from "./Vitalis/Vitalis";

const About = () => {
  return (
    <div>
      <div id="about"></div>
      <h1 className="head">Our Team</h1>
      <Iheoma />
      <Prof />
      <Vitalis />
      <Parallax img="./images/pool.jpeg" />
    </div>
  );
};

export default About;
