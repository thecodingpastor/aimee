import { MouseEvent, useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BiDonateHeart, BiMessageSquareDetail } from "react-icons/bi";

import classes from "./FloatingNav.module.scss";

const FloatingNav: React.FC = () => {
  const [Active, setActive] = useState("home");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, active: string) => {
    e.preventDefault();
    setActive(active);

    const target = e.currentTarget?.getAttribute("href");
    if (target) {
      const location = document?.querySelector(target) as HTMLElement | null;
      if (location) {
        window.scrollTo({
          left: 0,
          top: location.offsetTop - 70,
        });
      }
    }
  };

  return (
    <div className={classes.Container}>
      <a href="#home" onClick={(e) => handleClick(e, "home")} title="Home">
        <AiOutlineHome className={Active === "home" ? classes.Active : ""} />
      </a>
      <a
        href="#core"
        onClick={(e) => handleClick(e, "core")}
        title="Core Values"
      >
        <BiDonateHeart className={Active === "core" ? classes.Active : ""} />
      </a>
      <a
        href="#services"
        onClick={(e) => handleClick(e, "services")}
        title="Our Services"
      >
        <RiServiceLine
          className={Active === "services" ? classes.Active : ""}
        />
      </a>
      <a
        href="#about"
        onClick={(e) => handleClick(e, "about")}
        title="Our Team"
      >
        <FiUsers className={Active === "about" ? classes.Active : ""} />
      </a>

      <a
        href="#contact"
        onClick={(e) => handleClick(e, "contact")}
        title="Contact Us"
      >
        <BiMessageSquareDetail
          className={Active === "contact" ? classes.Active : ""}
        />
      </a>
    </div>
  );
};

export default FloatingNav;
