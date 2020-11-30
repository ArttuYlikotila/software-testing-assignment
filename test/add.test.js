import chai from "chai";
import add from "../src/add.js";

const expect = chai.expect;

// TC-1 and TC-2
describe("Sum two numbers", () => {
  it("TC-1: Add positive number to positive number", () => {
    expect(add(5,7)).to.equal(12)
  });

  it("TC-2: Add negative number to negative number", () => {
    expect(add(-5,-7)).to.equal(-12)
  });
})