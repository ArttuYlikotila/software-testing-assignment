import chai from "chai";
import isTypedArray from "../src/isTypedArray.js";

const expect = chai.expect;

// TC-34 and TC-35
describe("Check if values are typed arrays", () => {
  it("TC-34: Check if an array of 8-bit unsigned integers is a typed array", () => {
    expect(isTypedArray(new Uint8Array)).to.equal(true)
  });

  it("TC-35: Check if an empty array is a typed array", () => {
    expect(isTypedArray([])).to.equal(false)
  });
})