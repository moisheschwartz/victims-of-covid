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
                { <CampaignTotal total={campaign.total} goal={campaign.goal} isLoaded={isLoaded} />}
                { <CampaignDonations donations={campaign.donations.toLocaleString()} />}

                <CampaignLink link={campaign.link} />
            </div>
            <CampaignPercentage percentage={campaign.percentage} />



        </div>
    )
}
