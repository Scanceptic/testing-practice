const capitalize = require("./main.js");

test("Takes in string avocadoes and makes first character capitalized", () => {
	expect(capitalize("avocadoes")).toBe("Avocadoes");
});
