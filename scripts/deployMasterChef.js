// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const AnchorToken = await hre.ethers.getContractFactory("MasterChef");
  const anchorToken = await AnchorToken.deploy(
    "0xfbe15636c846d022050e391fb69781e725775ec3",
    "0x2793F8ED3eF171462eFBF25b3707e3f26e6e9f71",
    "0x86cf941B3B348f10dD583867Dd10D60a198fAcf9",
    "69000000000000000000",
    "21567104"
  );

  await anchorToken.deployed();

  console.log("Factory deployed to:", anchorToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
