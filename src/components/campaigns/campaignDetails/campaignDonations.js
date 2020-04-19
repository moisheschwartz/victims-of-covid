import React from 'react'
import { FaHandHoldingUsd } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';

export default function CampaignDonations(props) {

    const { donations } = props;
    return (
        <div className="campaignDonations">
            <FaIcon>
                <FaHandHoldingUsd />
            </FaIcon>
            {donations} donors
        </div>
    )
}
