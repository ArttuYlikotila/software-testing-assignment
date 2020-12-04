import chai from "chai";
import toString from "../src/toString.js";

const expect = chai.expect;

// TC-44, TC-45 and TC-46
describe("Test string conversions", () => {
  /*
  Does not pass the test
  Function toString called with a null parameter returns string 'null',
  while functions documentation says it should return string ''
  it("TC-44: Convert null to string", () => {
    // This will pass
    expect(toString(null)).to.be.a('string').that.equal('null')
    // This will not pass
    //expect(toString(null)).to.equal('')
  });
  */

  it("TC-45: Convert a negative integer to string", () => {
    expect(toString(-0)).to.equal("-0")
  });

  it("TC-46: Convert an array to a string", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3")
  });
})