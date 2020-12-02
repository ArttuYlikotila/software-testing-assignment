import chai from "chai";
import isArrayLike from "../src/isArrayLike.js";

const expect = chai.expect;

// TC-15, TC-16 and TC-17
describe("Check if values are array-like", () => {
  it("TC-15: Check if array is array-like", () => {
    expect(isArrayLike([1, 2, 3])).to.equal(true)
  });

  it("TC-16: Check if string is array-like", () => {
    expect(isArrayLike('abc')).to.equal(true)
  });

  it("TC-17: Check if function is array-like", () => {
    expect(isArrayLike((a, b) => { return a + b })).to.equal(false)
  });
})