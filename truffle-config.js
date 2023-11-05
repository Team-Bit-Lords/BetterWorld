const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config();
PRIVATE_KEY = "abd3b5be73c820e9a46a176dbc92b0a1b7fa850a6a8384b91238ddd0a76ca005"
module.exports = {
  networks: {
    xinfin: {
      provider: () => new HDWalletProvider(
        PRIVATE_KEY,
        'https://rpc.xinfin.network'),
      network_id: 50,
      gasLimit: 6721975,
      confirmation: 2,
    },
    apothem: {
      provider: () => new HDWalletProvider(
        PRIVATE_KEY,
        'https://erpc.apothem.network/'),
      network_id: 51,
      gasLimit: 21000,
      confirmation: 2,
    }
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.0",
    }
  },
};
