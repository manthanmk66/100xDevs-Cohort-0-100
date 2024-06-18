/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/



var num=[1,2,10,8,9,5,6,7];



// findLargestElement(num);
// function findLargestElement(num){
//     let largest=num[0];
//     for(let i=0;i<num.length;i++){
//         if(num[i]>largest){
//             largest=num[i];
//         }
        
//     }
//     console.log(largest)
// }


// ------------------------------------------------------------





findLargestElement(num);

function findLargestElement(num){

    var largest = -1000000;
for(i in num)
    {
        if (largest < num[i])
        largest = num[i];
    }
    console.log(largest);
    
}


