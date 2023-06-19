import React from "react";
import * as _Builtin from "./_Builtin";
import { Input } from "./Input";
import * as _utils from "./utils";
import _styles from "./FormInput.module.css";

export function FormInput({
  as: _Component = _Builtin.Block,
  label = "Work Email",
  formInputHelperNew,
}) {
  return (
    <_Component className={_utils.cx(_styles, "form-input")} tag="div">
      <_Builtin.FormBlockLabel
        className={_utils.cx(_styles, "field-label-2")}
        htmlFor="Demo-Page-Email-2"
      >
        {label}
      </_Builtin.FormBlockLabel>
      <_Builtin.Block tag="div">{formInputHelperNew}</_Builtin.Block>
      <Input />
    </_Component>
  );
}
