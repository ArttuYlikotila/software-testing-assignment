import chai from "chai";
import toInteger from "../src/toInteger.js";

const expect = chai.expect;

// TC-39 and TC-40
describe("Test integer conversions", () => {
  it("TC-39: Convert a float number to integer", () => {
    expect(toInteger(3.2)).to.equal(3)
  });

  it("TC-40: Convert an int presented as a string to integer", () => {
    expect(toInteger("7")).to.equal(7)
  });
})