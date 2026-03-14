import React from "react";

import Up from "./up";
import UpWoman from "./upWoman";
import Anger from "./anger";
import Sad from "./sad";
import Scared from "./scared";
import Surprised from "./surprised";

export default function eyebrow(props: { style: string }): SVGElement {
  const { style } = props;
  switch (style) {
    case "upWoman": return <UpWoman />;
    case "anger": return <Anger />;
    case "sad": return <Sad />;
    case "scared": return <Scared />;
    case "surprised": return <Surprised />;
    case "up":
    default:
      return <Up />;
  }
}
