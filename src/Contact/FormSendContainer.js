import React from "react";
import FormSendComponent from "./FormSendComponent";

function FormSendContainer() {
  return <FormSendComponent send={send} />;
}

function send() {
  let formNameValue = document.getElementById("InputName").value;
  let formEmailValue = document.getElementById("InputEmail").value;
  let formCommentValue = document.getElementById("InputComment").value;

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
