import chai from "chai";
import isArguments from "../src/isArguments.js";

const expect = chai.expect;

// TC-13 and TC-14
describe("Check if values are arguments objects", () => {
  it("TC-13: Check if an arguments object returned from a function is an arguments object", () => {
    expect(isArguments(function () { return arguments }())).to.equal(true)
  });

  it("TC-14: Check if a string is an arguments object", () => {
    expect(isArguments('abc')).to.equal(false)
  });
})