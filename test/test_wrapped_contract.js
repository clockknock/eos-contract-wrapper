let EosToken = require('../contracts/eosio.token');

let eosToken = {};
before(() => {
    eosToken = new EosToken("alice", "active");
});

describe('test contract', function () {

    it('test eosio.token transfer', async () => {
        let receipt = await eosToken.transfer("alice", "bob", "1.0000 EOS", "test contract wrapper");
        console.info(JSON.stringify(receipt, null, 2), "\n ");
    });

});
