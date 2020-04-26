import React from 'react'
import Campaign from './campaign'
import SearchBar from '../other/searchBar';
export default function Campaigns(props) {

    const { list, searchKeyword } = props;
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <SearchBar handleSearch={props.handleSearch} />
                <div style={{ width: "100%", textAlign: "center" }}>{list.records.length} Campaigns</div>

                {list.records.filter(r => r.fields.Name.toLowerCase().includes(searchKeyword.toLowerCase())).map(c => <Campaign key={c.fields.Link} campaign={
                    {
                        name: c.fields.Name,
                        total: c.fields.Total,
                        goal: c.fields.Goal,
                        photo: c.fields.Picture[0].thumbnails.large.url,
                        link: c.fields.Link,
                        donations: c.fields.Donations,
                    }
                } />)}
            </div>
        </>
    )
}
