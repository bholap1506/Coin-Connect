const hre = require("hardhat");

async function main() {
  const factoryAddress = process.env.FACTORY_ADDRESS;
  
  if (!factoryAddress) {
    console.error("Please set FACTORY_ADDRESS in .env file");
    process.exit(1);
  }

  console.log("Verifying CampaignFactory on Etherscan...");
  
  await hre.run("verify:verify", {
    address: factoryAddress,
    constructorArguments: [],
  });
  
  console.log("Verification complete!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
