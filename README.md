## Eos Contract Wrapper

Create eos contract js wrapper, make it easier to call eos contract.



### Usage

#### clone

clone this project and run `npm install`  at project dir.



#### config

Check the `config`  dir:

```js
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
    CONTRACTS: ["eosio.token"]
};

module.exports = config;
```

this project can create contract wrapper  using `eosjs`'s transact or my other project[ eos.service](https://github.com/clockknock/eos.service)'s transact. If you are using `eosjs`, change `USE_EOSSERVICE:true` to `USE_EOSSERVICE:false`, and add the contract name into `CONTRACTS` after you set code and set abi to your eos chain.



if your want use eosjs's transact,



#### run 

Back to `src`  and then run `index.js`, your contracts will show in `contracts`, after create wrapper, use example at [here](https://github.com/clockknock/eos-contract-wrapper/blob/master/test/test_wrapped_contract.js), just pass your parameter and you can get the transaction receipt.

```js

let EosToken = require('../contracts/eosio.token');

describe('test contract', function () {
    it('test eosio.token transfer', async () => {
        let receipt = await eosToken.transfer("alice", "bob", "1.0000 EOS", "test contract wrapper");
        console.info(JSON.stringify(receipt, null, 2), "\n ");
    });


});
```

