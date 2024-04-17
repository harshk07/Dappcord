require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "QHeYo2seTokp3VjLX76rq-N-uzTBWTKg";
const INFURA_NODE_ENDPOINT = "https://linea-sepolia.infura.io/v3/55e6602f462b4709a23bca799dcc2f90"
const SEPOLIA_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },

    infura: {
      url: INFURA_NODE_ENDPOINT,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};
