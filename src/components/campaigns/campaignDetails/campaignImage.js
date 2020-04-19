import React from 'react'
export default function CampaignImage(props) {

    const { src } = props;
    return (
        <div className="campaignImage">
            <img style={{ maxWidth: "100%", "maxHeight": "100%", display: "block", margin: "0 auto" }} src={src} />
        </div>
    )
}
