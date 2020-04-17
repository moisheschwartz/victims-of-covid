import React from 'react'
import Campaign from './campaign'
import SearchBar from '../other/searchBar';
export default function Campaigns(props) {

    const { list, searchKeyword } = props;
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <SearchBar handleSearch={props.handleSearch} />

                {list.records.filter(r => r.fields.Name.includes(searchKeyword)).map(c => <Campaign campaign={
                    {
                        name: c.fields.Name,
                        total: c.fields.Total,
                        photo: c.fields.Picture[0].url,
                        link: c.fields.Link
                    }
                } />)}
            </div>
        </>
    )
}
