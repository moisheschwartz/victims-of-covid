import React from 'react'

export default function AppBar() {

    return (
        <div style={{ padding: "12px 20px", width: "100%", backgroundColor: "teal", display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#fff", fontWeight: "bold", fontSize: "26px" }}>Corona Campaigns</div>
            <a href="https://airtable.com/shreWzFgD0kOVJQUj" target="_blank" className="aButton">Submit New Campaign</a>
        </div>
    )
}
