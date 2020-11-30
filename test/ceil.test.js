import chai from "chai";
import ceil from "../src/ceil.js";

const expect = chai.expect;

// TC-5 and TC-6
describe("Round up decimal number", () => {
  it("TC-5: Round up decimal number to two decimal accuracy", () => {
    expect(ceil(6.0004,2)).to.equal(6.01)
  });

  it("TC-6: Round up with too large precision", () => {
    expect(ceil(6.02,4)).to.equal(6.02)
  });
})