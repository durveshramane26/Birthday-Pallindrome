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


//convert date into string
function convertDateToString(date) {
    var dateString = { day: '', month: '', year: '' }
    if(dateString.day < 10 ){
        dateString.day = '0' + date.daysInMonth
    }
    else {
        dateString.day = date.day.toString()
    }

    if(dateString.month < 10) {
        dateString.month = '0' + date.month
    }
    else{
        dateString.month = date.month.toString()
    }

    dateString.year = date.year.toString();

    return dateString

}