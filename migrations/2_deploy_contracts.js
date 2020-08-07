const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  
  //deploy token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  //deloy EthSwap
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed()

  //transder all tokens to EthSwap (1 million)
  await token.transfer(ethSwap.address, '1000000000000000000000000')

};
