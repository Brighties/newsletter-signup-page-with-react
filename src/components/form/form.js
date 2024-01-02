import Button from "../button/button";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  // set a state on the emailInputField, the initial state is false. . .
  const [emailInputFieldState, setEmailInputState] = useState(false);

  // the useRef hook is use to target JSX elements and add a reference to them instead of using e.g. document.querySelector...
  let emailInputField = useRef();
  let popupMessage = useRef();

  const handleButtonClick = () => {
    // if the emailInputFieldState is False && the popMessage exists, that is, it has being rendered...
    if (!emailInputFieldState && popupMessage.current) {
      popupMessage.current.classList.add("visible");
      emailInputField.current.classList.add("invalid-email-address");
    }
  };
  useEffect(() => {
    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmailValue = () => {
      let emailAddress = emailInputField.current.value;
      let isEmailValid = EMAIL_REGEX.test(emailAddress); // this will return a boolean

      popupMessage.current.classList.remove("visible");
      emailInputField.current.classList.remove("invalid-email-address");
      if (isEmailValid) {
        let emailAddress = emailInputField.current.value;
        localStorage.setItem("email", emailAddress); // use localStorage to store the email address
        setEmailInputState(true); // set the emailInputFieldState to true.
        console.log(localStorage.getItem("email"));
      }
    };
    const currentEmailInputField = emailInputField.current;

    if (emailInputField) {
      currentEmailInputField.addEventListener("input", handleEmailValue);
    }

    return () => {
      if (emailInputField) {
        currentEmailInputField.removeEventListener("input", handleEmailValue);
      }
    };
  }, [emailInputFieldState]);

  return (
    <form action="" className="newsletter-page-form">
      <label htmlFor="email-input-field">Email Address:</label>
      <input
        ref={emailInputField}
        type="email"
        id="email-input-field"
        name="email"
        autoComplete="email"
        placeholder="email@company.com"
      />
      <div ref={popupMessage} className="popup-message">
        <span className="popup-message-content">valid email required</span>
      </div>

      <Link
        to={emailInputFieldState ? "/success" : "/"}
        style={{ textDecoration: "none" }}
      >
        <Button onClick={handleButtonClick} />
      </Link>
    </form>
  );
};

export default Form;
