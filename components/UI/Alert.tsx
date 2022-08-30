import { useEffect } from "react";

import classes from "./Alert.module.scss";

interface IProps {
  message: string;
  type?: string;
  close: any;
}

const Alert: React.FC<IProps> = ({ message, type, close }) => {
  useEffect(() => {
    const timer = setTimeout(() => close(), 100000);
    return () => clearTimeout(timer);
  }, [message, type, close]);

  return (
    <div
      className={`${classes.Container} ${
        type === "error" ? classes.Error : ""
      }`}
    >
      <span className="flex-center pointer" onClick={close}>
        X
      </span>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default Alert;
