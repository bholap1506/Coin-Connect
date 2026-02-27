import React, { useState } from 'react';
import { useWeb3 } from '../context/Web3Context';

const Create = () => {
  const { account } = useWeb3();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    duration: '30'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!account) {
      alert('Please connect your wallet first!');
      return;
    }
    console.log('Creating campaign:', formData);
    // Implement contract interaction here
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Create New Campaign</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Campaign Title</label>
          <input
            type="text"
            className="w-full border rounded px-4 py-2"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            className="w-full border rounded px-4 py-2"
            rows="4"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Goal (ETH)</label>
          <input
            type="number"
            step="0.01"
            className="w-full border rounded px-4 py-2"
            value={formData.goal}
            onChange={(e) => setFormData({...formData, goal: e.target.value})}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Duration (days)</label>
          <input
            type="number"
            className="w-full border rounded px-4 py-2"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default Create;
