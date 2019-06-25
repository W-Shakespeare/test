import React from "react";
import FormGroup from "./FormGroup";

function FormString({ FormGroup1, FormGroup2 }) {
  return (
    <div className="form-string">
      <FormGroup>{FormGroup1}</FormGroup>
      <FormGroup>{FormGroup2}</FormGroup>
    </div>
  );
}

export default FormString;
