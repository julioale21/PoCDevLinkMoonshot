import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SimpleTitleAndText.module.css";

export function SimpleTitleAndText({
  as: _Component = _Builtin.Block,
  title = "The learning you want.",
  text = "Everyone learns in different ways. Just give your team a Sunlight budget and they can use it to access any learning in the world.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "a-wrapper", "aligncenter")}
      tag="div"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading-2")} tag="h2">
        {title}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "a-leadtext", "maxwidth750")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
