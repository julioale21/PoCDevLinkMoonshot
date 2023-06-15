import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BigOutlinedButton.module.css";

export function BigOutlinedButton({
  as: _Component = _Builtin.Link,

  ctaLink = {
    href: "#",
  },

  ctaText = "Try it now for free.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "a-button", "huge")}
      button={false}
      options={ctaLink}
    >
      <_Builtin.Block tag="div">{ctaText}</_Builtin.Block>
    </_Component>
  );
}
