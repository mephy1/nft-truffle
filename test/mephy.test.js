const mephy = artifacts.require("Mephy");
const truffleAssert = require("truffle-assertions");

//let Web3 = require("web3");
//let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

contract("Mephy", (accounts) =>{

    it("should credit an NFT to a specific account", async() => {
        const mephyIstance = await mephy.deployed();
        let txResult = await mephyIstance.safeMint(accounts[1], "Mephy.json");
        //console.log(txResult);
        console.log(await mephyIstance.ownerOf(0));
        assert.equal(txResult.logs[0].event, "Transfer", "event is not the transfer event");
        assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "from is not the zero adress");
        //truffleAssert.eventEmitted(txResult, "Transfer", {from: "0x0000000000000000000000000000000000000000", to: accounts[1], tokenID: web3.utils.toBN("0")});
        
        truffleAssert.eventEmitted(txResult, "Transfer", {from: "0x0000000000000000000000000000000000000000", to: accounts[1]});

        //assert.equal(await mephyIstance.ownerOf(0), accounts[1], "Owner of Token 1 is not equal account 2");
    
    
    })

})