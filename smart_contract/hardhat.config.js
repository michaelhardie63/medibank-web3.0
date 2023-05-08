// https://eth-goerli.g.alchemy.com/v2/LiafPWQq0WJ2uZRgFQLW7X1AjqKkPUGR

require('@nomicfoundation/hardhat-chai-matchers');
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/LiafPWQq0WJ2uZRgFQLW7X1AjqKkPUGR",
      accounts: ["93230921be37fa07972d597610ef4cd17954159db287df93807753cd4eb1bc35"]
    }
  }
}