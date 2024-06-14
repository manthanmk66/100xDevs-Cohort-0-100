

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function anagram(str1,str2){
  if (str1.length!=str2.length){
    return false;
  }

    var first=str1.toLowerCase().split("").sort().join();
    var second=str2.toLowerCase().split("").sort().join();

  if (first === second){
     console.log("is  anagram")
  }
  else{
    return console.log("is not anagram")
  }

}

anagram("abcd","dabC");


// ------------------------------------------------------------------------------------
//Another Approach

function check(char, str) {
    let checkcase = false;
    for (let j = 0; j < str.length; j++) {
      if (char.toLowerCase() === str[j].toLowerCase()) {
        checkcase = true;
        break;
      }
    }
    return checkcase;
  }
  
  function isAnagram(str1,str2){
  
    if(str1.length!=str2.length){
      return false;
    }
    for(let i=0;i<str1.length;i++){
      var found=check(str1[i],str2)
        
      if (found==false){
        console.log("it is not anagram")
        return false;
      }
      console.log("it is anagram")
      return true;
    }
  }
  
  isAnagram("abcd","dabC")
  
  