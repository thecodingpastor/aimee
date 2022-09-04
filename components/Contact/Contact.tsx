import { useState } from "react";

import emailjs from "@emailjs/browser";

import Input from "../Form/Input";
import Button from "../Form/Button";
import Spin from "../UI/Spin";

import classes from "./Contact.module.scss";
import Toast from "../UI/Alert";
import Parallax from "../Parallax/Parallax";

const Contact: React.FC = () => {
  const [Alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const [Values, setValues] = useState({
    FullName: "",
    Email: "",
    Message: "",
  });

  const [Loading, setLoading] = useState(false);

  const Valid =
    /^\S+@\S+\.\S+$/.test(Values.Email.trim()) &&
    Values.FullName.trim().length > 2 &&
    Values.Message.trim().length > 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_kqi954o",
        "template_59m9og6",
        {
          sender: Values.FullName,
          email: Values.Email,
          message: Values.Message,
        },
        "zccwfFmXeUHihlhOh"
      )
      .then(
        () => {
          setLoading(false);
          setValues({ FullName: "", Email: "", Message: "" });
          setAlert({
            type: "success",
            message:
              "Your message has been sent to the admin. You will be contacted, if need be, via the email address you provided.",
          });
        },
        (error) => {
          setLoading(false);
          setAlert({
            type: "error",
            message: error.text,
          });
        }
      );
  };

  return (
    <div className={classes.Container}>
      {Alert.message && (
        <Toast
          message={Alert.message}
          type={Alert.type}
          close={() => setAlert({ message: "", type: "" })}
        />
      )}
      <Parallax img="./images/bg1.jpeg" />
      <div style={{ backgroundColor: "white" }} id="contact">
        <div style={{ textAlign: "right" }}>
          <h1 className="head">We'd love to hear from you!</h1>
        </div>
        <div className={classes.Contact}>
          <form onSubmit={onSubmit} className={classes.ContactForm}>
            <h4 className="text-center text-pry">
              We will get back to you between 2 - 48 hours
            </h4>
            <Input
              name="FullName"
              id="FullName"
              placeholder="Your Full Name"
              required
              border
              onChange={handleChange}
              value={Values.FullName}
              label="Full Name: 3 or more characters"
            />
            <Input
              type="email"
              name="Email"
              id="Email"
              required
              placeholder="Email"
              border
              onChange={handleChange}
              value={Values.Email}
              label="Email: Must be a valid email"
            />
            <Input
              element="textarea"
              name="Message"
              placeholder="Your message"
              border
              value={Values.Message}
              onChange={handleChange}
              label="Message: 5 or more characters"
            />
            {Valid ? (
              <div className="flex-center">
                {!Loading ? (
                  <Button text="Send Message" type="submit" fade />
                ) : (
                  <Spin />
                )}
              </div>
            ) : (
              <div className="flex-center">
                <p className={`${classes.Text} fade`}>
                  Fill form to see submit button
                </p>
              </div>
            )}
          </form>
          <div className={classes.ContactImage}>
            <img src="./images/customer-service.png" alt="contact-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
