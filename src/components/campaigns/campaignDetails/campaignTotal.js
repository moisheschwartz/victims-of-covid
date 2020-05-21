import React from 'react'
import { FaDollarSign, FaBullseye } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default function CampaignName(props) {

    const { total, goal, isLoaded } = props;
    return (
        <>
            <div style={{ padding: "6PX 0" }}>

                <FaIcon>
                    <FaDollarSign />
                </FaIcon>
                {total ? isLoaded ? formatter.format(total) : "Loading..." : "N/A"}
            </div>



            <div style={{ padding: "6PX 0" }}>
                <FaIcon>
                    <FaBullseye />
                </FaIcon>
                {goal ? formatter.format(goal) : "N/A"
                } </div>



        </>
    )
}
