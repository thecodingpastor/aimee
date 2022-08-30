const Parallax: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        minHeight: "70vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "0 -5rem",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default Parallax;
