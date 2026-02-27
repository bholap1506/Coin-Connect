const hre = require("hardhat");

async function main() {
  console.log("Deploying CampaignFactory contract...");
  
  const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
  const factory = await CampaignFactory.deploy();
  
  await factory.waitForDeployment();
  
  const factoryAddress = await factory.getAddress();
  console.log("CampaignFactory deployed to:", factoryAddress);
  console.log("Save this address for your frontend configuration!");
  
  // Optional: Deploy a test campaign
  console.log("\nDeploying test campaign...");
  const goalInWei = hre.ethers.parseEther("1"); // 1 ETH goal
  const durationInSeconds = 30 * 24 * 60 * 60; // 30 days
  
  const tx = await factory.createCampaign(goalInWei, durationInSeconds);
  const receipt = await tx.wait();
  
  const campaignAddress = receipt.logs[0].address;
  console.log("Test campaign deployed to:", campaignAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
