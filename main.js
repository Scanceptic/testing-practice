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

module.exports = { capitalize, reverseString, calculator };
