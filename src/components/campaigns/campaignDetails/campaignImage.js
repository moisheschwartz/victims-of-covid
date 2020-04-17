import React from 'react'
export default function CampaignImage(props) {

    const { src } = props;
    return (
        <div style={{ maxWidth: "100%", height: "265px", backgroundColor: "#673ab72e" }}>
            <img style={{ maxWidth: "100%", "maxHeight": "100%", display: "block", margin: "0 auto" }} src={src} />
        </div>
    )
}
