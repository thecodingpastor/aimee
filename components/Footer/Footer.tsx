import FooterImage from "./FooterImage";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <FooterImage />
      <img src="/images/logo2.jpg" className={classes.Logo} /> Aimeé Property
      Services | <p>Copyrights &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
