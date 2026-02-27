// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Crowdfunding {
    address public owner;
    uint public goal;
    uint public deadline;
    uint public amountCollected;
    bool public goalReached;
    
    mapping(address => uint) public pledges;
    address[] public backers;
    
    event Pledged(address indexed backer, uint amount, uint timestamp);
    event GoalReached(uint totalAmount, uint timestamp);
    event Withdrawn(address indexed owner, uint amount);
    event Refunded(address indexed backer, uint amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the campaign owner");
        _;
    }
    
    modifier campaignActive() {
        require(block.timestamp < deadline, "Campaign has ended");
        _;
    }
    
    modifier campaignEnded() {
        require(block.timestamp >= deadline, "Campaign still active");
        _;
    }
    
    constructor(uint _goal, uint _duration, address _owner) {
        require(_goal > 0, "Goal must be greater than 0");
        require(_duration > 0, "Duration must be positive");
        
        owner = _owner;
        goal = _goal;
        deadline = block.timestamp + _duration;
    }
    
    function pledge() external payable campaignActive {
        require(msg.value > 0, "Pledge amount must be greater than 0");
        
        if (pledges[msg.sender] == 0) {
            backers.push(msg.sender);
        }
        
        pledges[msg.sender] += msg.value;
        amountCollected += msg.value;
        
        if (amountCollected >= goal && !goalReached) {
            goalReached = true;
            emit GoalReached(amountCollected, block.timestamp);
        }
        
        emit Pledged(msg.sender, msg.value, block.timestamp);
    }
    
    function withdraw() external onlyOwner campaignEnded {
        require(amountCollected >= goal, "Goal not reached");
        require(address(this).balance > 0, "No funds to withdraw");
        
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Withdrawal failed");
        
        emit Withdrawn(owner, amount);
    }
    
    function refund() external campaignEnded {
        require(amountCollected < goal, "Goal was reached, no refunds");
        require(pledges[msg.sender] > 0, "No pledge to refund");
        
        uint pledgeAmount = pledges[msg.sender];
        pledges[msg.sender] = 0;
        
        (bool success, ) = msg.sender.call{value: pledgeAmount}("");
        require(success, "Refund failed");
        
        emit Refunded(msg.sender, pledgeAmount);
    }
    
    function getCampaignDetails() external view returns (
        address _owner,
        uint _goal,
        uint _deadline,
        uint _amountCollected,
        uint _backersCount,
        bool _goalReached
    ) {
        return (owner, goal, deadline, amountCollected, backers.length, goalReached);
    }
    
    function getBackers() external view returns (address[] memory) {
        return backers;
    }
    
    function getTimeRemaining() external view returns (uint) {
        if (block.timestamp >= deadline) return 0;
        return deadline - block.timestamp;
    }
}
