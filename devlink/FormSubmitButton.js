import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormSubmitButton.module.css";

export function FormSubmitButton({
  as: _Component = _Builtin.FormButton,
  submit = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "a-sandboxformbutton")}
      type="submit"
      value="Submit"
      data-wait="Please wait..."
      {...submit}
    />
  );
}
