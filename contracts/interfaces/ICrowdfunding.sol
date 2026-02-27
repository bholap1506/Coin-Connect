// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ICrowdfunding {
    function pledge() external payable;
    function withdraw() external;
    function refund() external;
    function getCampaignDetails() external view returns (
        address owner,
        uint goal,
        uint deadline,
        uint amountCollected,
        uint backersCount,
        bool goalReached
    );
}
