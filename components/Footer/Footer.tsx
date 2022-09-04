import FooterImage from "./FooterImage";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <FooterImage />
      <div className={classes.Logo}>
        {/* <img src="/images/logo2.jpg" className={classes.Logo} /> */}
        <img src="/images/footer-logo.png" />
        <span>
          Copyrights &copy; {new Date().getFullYear()}
          {/* aimeé Property Services | Copyrights &copy; {new Date().getFullYear()} */}
        </span>
      </div>
    </div>
  );
};

export default Footer;
