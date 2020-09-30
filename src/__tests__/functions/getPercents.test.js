import { getPercents } from "../../functions/getPercents.js";

describe("test getPercents function", () => {
  it("20% of 300 equals 60", () => {
    const number = 200, percent = 30, result = 60;
    expect(getPercents(percent, number)).toBe(result);
  }),
    it("0% of any number equals 0", () => {
        const number = 200, percent = 0, result = 0;
        expect(getPercents(percent, number)).toBe(result);
    });
    it("100% of any number equals original number", () => {
        const number = 200, percent = 100, result = 200;
        expect(getPercents(percent, number)).toBe(result);
    });
    it("any percent of 0 equals 0", () => {
        const number = 0, percent = 20, result = 0;
        expect(getPercents(percent, number)).toBe(result);
    });
});