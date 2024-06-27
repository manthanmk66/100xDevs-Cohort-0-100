/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   var revstr = str.split("").reverse().join("");
//   console.log(revstr)
//   if (str == revstr) {
//     console.log("yes")
//     return true;
//   } 
//   else  console.log("No");
//   return false;
// }



function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let j = cleanedStr.length - 1;
  
    for (let i = 0; i < j; i++) {
      if (cleanedStr[i] !== cleanedStr[j]) {
        console.log("No");
        return false;
      }
      j--;
    }
    console.log("Yes");
    return true;
  }
  
  isPalindrome("ana");
  isPalindrome("vishal");
  