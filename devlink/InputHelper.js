import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InputHelper.module.css";

export function InputHelper({
  as: _Component = _Builtin.Block,
  text = "Please use your work email.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "a-forminputhelpernew")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
