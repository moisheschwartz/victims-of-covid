import React from 'react'
import { FaDollarSign, FaBullseye } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default function CampaignName(props) {

    const { total, goal } = props;
    return (
        <>
            <div style={{ padding: "6PX 0" }}>

                <FaIcon>
                    <FaDollarSign />
                </FaIcon>
                {formatter.format(total)}
            </div>
            <div style={{ padding: "6PX 0" }}>

                <FaIcon>
                    <FaBullseye />
                </FaIcon>
                {goal && formatter.format(goal)}
            </div>
        </>
    )
}
