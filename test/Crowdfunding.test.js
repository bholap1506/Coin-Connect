const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding Tests", function () {
  let factory, crowdfunding, owner, addr1;
  const goalAmount = ethers.parseEther("1");
  const duration = 30 * 24 * 60 * 60; // 30 days

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    
    const CampaignFactory = await ethers.getContractFactory("CampaignFactory");
    factory = await CampaignFactory.deploy();
    await factory.waitForDeployment();
  });

  it("Should deploy CampaignFactory", async function () {
    expect(await factory.getAddress()).to.be.properAddress;
  });

  it("Should create a new campaign", async function () {
    await factory.createCampaign(goalAmount, duration);
    const campaigns = await factory.getDeployedCampaigns();
    expect(campaigns.length).to.equal(1);
  });

  it("Should allow pledging to campaign", async function () {
    const tx = await factory.createCampaign(goalAmount, duration);
    const receipt = await tx.wait();
    const campaignAddress = receipt.logs[0].address;
    
    const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    const campaign = Crowdfunding.attach(campaignAddress);
    
    const pledgeAmount = ethers.parseEther("0.1");
    await campaign.connect(addr1).pledge({ value: pledgeAmount });
    
    const amountCollected = await campaign.amountCollected();
    expect(amountCollected).to.equal(pledgeAmount);
  });
});
