/*

 Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
(Hint: setTimeout)

*/

var count=0;

function callback(){
    console.log(count);
    count++;
    setTimeout(callback,1000);
    
}
callback();

