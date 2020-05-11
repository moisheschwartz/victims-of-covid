import React from 'react'
import CampaignImage from './campaignDetails/campaignImage';
import CampaignName from './campaignDetails/campaignName';
import CampaignTotal from './campaignDetails/campaignTotal';
import CampaignLink from './campaignDetails/campaignLink';
import CampaignDonations from './campaignDetails/campaignDonations';
import CampaignPercentage from './campaignDetails/campaignPercentage';
export default function Campaign(props) {

    const { campaign,isLoaded } = props;
    return (
        <div className="campaign">
            <CampaignImage src={campaign.photo} />
            <div className="campaignDetailContainer">
                <CampaignName name={campaign.name} />
                {campaign.total > 0  && <CampaignTotal total={campaign.total} goal={campaign.goal} isLoaded={isLoaded} />}
                {campaign.donations > 0 && <CampaignDonations donations={campaign.donations.toLocaleString() || "N/A"} />}

                <CampaignLink link={campaign.link} />
            </div>
            <CampaignPercentage percentage={campaign.percentage} />



        </div>
    )
}
