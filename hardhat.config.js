// require('@openzeppelin/hardhat-upgrades');
/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require('dotenv').config()

module.exports = {
  solidity:{
    version:"0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_SEPOLIA}`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    polytest:{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLY_TEST}`,
      accounts:[`${process.env.PRIVATE_KEY}'ghksdsdkfhsdkfjhsdkfjh'`],
    },
    polygon:{
      url:`https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLY_MAINNET}`,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts:[`${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts:[`${process.env.PRIVATE_KEY}`],
    }
  },
  etherscan:{
    apiKey:{
      sepolia:`${process.env.ETHERSCAN_SEPOLIA}`,
      polygonMumbai:`${process.env.ETHERSCAN_POLYGON}`,
      polygon:`${process.env.ETHERSCAN_POLYGON}`,
      mainnet:process.env.ETHERSCAN_BSC,
      bscTestnet:process.env.ETHERSCAN_BSC,
    }
  }
};