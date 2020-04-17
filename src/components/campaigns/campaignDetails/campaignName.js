import React from 'react'
import { FaUser } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';

export default function CampaignName(props) {

    const { name } = props;
    return (
        <div className="campaignName">
            <FaIcon>
                <FaUser />
            </FaIcon>
            {name}
        </div>
    )
}
