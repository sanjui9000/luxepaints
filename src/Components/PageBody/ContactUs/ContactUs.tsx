import React from "react";

import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us__empty-grid" />

      <div className="contact-us__grid-body">
        <div className="contact-us__element">
          <input placeholder="First name" name="fname" type="text" required />
        </div>

        <div className="contact-us__element">
          <input placeholder="Last name" name="lname" type="text" required />
        </div>

        <div className="contact-us__element">
          <input placeholder="Email" name="email" type="email" required />
        </div>

        <div className="contact-us__element">
          <input placeholder="Phone" name="phone" type="number" required />
        </div>

        <div className="contact-us__element">
          <input placeholder="Country" name="country" type="text" required />
        </div>

        <div className="contact-us__element">
          <input placeholder="Company" name="company" type="text" required />
        </div>

        <div className="contact-us__element contact-us__element__details">
          <label>How can we work together?</label>
          <textarea cols={40} rows={6} name="details" required />
        </div>

        <div className="contact-us__element contact-us__element__submit">
          <button className="">
            <p>Submit</p>
          </button>
        </div>
      </div>

      <div className="contact-us__empty-grid" />
    </div>
  );
};
