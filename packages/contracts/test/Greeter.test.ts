import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Greeter", function () {
  // This fixture deploys the contract and returns it
  const deploy = async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello world!");

    return { greeter };
  };

  it("Should deploy with the right greeting", async function () {
    const { greeter } = await loadFixture(deploy);
    expect(await greeter.getGreeting()).to.equal("Hello world!");
  });

  it("Should return the new greeting once it's changed", async function () {
    const { greeter } = await loadFixture(deploy);
    await greeter.setGreeting("Hey there!");
    expect(await greeter.getGreeting()).to.equal("Hey there!");
  });
});
