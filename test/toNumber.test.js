import chai from "chai";
import toNumber from "../src/toNumber.js";

const expect = chai.expect;

// TC-41, TC-42 and TC-43
describe("Test number conversions", () => {
  it("TC-41: Convert a float number to a number", () => {
    expect(toNumber(3.2)).to.equal(3.2)
  });

  it("TC-42: Convert a float number presented as a string to a number", () => {
    expect(toNumber("3.2")).to.equal(3.2)
  });

  it("TC-43: Convert a string to a number", () => {
    expect(toNumber("abc")).to.eql(NaN)
  });
})