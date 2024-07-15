const {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} = require("./main.js");

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

test("Takes in caesphar cipher and returns correctly shifted string: Cncu Vku Qxgt", () => {
	expect(caesarCipher("Alas Tis Over", 2)).toBe("Cncu Vku Qxgt");
});

test("Takes in caesar cipher and returns negative shiftfactor correctly", () => {
	expect(caesarCipher("Aaaa going in reverse", -2)).toBe(
		"Yyyy emgle gl pctcpqc"
	);
});

test("Takes in caesphar cipher and returns punctuation correctly", () => {
	expect(caesarCipher("Yo, I'm the goat!?", 1)).toBe("Zp, J'n uif hpbu!?");
});

test("Takes in caesphar cipher and returns letters correctly wrapped", () => {
	expect(caesarCipher("Zzxc", 10)).toBe("Jjhm");
});

test("Analyze array takes in an array of numbers [4,76,5,1,5,70,-5,23] and returns avg,min,max,length", () => {
	expect(analyzeArray([4, 76, 5, 1, 5, 70, -5, 23])).toEqual({
		average: 22,
		min: -5,
		max: 76,
		length: 8,
	});
});
