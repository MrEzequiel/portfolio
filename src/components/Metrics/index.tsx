import { Fragment } from "react";

import { Analytics } from "@vercel/analytics/react";
import { MicrosoftClarity } from "./MicrosoftClarity";

export default function Metrics() {
  return (
    <Fragment>
      <Analytics />
      <MicrosoftClarity />
    </Fragment>
  )
}
