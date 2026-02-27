// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Crowdfunding.sol";

contract CampaignFactory {
    address[] public deployedCampaigns;
    mapping(address => address[]) public ownerToCampaigns;
    
    event CampaignCreated(
        address indexed campaignAddress,
        address indexed owner,
        uint goal,
        uint duration,
        uint timestamp
    );
    
    function createCampaign(uint _goal, uint _duration) external returns (address) {
        require(_goal > 0, "Goal must be greater than 0");
        require(_duration > 0, "Duration must be positive");
        
        Crowdfunding newCampaign = new Crowdfunding(_goal, _duration, msg.sender);
        address campaignAddress = address(newCampaign);
        
        deployedCampaigns.push(campaignAddress);
        ownerToCampaigns[msg.sender].push(campaignAddress);
        
        emit CampaignCreated(campaignAddress, msg.sender, _goal, _duration, block.timestamp);
        
        return campaignAddress;
    }
    
    function getDeployedCampaigns() external view returns (address[] memory) {
        return deployedCampaigns;
    }
    
    function getCampaignsByOwner(address _owner) external view returns (address[] memory) {
        return ownerToCampaigns[_owner];
    }
    
    function getCampaignsCount() external view returns (uint) {
        return deployedCampaigns.length;
    }
}
