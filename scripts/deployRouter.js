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
  const AnchorToken = await hre.ethers.getContractFactory("PancakeRouter");
  const anchorToken = await AnchorToken.deploy(
    "0x33d78117F62d542E3820886780d1D6e21900DC48",
    "0xb8C99f034CF95A2a20399Fea66B29CB37D3cDd74"
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
