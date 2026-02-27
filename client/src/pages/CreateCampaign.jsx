import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    organizer: '',
    organization: '',
    description: '',
    goal: '',
    categories: [
      { name: '', percentage: '' },
      { name: '', percentage: '' },
      { name: '', percentage: '' },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...formData.categories];
    newCategories[index][field] = value;
    setFormData({ ...formData, categories: newCategories });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Campaign Data:', formData);
    alert(`Campaign "${formData.title}" created successfully!`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Start a Campaign</h1>
          <p className="text-gray-600 mb-8">Create a new crowdfunding campaign on the blockchain</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Campaign Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="e.g., Help Build a School in Rural India"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Organizer Name *</label>
              <input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="e.g., Rahul Sharma"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Organization *</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="e.g., Education For All"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Campaign Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Describe your campaign and its goals..."
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Funding Goal (₹)</label>
              <input
                type="number"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Enter target amount (leave empty for no limit)"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Budget Categories</label>
              <p className="text-sm text-gray-500 mb-4">Define how funds will be allocated</p>
              {formData.categories.map((category, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-3">
                  <input
                    type="text"
                    value={category.name}
                    onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder={`Category ${index + 1} name`}
                  />
                  <input
                    type="number"
                    value={category.percentage}
                    onChange={(e) => handleCategoryChange(index, 'percentage', e.target.value)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="Percentage"
                    min="0"
                    max="100"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-full font-bold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 text-white py-3 px-6 rounded-full font-bold hover:shadow-lg transition"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;