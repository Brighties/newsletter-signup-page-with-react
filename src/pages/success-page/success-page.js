import "./success-page.css";
import listIcon from "../../images/icon-list.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const SuccessPage = () => {
  let emailSpanElement = useRef();

  useEffect(() => {
    let emailAddress = localStorage.getItem("email");
    emailSpanElement.current.textContent = " " + emailAddress + ". "; // add spaces for good text formatting
  });
  return (
    <section className="subscription-success-container">
      <figure>
        <img className="success-page-icon" src={listIcon} alt="" />
      </figure>
      <h1 className="subscription-success-header">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <span
          ref={emailSpanElement}
          className="subscribed-email-address"
        ></span>
        Please open it and click the button inside to confirm your subscription.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="dismiss-button">Dismiss message</button>
      </Link>
    </section>
  );
};
export default SuccessPage;
