import chai from "chai";
import isObject from "../src/isObject.js";

const expect = chai.expect;

// TC-27 and TC-28
describe("Check if a parameter is of type object", () => {
  it("TC-27: Check if an array is of type object", () => {
    expect(isObject([1, 2, 3])).to.equal(true)
  });

  it("TC-28: Check if null is of type object", () => {
    expect(isObject(null)).to.equal(false)
  });
})