import React from "react";

function FormGroup(props) {
  return (
    <div className="form-group">
      <input
        required
        type="text"
        class="form-text"
        id={props.input}
        placeholder=" "
      />
      <label class="form-label">{props.children}</label>
    </div>
  );
}

export default FormGroup;
