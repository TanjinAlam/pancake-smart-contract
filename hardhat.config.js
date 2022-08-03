require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
// hardhat.config.js
const { mnemonic, apiKey } = require("./secrets.json");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.6.0",
      },
      {
        version: "0.4.18",
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    dev: {
      url: "http://localhost:8545",
      gasPrice: 50000000000,
      saveDeployments: true,
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: { mnemonic: mnemonic },
      gasPrice: 10000000000,
      blockGasLimit: 1000000,
    },
    // bsc: {
    //     url: "https://bsc-dataseed1.binance.org/",
    //     accounts: [process.env.PRIV_KEY],
    //     gasPrice: 5100000000,
    //     blockGasLimit: 1000000
    // }
  },
  etherscan: {
    apiKey: apiKey,
  },
};
