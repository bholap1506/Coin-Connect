import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{campaign.title || 'Campaign Title'}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description || 'Description'}</p>
      <div className="text-sm text-gray-500 mb-4">
        <p>Goal: {campaign.goal || '0'} ETH</p>
        <p>Raised: {campaign.raised || '0'} ETH</p>
      </div>
      <Link to={`/campaign/${campaign.id}`} className="text-blue-600 hover:underline">
        View Details →
      </Link>
    </div>
  );
};

export default CampaignCard;
