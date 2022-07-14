const form = document.forms[0];
const inputDate = document.querySelector("#date");
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30,  31, 30, 31];

//reverse string function
function reverseString(str) {
    return str.split("").reverse().join('');
}

//to check the date is palindrome or not
function isPalindrome(str) {
    var reverseStr = reverseString(str)
    return str = reverseStr
}

