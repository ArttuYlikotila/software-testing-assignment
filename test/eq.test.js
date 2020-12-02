import chai from "chai";
import eq from "../src/eq.js";

const expect = chai.expect;

// TC-7, TC-8, TC-9 and TC-10
describe("Compare strings", () => {
  it("TC-7: Compare two strings with same values to find out if their values are equal", () => {
    expect(eq('product a', 'product a')).to.equal(true)
  });

  it("TC-8: Compare two strings with different values to find out if their values are equal", () => {
    expect(eq('product a', 'product b')).to.equal(false)
  });

  it("TC-9: Compare undefined and string to see if their values are equal", () => {
    expect(eq(undefined, 'product b')).to.equal(false)
  });

  it("TC-10: Compare int and string to see if their values are equal", () => {
    expect(eq(123, '123')).to.equal(true)
  });
})