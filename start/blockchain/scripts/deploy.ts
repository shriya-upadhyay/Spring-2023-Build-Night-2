import { ethers } from "hardhat";
import { Contract } from "ethers";
async function main () {
//   // We get the contract to deploy
//   const Fund = await ethers.getContractFactory('CrowdFund');
//   console.log('Deploying Contract...');
//   const fund = await Fund.deploy();
//   await fund.deployed();
//   console.log('Contract deployed to:', fund.address);

  const fund = await ethers.deployContract("CrowdFund");

  await fund.waitForDeployment();

  console.log(`Counter deployed to: ${fund.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });