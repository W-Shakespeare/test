import React from "react";

function FormSendComponent({ send }) {
  return (
    <div className="form-send">
      <button onClick={send} className="button_send">
        send
      </button>
    </div>
  );
}

export default FormSendComponent;
