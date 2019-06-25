import React from "react";
import FormString from "./FormString";
import FormGroup3 from "./FormGroup3";

import FormSendContainer from "./FormSendContainer";
function ContactForm() {
  return (
    <div className="contact-form">
      <form className="form">
        <FormString FormGroup1="Name" FormGroup2="Email" />
        <FormGroup3>Message</FormGroup3>
        <FormSendContainer />
      </form>
    </div>
  );
}

export default ContactForm;
