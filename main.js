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

function analyzeArray(array) {
	let min = array[0];
	let max = array[0];
	let length = array.length;
	let total = 0;
	for (let i = 0; i < length; i++) {
		let num = array[i];
		if (num > max) max = num;
		if (num < min) min = num;
		total += num;
	}
	let average = Math.round(total / length);
	const object = { average, min, max, length };
	console.log(object);
	return object;
}

module.exports = {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
};
