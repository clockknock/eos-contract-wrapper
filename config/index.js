let config = {
    NET_CONFIG: {
        blockchain: 'eos',
        protocol: 'http',
        host: 'localhost',
        port: 80,
        chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
        private_key: "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
    },
    USE_EOSSERVICE:true,
    CONTRACTS: ["eosio","eosio.token"]
};


module.exports = config;
