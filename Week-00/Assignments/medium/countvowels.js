/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str){
//     count=0;
//     var newstr=str.toLowerCase().split("");
//     if(newstr =='a'||'e'|| 'i'|| 'o'|| 'u'){
//         count++;

//     }
//     console.log(count);
// }

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
  return count;
}

countVowels("Manthan");
