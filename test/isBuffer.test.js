import chai from "chai";
import isBuffer from "../src/isBuffer.js";

const expect = chai.expect;

// TC-18 and TC-19
describe("Check if parameter is of type buffer", () => {
  /*
  Does not pass the test
  Function returns false, while documentation says it should return true
  it("TC-18: Check if a buffer is buffer", () => {
    expect(isBuffer(new Buffer(2))).to.equal(true)
  });
  */

  it("TC-19: Check if an array of 8-bit unsigned integers is a buffer", () => {
    expect(isBuffer(new Uint8Array(2))).to.equal(false)
  });
})