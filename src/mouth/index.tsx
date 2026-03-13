import React from "react";

import Laugh from "./laugh";
import Smile from "./smile";
import Peace from "./peace";
import Frown from "./frown";
import Scared from "./scared";
import Surprised from "./surprised";

export default function mouth (props: { style: string }): SVGElement {
  const { style } = props;
  switch (style) {
    case "laugh": return <Laugh />;
    case "smile": return <Smile />;
    case "frown": return <Frown />;
    case "scared": return <Scared />;
    case "surprised": return <Surprised />;
    case "peace":
    default:
      return <Peace />;
  }
}
