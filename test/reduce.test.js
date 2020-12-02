import chai from "chai";
import reduce from "../src/reduce.js";

const expect = chai.expect;

// TC-36
describe("Reduce a list of objects", () => {
  it("TC-36: Sum the values in a object", () => {
    expect(reduce([{"id": 1, "price": 20.05}, {"id": 2, "price": 1.99}, 
                  {"id": 3, "price": 10.90}], (sum, {price}) => sum + price, 0)).to.equal(32.94)
  });
})