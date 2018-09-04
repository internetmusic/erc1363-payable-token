const { shouldBehaveLikeERC1363Payable } = require('./ERC1363Payable.behaviour');

const ERC1363BasicToken = artifacts.require('ERC1363BasicTokenMock');
const ERC1363Payable = artifacts.require('ERC1363PayableMock');

contract('ERC1363Payable', function ([owner, spender]) {
  const balance = 100;

  beforeEach(async function () {
    this.token = await ERC1363BasicToken.new(owner, balance);
    this.notAcceptedToken = await ERC1363BasicToken.new(owner, balance);
    this.mock = await ERC1363Payable.new(this.token.address);
  });

  shouldBehaveLikeERC1363Payable([owner, spender], balance);
});