import * as React from "react";
import * as Types from "./types";

declare function TextAndButton(props: {
  as?: React.ElementType;
  bigOutlinedButton?: Types.Devlink.Slot;
  title?: React.ReactNode;
  text?: React.ReactNode;
}): React.JSX.Element;
