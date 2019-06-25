import React from "react";
import FormSendComponent from "./FormSendComponent";

function FormSendContainer() {
  return <FormSendComponent send={send} />;
}

function send() {
  let form = document.getElementsByClassName("form")[0];
  let formNameValue = form[0].value;
  let formEmailValue = form[1].value;
  let formCommentValue = form[2].value;

  fetch("https://formula-test-api.herokuapp.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formNameValue,
      email: formEmailValue,
      comment: formCommentValue
    })
  });
}

export default FormSendContainer;
