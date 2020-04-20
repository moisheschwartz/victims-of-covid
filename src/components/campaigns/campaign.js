import React from 'react'
import Campaigns from './campaigns';
import CampaignImage from './campaignDetails/campaignImage';
import CampaignName from './campaignDetails/campaignName';
import CampaignTotal from './campaignDetails/campaignTotal';
import CampaignLink from './campaignDetails/campaignLink';
import CampaignDonations from './campaignDetails/campaignDonations';
export default function Campaign(props) {

    const { campaign } = props;
    return (
        <div className="campaign">
            <CampaignImage src={campaign.photo} />
            <div className="campaignDetailContainer">
                <CampaignName name={campaign.name} />
                <CampaignTotal total={campaign.total} />
                <CampaignDonations donations={campaign.donations.toLocaleString() || "N/A"} />

                <CampaignLink link={campaign.link} />
            </div>


        </div>
    )
}
