import React, { useState,useEffect } from 'react';

import oldCampaignList from './data/campaignList'



import Campaigns from './components/campaigns/campaigns'
import CampaignsTotal from './components/campaigns/campaignsTotal'
import AppBar from './components/appBar/appBar';
import FooterBar from './components/footer/footerBar';
function App() {
  const [campaignList, setCampaignList] = useState(oldCampaignList)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    fetch("https://storage.googleapis.com/coronacampaigns-9d128.appspot.com/records.json")
      .then(res => res.json())
      .then(
        (result) => {
          setCampaignList(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      
      )
  }, [])

  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
  }
  return (
      <div className="App">
        <AppBar />
        <CampaignsTotal isLoaded={isLoaded} list={campaignList} />
        <Campaigns isLoaded={isLoaded} handleSearch={handleSearch} list={campaignList} searchKeyword={searchKeyword} />
        <FooterBar />
      </div>

  );
}

export default App;
