import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './context/Web3Context';
import { DonationProvider } from './context/DonationContext.jsx';
import Navbar from './components/Navbar';
import Home from './pages/index';
import Create from './pages/create';
import CreateCampaign from './pages/CreateCampaign.jsx';
import Profile from './pages/Profile.jsx';
// import CampaignDetail from './pages/CampaignDetail.jsx';
function App() {
  return (
    <Web3Provider>
              ₹<DonationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* <Navbar /> */}
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateCampaign />} />
                        <Route path="/profile" element={<Profile />} />
                                  </Routes>
          </main>
        </div>
      </Router>
              </DonationProvider>
    </Web3Provider>
  );
}

export default App;
