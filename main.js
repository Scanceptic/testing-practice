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

module.exports = { capitalize, reverseString };
