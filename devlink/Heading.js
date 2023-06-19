import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Heading.module.css";

export function Heading({
  as: _Component = _Builtin.Heading,
  text = "Book a call with us.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "new-heading")} tag="h1">
      {text}
    </_Component>
  );
}
