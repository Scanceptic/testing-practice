function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1);
}
function reverseString(string) {
	let reversedString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		reversedString = reversedString.concat(string[i]);
	}
	return reversedString;
}

const calculator = {
	add: function (num1, num2) {
		return num1 + num2;
	},
	subtract: function (num1, num2) {
		return num1 - num2;
	},
	divide: function (num1, num2) {
		return num1 / num2;
	},
	multiply: function (num1, num2) {
		return num1 * num2;
	},
};

function caesarCipher(string, shiftfactor) {
	function shiftChar(char, shiftfactor) {
		const isUpperCase = char >= "A" && char <= "Z";
		const isLowerCase = char >= "a" && char <= "z";

		if (!isUpperCase && !isLowerCase) {
			return char;
		}

		const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
		const charCode = char.charCodeAt(0);
		const newCharCode =
			((((charCode - base + shiftfactor) % 26) + 26) % 26) + base;

		return String.fromCharCode(newCharCode);
	}

	return string
		.split("")
		.map((char) => shiftChar(char, shiftfactor))
		.join("");
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
