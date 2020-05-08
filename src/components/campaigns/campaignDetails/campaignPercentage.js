import React from 'react'
import { FaDollarSign, FaBullseye } from 'react-icons/fa';
import FaIcon from '../../other/faIcon';


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default function CampaignPercentage(props) {

    const { percentage } = props;
    return (
        <>
            <div style={{ padding: "6PX 0" }}>
                <div className="progressBar">
                    <div className="progressBarPercent" style={{ width: `${percentage < 100 ? percentage : 100}%` }} ><span className="progressBarPercent">{percentage > 0 ? `${percentage.toFixed()}%` : ""}</span></div>
                </div>
            </div>
        </>
    )
}
