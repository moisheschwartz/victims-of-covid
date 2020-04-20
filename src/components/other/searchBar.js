import React from 'react'

export default function SearchBar(props) {

    const { handleSearch } = props;
    return (
        <div style={{ width: "80%", height: "40px", marginBottom: "20px" }}>
            <input onChange={handleSearch} style={{ width: "100%", height: "100%", borderRadius: "12px", border: "1px solid #008080", padding: "12px", outline: "none" }} placeholder="Search Campaigns..." />
        </div>
    )
}
