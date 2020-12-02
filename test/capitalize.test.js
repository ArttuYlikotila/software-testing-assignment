import chai from "chai";
import capitalize from "../src/capitalize.js";

const expect = chai.expect;

// TC-3 and TC-4
describe("Capitalize a string", () => {
  it("TC-3: Convert first character of a lowercase string to uppercase", () => {
    expect(capitalize("string to capitalize")).to.equal("String to capitalize")
  });

  it("TC-4: Convert all put the first character of a uppercase string to lowercase", () => {
    expect(capitalize("STRING TO CAPITALIZE")).to.equal("String to capitalize")
  });
})