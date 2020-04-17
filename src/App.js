import React, { useState } from 'react';
import campaignList from './data/campaignList'

import Campaings from './components/campaigns/campaigns'
import CampaingsTotal from './components/campaigns/campaingsTotal'
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
      <CampaingsTotal list={campaignList} />
      <Campaings handleSearch={handleSearch} list={campaignList} searchKeyword={searchKeyword} />
      <FooterBar />
    </div>
  );
}

export default App;
