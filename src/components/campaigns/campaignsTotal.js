import React from 'react'


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function CampaignsTotal(props) {

    const { list } = props;
    const total = list.records.reduce((a, c) => (a + c.fields.Total), 0)

    return (
        <div style={{ textAlign: "center", fontSize: "30px", margin: "23px 0 " }}>
            Together We Raised:  <br /><span className={"totalRaised"}>{formatter.format(total)}</span>
            <br />!מי כעמך ישראל
        </div>
    )
}