import React from 'react'
import { FaDollarSign } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default function CampaignName(props) {

    const { total } = props;
    return (
        <div style={{ padding: "6PX 0" }}>

            <FaIcon>
                <FaDollarSign />
            </FaIcon>
            {formatter.format(total)}
        </div>
    )
}
