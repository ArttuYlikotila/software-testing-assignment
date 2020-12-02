import chai from "chai";
import isObjectLike from "../src/isObjectLike.js";

const expect = chai.expect;

// TC-29, TC-30 and TC-31
describe("Check if values are object-like", () => {
  it("TC-29: Check if an array is object-like", () => {
    expect(isObjectLike([1, 2, 3])).to.equal(true)
  });

  it("TC-30: Check if a function is object-like", () => {
    expect(isObjectLike((a, b) => { return a + b })).to.equal(false)
  });

  it("TC-31: Check if null is object-like", () => {
    expect(isObjectLike(null)).to.equal(false)
  });
})