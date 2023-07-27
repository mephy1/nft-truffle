const mephy_contract = artifacts.require("Mephy");


module.exports = function(deployer, network, accounts) {
    console.log(network, accounts);
    deployer.deploy(mephy_contract);

}