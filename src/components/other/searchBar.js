import React from 'react'

export default function SearchBar(props) {

    const { handleSearch } = props;
    return (
            <input onChange={handleSearch} style={{margin: "12px",flexGrow: "12",width:"300px", borderRadius: "12px", border: "1px solid #008080", padding: "12px", outline: "none" }} placeholder="Search Campaigns..." />
        
    )
}
