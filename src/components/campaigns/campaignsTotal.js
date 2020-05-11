import React from 'react'

import CountUp from 'react-countup';


export default function CampaignsTotal(props) {

    const { list,isLoaded } = props;
    const total = list.records.reduce((a, c) => (a + c.fields.Total), 0);
    const totalDonations = list.records.reduce((a, c) => (a + c.fields.Donations), 0)

    return (
        <div style={{ textAlign: "center", fontSize: "30px", margin: "23px 0 " }}>



            Together We Raised:  <br /><span className={"totalRaised"}>{<CountUp
                start={isLoaded ?  16500000: 0}
                end={isLoaded ? total : total}
                duration={2}
                separator=","
                decimals={2}
                prefix="$"
            />}</span>
            <br />
            <b style={{ color: "teal", fontSize: "30px" }}>{totalDonations.toLocaleString()} Donations!</b>
            <br />!מי כעמך ישראל
        </div>
    )
}
