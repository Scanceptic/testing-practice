const { capitalize, reverseString, calculator } = require("./main.js");

test("Takes in string avocadoes and makes first character capitalized", () => {
	expect(capitalize("avocadoes")).toBe("Avocadoes");
});

test("Takes in string slapdash and returns reversed string hsadpals", () => {
	expect(reverseString("slapdash")).toBe("hsadpals");
});

test("Takes in calculator object and adds 1+2 to return 3", () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test("Takes in calculator object and subtracts 4 from 11 to return 7", () => {
	expect(calculator.subtract(11, 4)).toBe(7);
});

test("Takes in calculator object and divides 40 by 4 to return 10", () => {
	expect(calculator.divide(40, 4)).toBe(10);
});

test("Takes in calculator object and multiplies 5 by 3 to return 15", () => {
	expect(calculator.multiply(5, 3)).toBe(15);
});
