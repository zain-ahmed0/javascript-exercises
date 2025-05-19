const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (array) {
	let total = 0;

	for (let i of array) {
		total += i;
	}

	return total;
};

const multiply = function (array) {
	let result = 1;

	for (let i of array) {
		result *= i;
	}

	return result;
};

const power = function (num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function (num1) {
	let result = 1;

	for (let i = num1 - 1; i > 0; i--) {
		result *= i + 1;
	}

	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
