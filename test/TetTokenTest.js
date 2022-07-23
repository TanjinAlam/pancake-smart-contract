const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe ("Tet token", function () {
  async function deployAgameToken() {
      // defining constants for the test
      // the upperlimit test uint
      const [Admin, Other] = await ethers.getSigners();
      const TetToken = await ethers.getContractFactory("TetToken");
      const tetToken = await TetToken.deploy();
      const owneraddress = await tetToken.getOwner();
      return {tetToken,owneraddress,Admin,Other};
  } 

  describe("Deployment", function () {
    it("Should set the right Admin", async function () {
        const { tetToken,owneraddress } = await loadFixture(deployAgameToken);
        expect(await tetToken.getOwner()).to.equal(owneraddress);
      });
});

});
