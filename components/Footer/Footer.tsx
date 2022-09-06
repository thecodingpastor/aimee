import FooterImage from "./FooterImage";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <FooterImage />
      <div className={classes.Logo}>
        <img src="/images/footer-logo.png" alt="Footer Logo" />
        <span>Copyrights &copy; {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
