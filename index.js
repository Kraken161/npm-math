const add = (number1, number2) => {
	return number1 + number2
}

const substr = (number1, number2) => {
	if (number1 < number2) {
		throw new Error('The second number is greater than the first.')
	} else {
		return number1 - number2
	}
}

const multiply = (number1, number2) => {
	return number1 * number2
}

const divide = (number1, number2) => {
	if (number1 < number2) {
		throw new Error('The second number is greater than the first.')
	} else {
		return number1 / number2
	}
}

module.exports = {
	add,
	substr,
	multiply,
	divide,
}
