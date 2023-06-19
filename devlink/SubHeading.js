import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubHeading.module.css";

export function SubHeading({ as: _Component = _Builtin.Block, text = {} }) {
  return (
    <_Component
      className={_utils.cx(_styles, "a-leadtext", "maxwidth750")}
      tag="div"
      {...text}
    >
      {
        "We'd love to see how we can help. Please fill in the form bellow and we'll be in touch with you as soon as possible."
      }
    </_Component>
  );
}
