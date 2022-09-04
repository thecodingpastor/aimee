import classes from "./Video.module.scss";

const Video = () => {
  // let isIOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

  // if (!isIOS) {
  //   var canvasVideo = new CanvasVideoPlayer({
  //     videoSelector: ".video",
  //     canvasSelector: ".canvas",
  //     timelineSelector: false,
  //     autoplay: true,
  //     makeLoop: true,
  //     pauseOnClick: false,
  //     audio: false,
  //   });

  //   console.log(canvasVideo);
  // }

  return (
    <div className={classes.Outer} id="home">
      <div className={classes.Container}>
        <div className={classes.Overlay}>
          <div className={classes.ImageContainer}>
            <img src="./images/logo.png" alt="Logo" />
          </div>
          <div className={classes.OtherContainer}>
            Aimee Property Services is an integrated real estate services
            company with core business activities in
            <div className={classes.Specialty}>
              <strong>Facilities Management</strong>
              <strong>Property Management</strong>
              <strong>Property Sales and Letting</strong>
              <strong>Real Estate Consultation/Advisory</strong>
            </div>
            The Company has been established with the passion to bringing real
            estate needs into reality through innovative and stress-free
            solutions. Our vision is to be the most trustworthy real estate
            company in Nigeria.
          </div>
        </div>
        <video className={classes.Video} autoPlay loop muted>
          <source src="aimee.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
