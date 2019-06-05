const HDWalletProvider = require("truffle-hdwallet-provider")
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
    provider: () => new HDWalletProvider(<seed>, <link></link>), // metamask seed, a link from fura
      network_id: 4, 
      gas: 4500000,
      gasPrice: 10000000000
    },
  }
};