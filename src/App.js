import React, { useState } from 'react';
import campaignList from './data/campaignList'

import Campaigns from './components/campaigns/campaigns'
import CampaignsTotal from './components/campaigns/campaignsTotal'
import AppBar from './components/appBar/appBar';
import FooterBar from './components/footer/footerBar';
function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
  }
  return (
    <div className="App">
      <AppBar />
      <CampaignsTotal list={campaignList} />
      <Campaigns handleSearch={handleSearch} list={campaignList} searchKeyword={searchKeyword} />
      <FooterBar />
    </div>
  );
}

export default App;
