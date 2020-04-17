import React from 'react'
import { FaLink } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';



export default function CampaignLink(props) {

    const { link } = props;
    return (
        <div className={"campaignLink"}>

            <FaIcon>
                <FaLink />
            </FaIcon>
            <a target="_blank" href={link}>{link}</a>
        </div>
    )
}
