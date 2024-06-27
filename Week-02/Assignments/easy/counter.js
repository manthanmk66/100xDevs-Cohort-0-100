//* "We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second"

// var counter = 0;

// function counterWithTime() {
//   const d = new Date();

//   let timenow = d.getTime();
//   let timeinString = d.toTimeString();
//   console.log(timenow);
//   console.log(timeinString);
// }
// counterWithTime();

var counter=0;

function callback(){
    console.log(counter);
    counter++


}
setInterval(callback,1000);
