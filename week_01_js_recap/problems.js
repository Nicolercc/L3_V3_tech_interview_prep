// Reverse a string
function reverseString(str) {
	let arr = str.split("");
	let reversed = arr.reverse();
	return reversed.join("");
}

// Find max in array
function findMax(arr) {
	//set max to 1st el
	let max = arr[0];
	// loop through array
	for (let i = 0; i < arr.length; i++) {
		//set condition
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	//return
	return max;
}

// Check if palindrome
function isPalindrome(word) {
	let arr = word.split("").reverse();
	let reversedWord = arr.join("");

	if (word === reversedWord) {
		return true;
	}
	return false;
}

module.exports = { reverseString, findMax, isPalindrome };
