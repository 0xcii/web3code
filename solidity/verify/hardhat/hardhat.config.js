require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// VPN 代理设置 
// yarn add undici
// const { setGlobalDispatcher, ProxyAgent } = require('undici')
// const proxyAgent = new ProxyAgent('http://127.0.0.1:7890')
// setGlobalDispatcher(proxyAgent)


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
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.blastapi.io/xxxx RPC 链接",
      accounts: ["私钥"]
    }
  },
  etherscan: {
    apiKey: {
      rinkeby: '区块链浏览器的 API 密钥'
    }
  }
};
