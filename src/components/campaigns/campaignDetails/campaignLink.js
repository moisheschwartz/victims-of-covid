import React, { useEffect } from 'react'
import { FaLink } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';
import ReactGA from 'react-ga';



export default function CampaignLink(props) {

    const { link } = props;

    useEffect(() => {
        ReactGA.initialize('UA-163913932-1');

    });
    return (
        <div className={"campaignLink"}>

            <FaIcon>
                <FaLink />
            </FaIcon>
            <ReactGA.OutboundLink eventLabel={link} to={link} target="_blank">
                {link}            </ReactGA.OutboundLink>

        </div>
    )
}
