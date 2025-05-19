const fibonacci = function (num) {
	num = parseInt(num);

	// f(n) = f(n-1) + f(n-2)
	// 1, 1, 2, 3, 5, 8, 13, 21, 34

	let prev1 = 0;
	let prev2 = 1;
	let temp;

	if (num < 0) {
		return "OOPS";
	} else if (num === 0) {
		return 0;
	}

	for (let i = 0; i < num; i++) {
		temp = prev1;
		prev1 = prev2;
		prev2 = temp + prev2;
	}
	return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
