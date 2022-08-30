import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={classes.Container}>
      <nav>
        <div className={classes.Logo}>
          <Link href="/">
            <img src="./images/logo.png" />
          </Link>
        </div>
        <div className={classes.ReachOut}>
          <a className="flex v-center pointer" href="tel:08170145957">
            <TbPhoneCall /> 08170145957
          </a>
          <a
            className="flex v-center pointer"
            href="https://wa.me/+2348170145957"
            target="__blank"
          >
            <BsWhatsapp /> 08170145957
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
