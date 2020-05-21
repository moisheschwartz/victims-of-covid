import React from 'react'
import { FaDonate } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';

export default function CampaignDonations(props) {

    const { donations } = props;
    return (
        <div className="campaignDonations">
            <FaIcon>
                <FaDonate />
            </FaIcon>
            {donations != 0 ? `${donations} donors` : "N/A"}
        </div>
    )
}
