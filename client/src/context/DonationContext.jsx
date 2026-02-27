import React, { createContext, useContext, useState } from 'react';

const DonationContext = createContext();

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within DonationProvider');
  }
  return context;
};

export const DonationProvider = ({ children }) => {
  const [donationHistory, setDonationHistory] = useState([
    {
      id: 'TXN-S12RL4C7K',
      campaign: 'Annual Sports Meet 2025',
      organizer: 'Priya Verma',
      amount: 5000,
      date: new Date('2026-02-28T12:05:00'),
      status: 'SUCCESS',
      tag: 'BIT DURG'
    },
    {
      id: 'TXN-LG24JT32K',
      campaign: 'College Ganesh Utsav 2025',
      organizer: 'Rahul Sharma',
      amount: 501,
      date: new Date('2026-02-27T11:30:00'),
      status: 'SUCCESS',
      tag: 'SSTC-BHILAI'
    }
  ]);

  const addDonation = (donation) => {
    const newDonation = {
      id: `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      ...donation,
      date: new Date(),
      status: 'SUCCESS'
    };
    setDonationHistory(prev => [newDonation, ...prev]);
  };

  const getTotalDonated = () => {
     return  donationHistory.reduce((sum, donation) => sum + Number(donation.amount), 0);
         };

  const getCausesSupported = () => {
    return new Set(donationHistory.map(d => d.campaign)).size;
  };

  return (
    <DonationContext.Provider value={{
      donationHistory,
      addDonation,
      getTotalDonated,
      getCausesSupported
    }}>
      {children}
    </DonationContext.Provider>
  );
};

export default DonationContext;