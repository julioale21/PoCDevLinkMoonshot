import React from "react";
import * as _Builtin from "./_Builtin";
import { BigOutlinedButton } from "./BigOutlinedButton";
import * as _utils from "./utils";
import _styles from "./TextAndButton.module.css";

export function TextAndButton({
  as: _Component = _Builtin.Block,
  bigOutlinedButton,
  title = "Grow your people",
  text = "Join some of the world’s leading companies in helping your team grow, by giving them access to any learning resource in the world through Sunlight",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-3")} tag="div">
      <_Builtin.Heading
        className={_utils.cx(_styles, "component-title")}
        tag="h1"
      >
        {title}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "a-leadtext", "maxwidth750")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
      <BigOutlinedButton />
      <_Builtin.Block tag="div">{bigOutlinedButton}</_Builtin.Block>
    </_Component>
  );
}
