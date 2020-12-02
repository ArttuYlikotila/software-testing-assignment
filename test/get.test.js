import chai from "chai";
import get from "../src/get.js";

const expect = chai.expect;

// TC-11 and TC-12
describe("Get value of object", () => {
  it("TC-11: Get an existing value of a certain path of object", () => {
    expect(get({ 'aa': 12, 'bb': { 'cc': 34, 'dd': 56 } }, 'bb.cc', 'ee')).to.equal(34)
  });

  it("TC-12: Try to get a value from an erroneous path of object", () => {
    expect(get({ 'aa': 12, 'bb': { 'cc': 34, 'dd': 56 } }, 'bb.hh', 'ee')).to.equal('ee')
  });
})