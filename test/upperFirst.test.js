import chai from "chai";
import upperFirst from "../src/upperFirst.js";

const expect = chai.expect;

// TC-47 and TC-48
describe("Convert first char of a string to uppercase", () => {
  it("TC-47: Convert the first character of a lowercase string to uppercase", () => {
    expect(upperFirst("text")).to.equal("Text")
  });
  
  it("TC-48: Convert the first character of a uppercase string to uppercase", () => {
    expect(upperFirst("TEXT")).to.equal("TEXT")
  });
})