// Update this after deploying your CampaignFactory contract
export const FACTORY_ADDRESS = process.env.REACT_APP_FACTORY_ADDRESS || '';

export const FACTORY_ABI = [
  "function createCampaign(uint _goal, uint _duration) external returns (address)",
  "function getDeployedCampaigns() external view returns (address[])",
  "function getCampaignsByOwner(address _owner) external view returns (address[])",
  "event CampaignCreated(address indexed campaignAddress, address indexed owner, uint goal, uint duration, uint timestamp)"
];

export const CAMPAIGN_ABI = [
  "function pledge() external payable",
  "function withdraw() external",
  "function refund() external",
  "function getCampaignDetails() external view returns (address, uint, uint, uint, uint, bool)",
  "function owner() external view returns (address)",
  "function goal() external view returns (uint)",
  "function deadline() external view returns (uint)",
  "function amountCollected() external view returns (uint)"
];
