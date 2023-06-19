import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Input.module.css";

export function Input({ as: _Component = _Builtin.FormTextInput, name }) {
  return (
    <_Component
      className={_utils.cx(_styles, "a-sandboxforminput", "left")}
      autoFocus={false}
      maxLength={256}
      name="Demo-Page-Email-2"
      data-name="Demo Page Email 2"
      type="text"
      disabled={false}
      required={true}
      id={name}
    />
  );
}
