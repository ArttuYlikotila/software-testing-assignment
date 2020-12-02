import chai from "chai";
import isSymbol from "../src/isSymbol.js";

const expect = chai.expect;

// TC-32 and TC-33
describe("Check if Symbol or object", () => {
  it("TC-32: Check if a symbol iterator is a Symbol primitive or object", () => {
    expect(isSymbol(Symbol.iterator)).to.equal(true)
  });
  
  it("TC-33: Check if a string is a Symbol primitive or object", () => {
    expect(isSymbol("abc")).to.equal(false)
  });
})