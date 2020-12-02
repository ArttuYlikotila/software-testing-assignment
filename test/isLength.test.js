import chai from "chai";
import isLength from "../src/isLength.js";

const expect = chai.expect;

// TC-25 and TC-26
describe("Check if values are valid array lengths", () => {
  it("TC-25: Check if an integer is a valid array-like length", () => {
    expect(isLength(3)).to.equal(true)
  });

  it("TC-26: Check if a string is a valid array-like length", () => {
    expect(isLength('3')).to.equal(false)
  });
})