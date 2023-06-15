import * as React from "react";
import * as Types from "./types";

declare function PeopleCard(props: {
  as?: React.ElementType;
  imageUrl?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
}): React.JSX.Element;
