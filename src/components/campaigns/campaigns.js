import React, { useState} from 'react'
import Campaign from './campaign'
import SearchBar from '../other/searchBar';
export default function Campaigns(props) {

    const { list, searchKeyword } = props;

    const [order,setOrder] = useState("sort-htl")

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <div style={{columnGap: "12px", display:"flex", width:"80%", flexWrap: "wrap"}}>
                    <SearchBar handleSearch={props.handleSearch} />
                    <select style={{ flexGrow: "1", margin: "12px",borderRadius: "12px", border: "1px solid #008080", padding: "12px", outline: "none", minWidth:"200px" }} onChange={(e) => setOrder(e.target.value)}>
                        <option value="sort-htl" >Sort By: Date Added - Newest First</option>
                        <option value="sort-lth" >Sort By: Date Added - Oldest First</option>
                        <option value="total-lth">Sort By: Total - Low to high</option>
                        <option value="total-htl" >Sort By: Total - High to low</option>
                        <option value="goal-lth" >Sort By: Goal Reached - Low to high</option>
                        <option value="goal-htl" >Sort By: Goal Reached - High to low</option> 
                    </select>
                </div>
              
                <div style={{ width: "100%", textAlign: "center", marginTop: "20px"}}>{list.records.length} Campaigns</div>

                {list.records.filter(r => r.fields.Name.toLowerCase().includes(searchKeyword.toLowerCase()) || (r.fields.OtherName && r.fields.OtherName.toLowerCase().includes(searchKeyword.toLowerCase()))).sort((a, b) => {
                    
                    switch(order){
                        case "total-htl" : 
                        return b.fields.Total > a.fields.Total ?  1 :  -1
                        case "total-lth":
                            return b.fields.Total > a.fields.Total ? -1 : 1
                        case "sort-lth":
                            return a.fields.SortOrder < b.fields.SortOrder ? -1 : 1;
                        case "sort-htl":
                            return a.fields.SortOrder > b.fields.SortOrder ? -1 : 1;
                        case "goal-lth":
                            return b.fields.Total / b.fields.Goal > a.fields.Total / a.fields.Goal ? -1 : 1;
                        case "goal-htl":
                            let percentageA = a.fields.Goal ? (a.fields.Total / a.fields.Goal * 100) : 0;
                            let percentageB = b.fields.Goal ? (b.fields.Total / b.fields.Goal * 100) : 0;
                            return percentageA > percentageB && a.fields.Goal ?  -1 : 1
                        // default:
                        //     return b.fields.Total > a.fields.Total ? -1 : 1

                    }
                                        
                }).map(c => <Campaign key={c.fields.Link} campaign={
                    {
                        name: c.fields.Name,
                        total: c.fields.Total,
                        goal: c.fields.Goal,
                        photo: c.fields.Picture[0].thumbnails.large.url,
                        link: c.fields.Link,
                        donations: c.fields.Donations,
                        percentage: c.fields.Goal ? (c.fields.Total / c.fields.Goal) * 100 : 0
                    }
                } />)}
            </div>
        </>
    )
}
