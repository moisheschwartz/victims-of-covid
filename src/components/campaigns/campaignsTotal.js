import React from 'react'

import CountUp from 'react-countup';

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function CampaignsTotal(props) {

    const { list } = props;
    const total = list.records.reduce((a, c) => (a + c.fields.Total), 0)

    return (
        <div style={{ textAlign: "center", fontSize: "30px", margin: "23px 0 " }}>



            Together We Raised:  <br /><span className={"totalRaised"}>{<CountUp
                start={0}
                end={total}
                duration={2}
                separator=","
                decimals={2}
                prefix="$"
            />}</span>
            <br />!מי כעמך ישראל
        </div>
    )
}
