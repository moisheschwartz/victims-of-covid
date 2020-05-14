import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import ReactGA from "react-ga";

export default function CampaignLink(props) {
  const { link } = props;
  const [copied, setCopied] = useState(false);
  return (
    <div className={"campaignLink"}>
      <ReactGA.OutboundLink eventLabel={link} to={link} target="_blank">
        {"Donate"}
      </ReactGA.OutboundLink>

      <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
        <div className={"copyLink"}>{copied ? "Copied" : "Copy Link"}</div>
      </CopyToClipboard>
    </div>
  );
}
