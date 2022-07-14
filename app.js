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

//get all date format
function allDateFormate(date) {
    let dateString = convertDateToString(date);
    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy = dateString.month + dateString.day + dateString.year;
    var yyyymmdd = dateString.year + dateString.month + dateString.day
    var ddmmyy = dateString.day + dateString.month + dateString.year.substring(2)
    var mmddyy = dateString.month + dateString.day + dateString.year.substring(2)
    var yymmdd = dateString.year.substring(2) + dateString.month + dateString.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalindromeForAllFromate(date) {
    var listOfPalindrome = allDateFormate(date)

    var flag = false;
    for (i = 0; i < listOfPalindrome.length; i++){
        if(listOfPalindrome[i] === reverseString(listOfPalindrome[i])){
            flag = true;
            break;
        }
    }

    return flag;
}