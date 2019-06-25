import React from "react";

function FormGroup3(props) {
  return (
    <div className="form-group">
      <textarea
        required
        class="form-message"
        id="InputComment"
        placeholder=" "
      />
      <label class="form-label">{props.children}</label>
    </div>
  );
}

export default FormGroup3;
