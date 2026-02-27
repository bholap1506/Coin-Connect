import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDonation } from '../context/DonationContext.jsx';

const Home = () => {
  const navigate = useNavigate();
    const { addDonation } = useDonation();
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: 'College Ganesh Utsav 2025',
      organizer: 'Rahul Sharma',
      organization: 'SSTC-BHILAI',
      badge: 'NO TARGET LIMIT',
      collected: 12450,
      goal: null,
      categories: [
        { name: 'GANESH STATUE (IDOL)', percentage: 40 },
        { name: 'PANDAL & LIGHTING', percentage: 30 },
        { name: 'PRASAD & COMMUNITY BHOJAN', percentage: 20 },
      ],
    },
    {
      id: 2,
      title: 'Help Build a School in Rural India',
      organizer: 'Priya Verma',
      organization: 'Education For All',
      badge: 'URGENT',
      collected: 45000,
      goal: 100000,
      categories: [
        { name: 'CONSTRUCTION', percentage: 60 },
        { name: 'FURNITURE & EQUIPMENT', percentage: 25 },
        { name: 'BOOKS & SUPPLIES', percentage: 15 },
      ],
    },
    {
      id: 3,
      title: 'Medical Aid for Cancer Patients',
      organizer: 'Dr. Amit Patel',
      organization: 'Hope Foundation',
      badge: 'VERIFIED',
      collected: 78500,
      goal: 150000,
      categories: [
        { name: 'TREATMENT COSTS', percentage: 70 },
        { name: 'MEDICATION', percentage: 20 },
        { name: 'SUPPORT SERVICES', percentage: 10 },
      ],
    },
  ]);

  const handleDonate = (campaign) => {
    setSelectedCampaign(campaign);
    setShowModal(true);
  };

  const handleSubmitDonation = () => {
    if (donationAmount && parseFloat(donationAmount) > 0) {
      const updatedCampaigns = campaigns.map(c => 
        c.id === selectedCampaign.id 
          ? { ...c, collected: c.collected + parseFloat(donationAmount) }
          : c
      );
      setCampaigns(updatedCampaigns);
          
    // Add to donation history
    addDonation({
      campaign: selectedCampaign.title,
      organizer: selectedCampaign.organizer,
      amount: donationAmount,
      tag: selectedCampaign.organization
    });
      alert(`Thank you for donating ₹${donationAmount} to ${selectedCampaign.title}!`);
      setShowModal(false);
      setDonationAmount('');
    }
  };

  return (
        <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">CoinConnect</span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* User Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition" onClick={() => navigate('/profile')}>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              {/* Start Campaign Button */}
              <button 
                onClick={() => navigate('/create')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition"
              >
                <span className="text-xl">+</span>
                <span>Start Campaign</span>
              </button>
            </div>
          </div>
        </div>
      </header>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Empower Change with
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                {' '}Blockchain
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the decentralized crowdfunding revolution. Transparent, secure, and trustworthy campaigns powered by Web3 technology.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => navigate('/create')} className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition">
                Start a Campaign
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold border border-white/20 hover:bg-white/20 transition">
                Explore Campaigns
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Active Campaigns</h2>
        <div className="flex flex-col  gap-6">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="bg-gradient-to-br from-orange-500 to-orange-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3flex flex-col gap-6rounded-2xl p-6 shadow-xl max-w-4xl">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                  {campaign.badge}
                </span>
                <div className="text-white text-sm">
                  <span className="font-semibold">Organized by:</span> {campaign.organizer}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{campaign.title}</h3>
              <p className="text-white/90 text-sm mb-4">{campaign.organization}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-white mb-2">
                  <span className="font-bold">₹{campaign.collected.toLocaleString()}</span>
                  {campaign.goal && <span>of ₹{campaign.goal.toLocaleString()}</span>}
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div 
                    className="bg-white h-3 rounded-full"
                    style={{ width: campaign.goal ? `${(campaign.collected / campaign.goal) * 100}%` : '65%' }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {campaign.categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between text-white text-sm">
                    <span>{cat.name}</span>
                    <span className="font-bold">{cat.percentage}%</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleDonate(campaign)}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-full font-bold text-lg transition"
              >
                Donate ₹{donationAmount || '0'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Donate to Campaign</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">{selectedCampaign.title}</h3>
              <p className="text-gray-600 text-sm">Organized by {selectedCampaign.organizer}</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Donation Amount (₹)</label>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Enter amount"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <button onClick={() => setDonationAmount('100')} className="bg-gray-100 hover:bg-gray-200 py-2 rounded-lg font-semibold">₹100</button>
              <button onClick={() => setDonationAmount('500')} className="bg-gray-100 hover:bg-gray-200 py-2 rounded-lg font-semibold">₹500</button>
              <button onClick={() => setDonationAmount('1000')} className="bg-gray-100 hover:bg-gray-200 py-2 rounded-lg font-semibold">₹1000</button>
            </div>

            <button
              onClick={handleSubmitDonation}
              disabled={!donationAmount || parseFloat(donationAmount) <= 0}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-3 rounded-full font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Confirm Donation
            </button>
          </div>
        </div>
      )}
    </div>
      </>
);
};

export default Home;