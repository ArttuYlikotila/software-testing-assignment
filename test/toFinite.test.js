import chai from "chai";
import toFinite from "../src/toFinite.js";

const expect = chai.expect;

// TC-37 and TC-38
describe("Test float to finite conversions", () => {
  it("TC-37: Convert a float number to a finite number", () => {
    expect(toFinite(3.2)).to.equal(3.2)
  });

  it("TC-38: Convert a float number presented as a string to a finite number", () => {
    expect(toFinite("3.2")).to.equal(3.2)
  });
})