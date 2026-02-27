const API_URL = 'http://localhost:5000/api';

export const fetchCampaigns = async () => {
  const response = await fetch(`${API_URL}/campaigns`);
  return response.json();
};

export const createCampaign = async (data) => {
  const response = await fetch(`${API_URL}/campaigns`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
