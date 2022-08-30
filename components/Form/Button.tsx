import classes from "./Button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fade?: boolean;
  style?: object;
  children?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  handleClick?: any;
}

const Button: React.FC<IProps> = (props) => {
  return (
    <button
      className={`${classes.Button} ${props.fade ? "fade" : ""}`}
      style={props.style}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
