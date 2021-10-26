import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/contact-us.scss";
export default function ContactUs() {
  return (
    <div id="contact-us">
      <div className="my-container">
        <Heading>Get in touch</Heading>
        <SubHeading>
          Venenatis dignissim massa ac, sodales malesuada quam. Aliquam in fermentum
          metus. Donec in mauris arcu.
        </SubHeading>
        <form className="contact-form">
          <div className="contact-grid">
            <input className="form-input" required type="text" placeholder="Name" />
            <input className="form-input" required type="email" placeholder="Email" />
            <input className="form-input" required type="phone" placeholder="Phone" />
            <textarea
              placeholder="Comment"
              className="form-input comment"
              rows={4}
            ></textarea>
          </div>
          <input className="submit" type="submit" value="REQUEST A CALL BACK" />
        </form>{" "}
      </div>
    </div>
  );
}
