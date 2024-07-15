const { capitalize, reverseString } = require("./main.js");

test("Takes in string avocadoes and makes first character capitalized", () => {
	expect(capitalize("avocadoes")).toBe("Avocadoes");
});

test("Takes in string slapdash and returns reversed string hsadpals", () => {
	expect(reverseString("slapdash")).toBe("hsadpals");
});
