import { useRef, useEffect } from "react";

import classes from "./Input.module.scss";

type IProps = {
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  border?: boolean;
  autoComplete?: string;
  id?: string;
  value?: string;
  style?: any;
  innerStyle?: any;
  onChange?: any;
  className?: string;
  label?: string;
  element?: string;
  options?: any;
  defaultValue?: any;
};

const Input: React.FC<IProps> = ({
  type,
  name,
  placeholder,
  required,
  id,
  autoComplete,
  onChange,
  value,
  style,
  className,
  label,
  element,
  border,
  innerStyle,
  options,
  defaultValue,
}) => {
  // const textareaRef = useRef(null);

  // useEffect(() => {
  //   textareaRef.current?.style.height = "1rem";
  //   const scrollHeight = textareaRef.current?.scrollHeight;
  //   textareaRef.current?.style.height = scrollHeight + "px";
  // }, [value]);

  // const handleScrollClear = () => {
  //   textareaRef?.current?.style.height = "1rem";
  // };

  let elementToReturn;
  if (element === "textarea") {
    elementToReturn = (
      <textarea
        name={name}
        id={id || ""}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required || false}
        autoComplete={autoComplete || "off"}
        className={border ? classes.border : ""}
        style={innerStyle}
      />
    );
  } else {
    elementToReturn = (
      <input
        className={`${border ? classes.border : ""} ${classes.Input}`}
        type={type || "text"}
        name={name || ""}
        id={id || ""}
        required={required || false}
        autoComplete={autoComplete || "off"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
  return (
    <div
      className={`${className ? className : ""} ${classes.InputContainer}`}
      style={style}
    >
      {elementToReturn}
      {label && (
        <label htmlFor={id || ""} className={classes.Label}>
          {element === "autotextarea" && !value
            ? ""
            : element !== "select"
            ? label
            : value
            ? label
            : ""}
        </label>
      )}
    </div>
  );
};

export default Input;
