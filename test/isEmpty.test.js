import chai from "chai";
import isBuffer from "../src/isBuffer.js";
import isEmpty from "../src/isEmpty.js";

const expect = chai.expect;

// TC-20, TC-21, TC-22, TC-23 and TC-24
describe("Check if values are empty", () => {
  it("TC-20: Check if an array of integers is empty", () => {
    expect(isEmpty([1, 2, 3])).to.equal(false)
  });

  it("TC-21: Check if a string is empty", () => {
    expect(isEmpty('abc')).to.equal(false)
  });

  it("TC-22: Check if null is empty", () => {
    expect(isEmpty(null)).to.equal(true)
  });

  it("TC-23: Check if an integer is empty", () => {
    expect(isEmpty(1)).to.equal(true)
  });

  it("TC-24: Check if an empty array is empty", () => {
    expect(isEmpty([])).to.equal(true)
  });
})