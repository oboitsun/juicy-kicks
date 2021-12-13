import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/contact-us.scss";
import Line from "./Line";
export default function ContactUs() {
  return (
    <div id="contact-us">
      <div className="my-container relative">
        <div className="w-1/2 lg:w-3/4 absolute top-0 left-3/4">
          <Line />
        </div>
        <div className="w-1/2 lg:w-2/3 absolute top-10 left-3/4">
          <Line delay={1} />
        </div>
        <Heading>Get in touch</Heading>
        <SubHeading>
          We are looking for partnerships at the moment to grow our project - if you are
          interested please reach out to us.
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
